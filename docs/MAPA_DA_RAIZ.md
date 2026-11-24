# Mapa da raiz do Cesta do Vale

Inventário da estrutura em 24/11/2026. A árvore lista todos os itens da raiz observados e abre os principais pontos de navegação. Os itens marcados como locais estavam fora do Git.

```text
Cesta-Do-Vale/
├── .docs/                     arquitetura, decisões, infraestrutura e roadmap
├── .git/                      metadados locais do Git
├── .github/
│   └── workflows/ci.yml       verificações do frontend e do backend
├── .pytest_cache/             cache local de testes
├── .venv-tests/               ambiente Python local para testes
├── .vercel/                   vínculo local com projetos da Vercel
├── Apresentacao/
│   ├── personas/              imagens e referências para a apresentação
│   └── arquivos HTML e MD     entrega, roteiro, tabelas e fluxo de agentes
├── Apresentacao 02/
│   ├── cenarios/              materiais dos cenários
│   └── arquivos HTML          segunda apresentação, roteiro e Flora
├── backend/
│   ├── main.py                entrada da API FastAPI
│   ├── configuracao.py       configuração do ambiente
│   ├── banco.py              engine e sessões do banco
│   ├── rotas/                 endpoints HTTP
│   ├── esquemas/              contratos Pydantic
│   ├── servicos/              regras de negócio e integrações
│   ├── repositorios/          consultas e gravações
│   ├── modelos/               entidades SQLAlchemy
│   ├── migracoes/versions/    revisões Alembic
│   ├── ia/                    agentes, prompts e provedores da Flora
│   ├── tests/                 testes Python
│   └── Dockerfile, alembic.ini, requirements.txt, requirements-dev.txt
├── CRIACAO_NOVO_SISTEMA/
│   ├── 00_COMECE_AQUI.md       índice do material reutilizável
│   ├── 01_MODELOS/            modelos para preencher
│   ├── 02_REFERENCIAS/        cópias de documentos e configurações de origem
│   ├── 03_EXEMPLOS/           exemplos preenchidos
│   └── guias, especificação técnica, prompt e manifesto
├── docs/
│   ├── ia/                    documentação da Flora
│   ├── marca/                 materiais de identidade
│   ├── styleguide/            cores, tipografia e componentes
│   └── documentos de produto, fluxos, dados, acesso e validação
├── frontend/
│   ├── src/                   aplicação React e cliente HTTP
│   ├── public/                arquivos públicos, inclusive apresentacao-02/
│   ├── tests/                 testes unitários e E2E
│   └── package.json, package-lock.json, vite.config.js, vercel.json, Dockerfile
├── output/
│   └── pdf/                   manuais exportados e gerador do guia de e-mail
├── skills/
│   └── montar-ajustar-cesta/  skill da Flora para o domínio de cestas
├── tmp/                       arquivos temporários locais
├── .dockerignore              exclusões para o contexto Docker da raiz
├── .env                       configuração local do backend
├── .env.exemplo               modelo versionado de variáveis de ambiente
├── .env.local                 configuração local de ambiente
├── .gitignore                 exclusões do Git
├── .vercelignore              exclusões para o envio à Vercel
├── ACESSO_LOCAL.md            instruções para iniciar e acessar o sistema
├── Caddyfile                  configuração do servidor web e do proxy da API
├── docker-compose.yml        composição do ambiente em contêineres
├── PASSO_A_PASSO_PROJETO.md   histórico e roteiro de implementação do Cesta
├── PENDENCIAS.md              pendências do projeto
├── PLANOS_FUTUROS.md          proposta de evolução da Flora
├── README.md                  entrada do repositório
├── requirements.txt          lista Python adicional na raiz
└── Site.md                    endereço do site
```

## Dependências de caminhos

- **Docker:** [docker-compose.yml](../docker-compose.yml), [Caddyfile](../Caddyfile) e os Dockerfiles de cada aplicação compõem o ambiente. Revise caminhos de build e volumes antes de mover arquivos.
- **CI:** o [workflow](../.github/workflows/ci.yml) executa os comandos nos diretórios `frontend/` e `backend/`. O workflow, o Dockerfile do backend e o README apontam para as dependências Python de `backend/`.
- **Vercel:** o README documenta projetos separados com raízes `frontend/` e `backend/`. O [vercel.json do frontend](../frontend/vercel.json) define o build e o encaminhamento de `/api`.
- **Apresentações:** há materiais em duas pastas da raiz e conteúdo servido em `frontend/public/apresentacao-02/`. Antes de consolidar, confira os links relativos, a origem das mídias e as páginas servidas.
- **Ambiente local:** `.env`, `.env.local`, `.vercel/`, `.venv-tests/`, `.pytest_cache/` e `tmp/` estão ignorados pelo Git. O inventário registra somente os nomes desses itens.

## Organização sugerida

1. Usar o README como ponto de entrada. Incorporar nele o endereço de `Site.md` e centralizar, em `docs/`, os guias de acesso local, implementação e planejamento. Atualizar os links na mesma mudança.
2. Definir uma função clara para `.docs/` e `docs/`. Se ambas forem mantidas, documentar onde ficam as decisões técnicas, os guias e o histórico. Se houver consolidação, conferir primeiro os links para infraestrutura e as cópias em `02_REFERENCIAS/`.
3. Agrupar as apresentações por edição sob uma pasta comum depois de mapear mídia, links e arquivos publicados.
4. Conferir se alguma rotina usa o `requirements.txt` da raiz. Os caminhos documentados de instalação e deploy usam os arquivos de `backend/`. Se a lista da raiz tiver uma função própria, registrar essa função no README.
5. Manter `CRIACAO_NOVO_SISTEMA/` como ponto de entrada para reutilização. Quando incluir guias e PDFs no Git, lembrar que a visibilidade acompanha a do repositório.
