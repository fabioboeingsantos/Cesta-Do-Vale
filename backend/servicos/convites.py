"""Emissão administrativa e ativação de contas de produtor."""

from datetime import timedelta
from hashlib import sha256
from secrets import token_urlsafe
from urllib.parse import urlsplit

from fastapi import HTTPException
from sqlalchemy import select, update

from modelos.token_conta import TokenConta
from modelos.usuario import Usuario
from repositorios import usuario as repositorio
from seguranca import criar_hash_de_senha
from servicos import tokens_conta
from servicos.excecoes import UsuarioJaExiste

TIPO = "convite_produtor"
VALIDADE = timedelta(hours=48)


def emitir(sessao, usuario, email, origem):
    """Reserva uma conta inativa e devolve o link para entrega pelo responsável."""
    origem = origem.strip().rstrip("/")
    url = urlsplit(origem)
    local = url.hostname in {"localhost", "127.0.0.1"}
    if (not url.hostname or url.username or url.password or url.query or url.fragment
            or (url.scheme != "https" and not (local and url.scheme == "http"))):
        raise ValueError("Informe a URL do frontend em HTTPS (HTTP apenas local).")

    conta = repositorio.buscar_por_usuario(sessao, usuario)
    if conta is None:
        if repositorio.buscar_por_email(sessao, email):
            raise UsuarioJaExiste("Este e-mail já está cadastrado.")
        conta = Usuario(usuario=usuario, email=email, perfil="produtor", ativo=False,
                        senha_hash=criar_hash_de_senha(token_urlsafe(32)))
        sessao.add(conta)
        sessao.flush()
    else:
        if conta.ativo or conta.perfil != "produtor" or conta.email != email:
            raise UsuarioJaExiste("Este usuário já está cadastrado.")
        # A atualização condicional também serializa a escrita no SQLite.
        reserva = sessao.execute(update(Usuario).where(
            Usuario.id == conta.id, Usuario.ativo.is_(False),
        ).values(ativo=False))
        ultimo_convite = sessao.scalar(select(TokenConta).where(
            TokenConta.usuario_id == conta.id, TokenConta.tipo == TIPO,
        ).order_by(TokenConta.id.desc()).limit(1))
        if reserva.rowcount != 1 or ultimo_convite is None or ultimo_convite.usado_em is not None:
            raise UsuarioJaExiste("Este usuário já está cadastrado.")
        instante = tokens_conta.agora()
        sessao.execute(update(TokenConta).where(
            TokenConta.usuario_id == conta.id, TokenConta.tipo == TIPO,
            TokenConta.usado_em.is_(None), TokenConta.expira_em > instante,
        ).values(expira_em=instante))

    token = tokens_conta.gerar(sessao, conta, TIPO, tokens_conta.agora(), VALIDADE)
    sessao.commit()
    return f"{origem}/#ativar-produtor={token}"


def ativar(sessao, token, senha):
    invalido = "Convite inválido. Confira o link ou peça outro ao responsável."
    usado = "Este convite já foi usado. Entre com a conta que você ativou."
    if len(token) != 43:
        raise HTTPException(400, invalido)
    convite = sessao.scalar(select(TokenConta).where(
        TokenConta.token_hash == sha256(token.encode()).hexdigest(), TokenConta.tipo == TIPO,
    ))
    if convite is None:
        raise HTTPException(400, invalido)

    # No PostgreSQL, a emissão e o consumo bloqueiam a conta antes de alterar os tokens.
    conta = sessao.scalar(select(Usuario).where(Usuario.id == convite.usuario_id).with_for_update())
    sessao.refresh(convite)
    instante = tokens_conta.agora()
    if convite.usado_em is not None:
        raise HTTPException(409, usado)
    expirado = "Este convite expirou. Peça um novo convite ao responsável."
    if convite.expira_em <= instante:
        raise HTTPException(410, expirado)
    if conta is None or conta.ativo or conta.perfil != "produtor":
        raise HTTPException(400, invalido)

    resultado = sessao.execute(update(TokenConta).where(
        TokenConta.id == convite.id, TokenConta.usado_em.is_(None), TokenConta.expira_em > instante,
    ).values(usado_em=instante))
    if resultado.rowcount != 1:
        sessao.rollback()
        sessao.refresh(convite)
        if convite.usado_em is None and convite.expira_em <= tokens_conta.agora():
            raise HTTPException(410, expirado)
        raise HTTPException(409, usado)
    conta.senha_hash = criar_hash_de_senha(senha)
    conta.ativo = True
    sessao.commit()
