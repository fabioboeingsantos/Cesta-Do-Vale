# Passo a passo para construir outro site

Para execução por LLM/agentes com decisões de stack, contratos, banco, segurança, integração de IA, CI/CD e Vercel em nível de implementação, consulte também a [especificação técnica](ESPECIFICACAO_TECNICA_IMPLEMENTACAO_LLM.md). Ela complementa este passo a passo e define gates e evidências por fase.

Siga as oito fases do [roadmap](ROADMAP_ARQUITETURA.md#4-etapas-dependências-e-critérios-de-aceite) e registre as evidências no [checklist de criação](01_MODELOS/04_CHECKLIST_DE_CRIACAO.md). Os exemplos usam a estrutura do Cesta do Vale.

Se o novo site for institucional e estático, siga as fases 1, 2, 5, 7 e 8. Adote dados, contas e integrações conforme as jornadas exigirem.

## 1. Produto e protótipo

1. Abra uma pasta e um repositório próprios para o novo site. Copie a pasta `CRIACAO_NOVO_SISTEMA` para a raiz como referência interna.
2. Preencha [definição e personas](01_MODELOS/01_DEFINICAO_E_PERSONAS.md) e [requisitos e fluxos](01_MODELOS/02_REQUISITOS_E_FLUXOS.md). Escolha uma jornada principal, quem a inicia, quem pode dar continuidade e qual resultado comprova o sucesso.
3. Mapeie telas, URLs e estados aplicáveis, incluindo a saída após sucesso ou erro. Prototipe a jornada no celular e no desktop.
4. Preencha [arquitetura](01_MODELOS/03_ESTRUTURA_E_ARQUITETURA.md) e [briefing](01_MODELOS/05_BRIEFING_PARA_IMPLEMENTACAO.md). Vincule cada requisito à tela, ao contrato correspondente quando houver e ao teste que vai comprová-lo.

## 2. Preparar repositório e ambientes

1. Organize o frontend, a documentação e a CI. Crie um backend se a arquitetura exigir. Se adotar a stack de referência, consulte as dependências do projeto. A CI do Cesta do Vale usa Node 22 e Python 3.12.
2. Comece com o ambiente local e planeje homologação e produção. Registre URL da tela e, quando houver, URL da API, origem CORS, banco, migração e integrações habilitadas.
3. Versione um `.env.exemplo` com campos vazios e valores fictícios. Mantenha segredos no servidor. Variáveis `VITE_*` entram no código distribuído ao navegador.

| Configuração | Exemplo a preencher no novo site |
| --- | --- |
| API e sessão | `FRONTEND_URL=http://localhost:5173`, `JWT_SECRET_KEY=` com chave própria no ambiente real e política de cookie escolhida. |
| Banco local | `BANCO_DRIVER=sqlite` e `BANCO_NOME=./novo_sistema.db` se mantiver o carregador de referência. |
| Frontend | `VITE_URL_DA_API=http://localhost:8000` em local ou `/api` com proxy configurado. |
| Integrações | SMTP, IA e voz só quando aprovadas. Use o modo simulado e um destino de e-mail de testes durante a implementação. |

No Cesta do Vale, a API preserva as variáveis do processo e complementa os valores a partir de `.env` na raiz e depois de `backend/.env`. Com `BANCO_DRIVER=sqlite` explícito, a API usa SQLite mesmo se houver uma URL externa. O frontend tem configuração de ambiente própria. [Configuração da origem](02_REFERENCIAS/README.md)

## 3. Dados e contratos

1. Para cada entidade, escreva o identificador, proprietário, campos obrigatórios, relacionamentos, regras de unicidade, índices e retenção. No Cesta do Vale, a cesta é o registro principal e os itens preservam o preço da criação. Identifique os dados equivalentes do seu domínio.
2. Crie modelos SQLAlchemy e uma migração inicial Alembic para o novo esquema. Rode `alembic upgrade head` em banco isolado e documente como evoluir a partir da versão anterior. Mantenha a carga fictícia em um comando próprio.
3. Defina rotas, esquemas Pydantic e respostas de sucesso e erro. Registre campos de entrada, códigos de resposta e efeitos persistidos.
4. Para cada transição, registre estado de origem, permissão, condição, novo estado e efeitos colaterais. Reserve ou devolva recursos na mesma transação que altera o registro. Defina como repetição e requisições simultâneas serão tratadas.

## 4. Conta e permissões

1. Decida como criar contas públicas e perfis internos. Defina a sessão, a expiração e os fluxos de recuperação e logout.
2. Valide identidade, perfil e propriedade de cada registro na API. Teste separadamente uma operação permitida, o acesso com o perfil incorreto e o acesso a um registro de outra conta.
3. Verifique o comportamento de uma sessão anterior após expiração, logout ou redefinição de senha conforme a política definida.

## 5. Jornada principal

1. Comece por uma única operação do domínio. Em um sistema com backend, implemente rota → serviço → repositório → banco e confira a resposta e o efeito persistido.
2. Integre a tela e trate carregamento, falha e confirmação. Use um cliente HTTP centralizado para chamadas à API. Valide a navegação e o acesso por perfil quando houver.
3. Acrescente o painel operacional, a atualização de estado, o histórico e os avisos previstos. Use a [jornada da cesta](ROADMAP_ARQUITETURA.md#2-jornadas-e-regras-que-atravessam-as-camadas) como referência de integração.
**Exemplo de rastreio.** No Cesta do Vale, a revisão da cesta leva a `POST /cestas`, que valida a disponibilidade, cria o pedido e reserva estoque. Com a Flora, `POST /assistente/pedido` gera a prévia e a confirmação aciona a rota de criação. Na origem, `backend/tests/test_assistente_pedido.py` verifica que gerar a prévia não cria um pedido. A jornada de confirmação tem cobertura de interface em `frontend/tests/e2e/flora.spec.js`, com API simulada. Em homologação, confira também o pedido salvo e o saldo de estoque no banco de teste.

## 6. Integrações opcionais

1. Para e-mail ou voz, defina o gatilho, as permissões, os dados enviados, o limite de uso e a resposta em caso de falha.
2. Se adotar IA, comece com consulta local ou modo simulado. Defina entradas e saídas estruturadas, contexto autorizado, validação determinística e política de provedor e fallback. Use confirmação explícita antes de gravar pela rota de negócio. [Referência da Flora](FLORA_FLUXO_POSSIBILIDADES_E_TESTES.md)
3. Teste a falha de cada integração e a alternativa disponível para a jornada principal.

## 7. Homologação

### Executar localmente

Os comandos abaixo exemplificam uma aplicação que adotou a estrutura e os scripts do Cesta do Vale. Execute na raiz do **novo repositório**, depois de criar os arquivos do projeto e configurar um banco isolado. Os blocos do backend e frontend usam terminais distintos.

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt -r requirements-dev.txt
.\.venv\Scripts\python.exe -m alembic upgrade head
.\.venv\Scripts\python.exe -m uvicorn main:app --reload --port 8000
```

```powershell
cd frontend
npm.cmd ci
npm.cmd run dev
```

### Verificar a versão candidata

1. Em `backend/`, execute `.\.venv\Scripts\python.exe -m pytest -q` com banco de teste. Em `frontend/`, rode lint, testes unitários e build. Se adotar Playwright, instale Chromium com `npx.cmd playwright install chromium` e execute `npm.cmd run test:e2e` com os scripts configurados.
2. Valide no navegador e no celular a jornada principal, teclado, leitura de tela, contraste e estados de erro. Se o projeto tiver persistência, teste a integração com API e banco isolados, incluindo acesso por perfil, transições simultâneas e migrações aplicáveis.
3. Confira os [padrões de lançamento](01_MODELOS/06_PADROES_DE_LANCAMENTO.md). Registre commit, ambiente, data e resultado de cada verificação.

## 8. Lançamento e operação

1. Configure a hospedagem e as variáveis do novo ambiente. Se adotar Docker Compose, verifique volumes, proxy e inicialização. Se adotar Vercel, configure os projetos da tela e da API e substitua o destino do rewrite.
2. Se houver banco, aplique as migrações de forma controlada, confirme permissões e ensaie a restauração em ambiente isolado. Registre o plano de reversão e a pessoa responsável antes de publicar.
3. Confira a jornada no endereço final em HTTPS, os cookies se houver sessão e a prontidão dos serviços envolvidos. Verifique que o build contém apenas o conteúdo destinado à publicação.
4. Registre a versão publicada e as evidências. Configure alertas de falha e latência e documente retenção, atendimento e limites de consumo conforme as integrações usadas. [Exemplo de privacidade operacional](02_REFERENCIAS/docs/PRIVACIDADE_OPERACIONAL.md)
