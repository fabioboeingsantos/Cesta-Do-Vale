"""Emite links de ativação em um ambiente com acesso administrativo ao banco."""

import argparse
import os

from pydantic import ValidationError
from sqlalchemy.exc import IntegrityError

from banco import Sessao
from esquemas.usuario import IdentificacaoUsuario
from servicos import convites
from servicos.excecoes import UsuarioJaExiste


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("usuario", help="Nome de usuário reservado para o produtor")
    parser.add_argument("email", help="E-mail da pessoa convidada")
    parser.add_argument("--url", default=os.getenv("EMAIL_FRONTEND_URL", ""),
                        help="URL do frontend (padrão: EMAIL_FRONTEND_URL)")
    argumentos = parser.parse_args()
    try:
        dados = IdentificacaoUsuario(usuario=argumentos.usuario, email=argumentos.email)
        with Sessao() as sessao:
            link = convites.emitir(sessao, dados.usuario, str(dados.email).lower(), argumentos.url)
    except ValidationError:
        parser.error("Informe um usuário válido, sem @, e um e-mail válido.")
    except (UsuarioJaExiste, ValueError) as erro:
        parser.error(str(erro))
    except IntegrityError:
        parser.error("O usuário ou e-mail já está cadastrado. Confira os dados e tente novamente.")
    print(link)


if __name__ == "__main__":
    main()
