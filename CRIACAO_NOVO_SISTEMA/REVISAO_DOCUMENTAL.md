# Revisão documental por arquivo

Revisão de 24/11/2026 com base no checkout `66a56f1`. O [roadmap](ROADMAP_ARQUITETURA.md) e o [estado técnico](ESTADO_ATUAL.md) consolidam a arquitetura. O [passo a passo](PASSO_A_PASSO_PROJETO.md) orienta a criação de outro site.

## Guias e modelos do pacote

| Arquivo | Resultado da revisão |
| --- | --- |
| `00_COMECE_AQUI.md` | Atualizado. Entrada do exemplo técnico e ordem de leitura. |
| `ROADMAP_ARQUITETURA.md` | Arquitetura de referência, com oito fases, entregas e critérios de aceite. |
| `PASSO_A_PASSO_PROJETO.md` | Execução das oito fases, com exemplo que liga tela, API, dados e teste. |
| `ESTADO_ATUAL.md` | Versão de origem, marcos incluídos e riscos a reavaliar. |
| `FLORA_FLUXO_POSSIBILIDADES_E_TESTES.md` | Atualizado. Descreve os dois fluxos da Flora, fallback, substituição e testes. |
| `HACKATHON.md` | Atualizado. Inclui mapa de telas e uso dos documentos centrais. |
| `01_MODELOS/01_DEFINICAO_E_PERSONAS.md` | Atualizado. Orienta distinguir persona, conta, perfil e propriedade. |
| `01_MODELOS/02_REQUISITOS_E_FLUXOS.md` | Atualizado. Inclui mapa de telas, protótipo e estados de falha. |
| `01_MODELOS/03_ESTRUTURA_E_ARQUITETURA.md` | Atualizado. Inclui precedência de ambiente, fronteiras, transações e operação. |
| `01_MODELOS/04_CHECKLIST_DE_CRIACAO.md` | Atualizado. Inclui protótipo, homologação integrada, restauração e rollback. |
| `01_MODELOS/05_BRIEFING_PARA_IMPLEMENTACAO.md` | Atualizado. Solicita contratos, mapa de telas, critérios e ambientes do novo projeto. |
| `01_MODELOS/06_PADROES_DE_LANCAMENTO.md` | Revisado. Mantém as verificações existentes e liga ao exemplo de privacidade operacional. |
| `MANIFESTO.json` | Atualizado. Registra base, cópias, adaptações e SHA-256 reproduzível. |
| `VALIDACAO.md` | Atualizado. Registra evidências e limites da revisão. |
| `REVISAO_DOCUMENTAL.md` | Novo. Inventário dos arquivos e instruções de uso de cada referência. |

## Documentação e configurações em `02_REFERENCIAS/`

**Atualizada** indica correção de conteúdo no pacote ou sincronização com a origem. **Referência** indica material útil com escolhas próprias da origem. **Histórico** indica registro datado ou planejamento preservado. Os nomes da tabela são relativos a `02_REFERENCIAS/`.

| Arquivo | Situação e uso técnico |
| --- | --- |
| `.dockerignore` | Referência. Exclusão da documentação interna e artefatos no contexto da raiz. |
| `.gitignore` | Referência. Padrões de exclusão da origem. Adaptar conforme os caminhos e artefatos do novo projeto. |
| `.github/workflows/ci.yml` | Referência atual. Inclui pytest, lint, testes unitários, Playwright e build. Adaptar a branch e os ambientes. |
| `.docs/README.md` | Referência. Índice do diário da origem, com foco em IA. |
| `.docs/arquitetura.md` | Referência. Topologia de software e proposta de cesta. Consultar o roadmap para o sistema completo e o guia da Flora para o fluxo geral. |
| `.docs/decisoes.md` | Histórico. Decisões da entrega de IA, úteis para rastrear o motivo das escolhas. |
| `.docs/ia.md` | Referência. Escopo da montagem, chamada estruturada e confirmação. |
| `.docs/infra.md` | Histórico. Proposta com MySQL privado. Caminhos locais foram convertidos em referências à origem para facilitar a leitura. |
| `.docs/infra.html` | Histórico. Versão visual da proposta de infraestrutura. |
| `.docs/proximos-passos.md` | Histórico. Conserva impedimentos e tarefas daquela etapa. A validação atual está no pacote. |
| `.docs/roadmap.md` | Histórico. Acompanha a implementação da proposta da Flora. O roadmap atual do pacote cobre o sistema completo. |
| `ACESSO_LOCAL.md` | Referência. Acesso por rede local. Adaptar IP, origens e portas e conferir permissões de microfone no navegador. |
| `Caddyfile` | Referência atual. Serve o build e encaminha `/api` no Compose. |
| `docker-compose.yml` | Referência atual. MySQL, migração na startup e proxy. Usar volume e ambiente próprios. |
| `PASSO_A_PASSO_PROJETO.md` | Histórico. Guia de construção da origem. O guia na raiz do pacote traz a sequência para um novo domínio. |
| `PENDENCIAS.md` | Atualizada. Identifica Playwright já configurado e separa a validação integrada ainda necessária. |
| `README.md` | Atualizada. Corrige precedência de ambiente e banco, caminhos da Flora e CI. |
| `backend/.dockerignore` | Referência. Exclusões do contexto da API. |
| `backend/alembic.ini` | Referência. Configuração do Alembic. O novo projeto deve apontar para suas próprias migrações. |
| `backend/CASOS_DE_TESTE.md` | Referência. Casos de autenticação e permissões, com cobertura parcial do sistema. |
| `backend/Dockerfile` | Referência atual. Build da API. Conferir a versão Python escolhida para o novo ambiente. |
| `backend/requirements-dev.txt` | Referência. Dependências dos testes da origem. |
| `backend/requirements.txt` | Referência. Dependências da API da origem. Avaliar quais integrações o novo site usará. |
| `backend/ia/prompts/assinante.md` | Referência. Restrições e vocabulário da assinante. Adaptar ao novo perfil. |
| `backend/ia/prompts/base.md` | Referência. Instruções compartilhadas do domínio de cestas. |
| `backend/ia/prompts/interprete.md` | Referência. Classificação de intenções do domínio. |
| `backend/ia/prompts/produtor.md` | Referência. Tarefas e permissões do produtor. |
| `backend/ia/prompts/qa.md` | Referência. Revisão estruturada complementar à validação do backend. |
| `docs/ANALISE_SISTEMA.md` | Atualizada. Preserva resultados datados, corrige a descrição da CI e aponta para o roadmap. |
| `docs/ASSISTENTE_OPENROUTER.md` | Histórico. Guia do fluxo de análise antes da proposta dedicada. Consultar a Flora na raiz para o fallback e o comportamento atual. |
| `docs/AUTENTICACAO_EMAIL.md` | Atualizada. Alinha a precedência de variáveis com o código. O passo a passo do novo projeto orienta ambientes próprios. |
| `docs/banco-de-dados.md` | Atualizada. Inclui sete tabelas, dados de entrega e preço histórico, relações e revisão Alembic. |
| `docs/BRIEFING.md` | Histórico. Perguntas e premissas de produto anteriores ao checkout. Use como exemplo de elicitação. |
| `docs/BRIEFING_IA.md` | Histórico. Planejamento de IA. Use o guia da Flora para comportamento implementado. |
| `docs/CARTILHA.md` | Histórico. Escopo original, anterior às entidades e telas atuais. |
| `docs/DIAGRAMA_GRUPOS.html` | Histórico. Exemplo visual de permissões. Use o roteiro atual para verificar as jornadas. |
| `docs/FLUXOS.md` | Atualizada. Jornadas da base, cadastro, recuperação, separação, envio e confirmação de entrega. |
| `docs/ia.md` | Histórico. Planejamento inicial e decisões de IA da origem, com links portáteis para cartilha e briefing. |
| `docs/PRD.md` | Histórico. Exemplo de escopo e objetivos do MVP. |
| `docs/PRIVACIDADE_OPERACIONAL.md` | Atualizada. Incluída a partir da origem, com retenção e atendimento da demonstração. |
| `docs/TDR.md` | Histórico. Termo de referência técnico da etapa inicial. |
| `docs/TESTES_ASSISTENTE_OPENROUTER.md` | Histórico. Evidência dos cenários com o provedor em 05/11. |
| `docs/VALIDACAO_LOCAL.md` | Histórico. Execuções anteriores, inclusive a inspeção do banco remoto em uma data específica. |
| `docs/ia/arquitetura.md` | Referência. Descreve agentes e um fluxograma de evolução. Use o guia da Flora para distinguir a montagem do fluxo geral e o fallback vigente. |
| `docs/ia/cenarios.md` | Referência. Casos de IA para adaptar ao contrato e domínio novos. |
| `docs/ia/configuracao.md` | Atualizada. Identifica a cadeia atual, variáveis de fallback e as duas rotas. |
| `docs/ia/CONVERSA_E_CATALOGO.md` | Referência. Histórico em memória e catálogo visual. |
| `docs/ia/ESCRITORIO_FLORA.html` | Histórico. Material visual de apresentação. |
| `docs/ia/FALLBACK_JANGADA.md` | Histórico. Demonstração controlada preservada com indicação do roteiro disponível para reprodução. |
| `docs/ia/fallback.ia.md` | Referência. Experimento isolado de fallback, com escopo próprio. |
| `docs/ia/FLUXO_AGENTES.html` | Histórico. Apresentação do fluxo de agentes. |
| `docs/ia/fluxo-assistente.mmd` | Histórico. Diagrama evolutivo. O fluxo implementado está no guia da Flora. |
| `docs/ia/fluxo-assistente.svg` | Histórico. Imagem do diagrama evolutivo. |
| `docs/ia/INTERATIVIDADE_FLORA.md` | Histórico. Levantamento visual e de interação com o caminho da imagem no repositório de origem. |
| `docs/ia/PROMPT_FLORA.md` | Referência visual. Prompt de arte, separado das instruções operacionais dos agentes. |
| `docs/ia/RELATORIO_TESTES_2026-11-07.md` | Histórico. Evidências datadas de testes da Flora. |
| `docs/ia/TESTE_UX_FLORA.md` | Referência. Roteiro manual para a experiência da Flora. |
| `docs/ia/VOZ_FLORA.md` | Referência. Voz de navegador e Google Aoede conforme configuração. |
| `docs/styleguide/CORES.md` | Referência visual. Adaptar tokens e medir contraste no novo tema. |
| `docs/styleguide/COMPONENTES.md` | Referência visual. Componentes e estados a adaptar. |
| `docs/styleguide/TIPOGRAFIA.md` | Referência visual. Hierarquia, pesos e escala da marca de origem. |
| `frontend/.dockerignore` | Referência. Exclusões do contexto de build da tela. |
| `frontend/Dockerfile` | Referência atual. Build do frontend e servidor do conteúdo público. |
| `frontend/package.json` | Referência atual. Dependências e scripts. |
| `frontend/package-lock.json` | Referência. Lockfile correspondente ao projeto de origem. Gere o do novo projeto junto das dependências aprovadas. |
| `frontend/playwright.config.js` | Referência atual. Texto conferido com a origem, com projetos desktop e celular. |
| `frontend/README.md` | Referência. Instruções de uso do frontend da origem. |
| `frontend/vercel.json` | Referência atual. Rewrite aponta para a API de origem. Substituir pelo destino do novo projeto. |
| `frontend/vite.config.js` | Referência atual. Inclui bloqueio da pasta interna no servidor de desenvolvimento. |

O eventual `02_REFERENCIAS/.env.exemplo` local é ignorado pelo Git e fica fora do manifesto portátil. O [passo a passo](PASSO_A_PASSO_PROJETO.md#2-preparar-repositório-e-ambientes) contém um exemplo de configuração para o novo projeto.
