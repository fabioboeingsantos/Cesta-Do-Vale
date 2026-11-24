"""Validação da emissão e da ativação pelo fluxo real da API."""

from datetime import timedelta
from hashlib import sha256

import pytest
from sqlalchemy import select

from modelos.token_conta import TokenConta
from modelos.usuario import Usuario
from servicos import convites
from servicos.excecoes import UsuarioJaExiste
from .conftest import SessaoDeTeste

SENHA = "colheita-de-outono"


def emitir(usuario="horta-nova", email="horta@example.com"):
    with SessaoDeTeste() as sessao:
        link = convites.emitir(sessao, usuario, email, "https://cesta.example.com")
    assert link.startswith("https://cesta.example.com/#ativar-produtor=")
    return link.split("=", 1)[1]


def ativar(cliente, token, senha=SENHA):
    return cliente.post("/autenticacao/ativar-produtor", json={"token": token, "senha": senha})


def login(cliente, usuario, senha):
    return cliente.post("/autenticacao/login", json={"usuario": usuario, "senha": senha})


def test_ativa_produtor_uma_vez_pelo_login_comum(cliente):
    token = emitir()
    with SessaoDeTeste() as sessao:
        registro = sessao.scalar(select(TokenConta))
        assert registro.token_hash == sha256(token.encode()).hexdigest()
        assert registro.expira_em - registro.criado_em == timedelta(hours=48)
        conta = sessao.get(Usuario, registro.usuario_id)
        assert not conta.ativo
        email = conta.email

    assert login(cliente, email, SENHA).status_code == 401
    assert ativar(cliente, token, "curta").status_code == 422
    resposta = ativar(cliente, token)
    assert resposta.status_code == 200
    assert "ativada" in resposta.json()["mensagem"]
    assert cliente.get("/usuarios/me").status_code == 401
    resposta = ativar(cliente, token, "outra-senha-valida")
    assert resposta.status_code == 409
    assert "já foi usado" in resposta.json()["detail"]
    assert login(cliente, email, "outra-senha-valida").status_code == 401
    assert login(cliente, email, SENHA).json()["perfil"] == "produtor"
    with pytest.raises(UsuarioJaExiste):
        emitir()
    with SessaoDeTeste() as sessao:
        conta = sessao.scalar(select(Usuario).where(Usuario.email == email))
        conta.ativo = False
        sessao.commit()
    with pytest.raises(UsuarioJaExiste):
        emitir()


@pytest.mark.parametrize("token", ["", "invalido", "x" * 43])
def test_convite_invalido(cliente, token):
    resposta = ativar(cliente, token)
    assert resposta.status_code == 400
    assert "Convite inválido" in resposta.json()["detail"]


def test_expiracao_e_reemissao(cliente):
    expirado = emitir()
    with SessaoDeTeste() as sessao:
        sessao.scalar(select(TokenConta)).expira_em -= timedelta(days=3)
        sessao.commit()
    resposta = ativar(cliente, expirado)
    assert resposta.status_code == 410
    assert "expirou" in resposta.json()["detail"]
    substituido = emitir()
    novo = emitir()
    assert ativar(cliente, substituido).status_code == 410
    assert ativar(cliente, novo).status_code == 200


def test_cadastro_publico_e_convite_preservam_perfis_e_contas(cliente):
    emitir()
    cadastro = {
        "usuario": "horta-nova", "email": "horta@example.com", "senha": SENHA,
        "perfil": "produtor",
    }
    assert cliente.post("/usuarios", json=cadastro).status_code == 409
    cadastro.update(usuario="assinante-nova", email="assinante@example.com")
    resposta = cliente.post("/usuarios", json=cadastro)
    assert resposta.status_code == 201
    assert resposta.json()["perfil"] == "assinante"
    assert login(cliente, "assinante-nova", SENHA).json()["perfil"] == "assinante"
    with pytest.raises(UsuarioJaExiste):
        emitir("vanderlei", "vanderlei@example.com")
    assert login(cliente, "vanderlei", "vanderlei123").json()["perfil"] == "produtor"
