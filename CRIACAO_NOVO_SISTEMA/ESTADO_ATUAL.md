# Estado técnico do Cesta do Vale

Esta documentação foi consolidada em 24/11/2026. O roadmap descreve o checkout local `66a56f1`. Na revisão, `origin/master` estava em `578ec74`, com convites de produtor e prototipação. A referência remota não comprova o deploy.

O Cesta do Vale usa React/Vite, FastAPI, SQLAlchemy e Alembic. O checkout documenta catálogo, pedidos, estoque, separação, entrega, autenticação, recuperação de conta, notificações e Flora. A configuração contempla SQLite local, MySQL no Compose e PostgreSQL/Supabase e Vercel na publicação. Veja o [roadmap](ROADMAP_ARQUITETURA.md) para a arquitetura completa e o [mapa de telas](03_EXEMPLOS/MAPA_DE_TELAS_CESTA_DO_VALE.md) para a jornada de entrada.

## Marcos da referência

- O fluxo recente da Flora inclui reiniciar a conversa pelo menu e consultar cestas com itens ainda por separar.
- A landing e a documentação operacional descrevem a demonstração do Cesta do Vale.
- O código de referência tem revisão Alembic `20261107_0015`. A revisão realmente aplicada depende do banco em uso.
- A origem oferece cadastro público de assinante. O commit remoto posterior documenta convites administrativos para produtores.

Os testes E2E existentes interceptam as chamadas à API. CI configurada não substitui evidência de execução, e E2E simulado não comprova a integração com API e banco reais.

## Riscos a reavaliar

| Tema | Constatação na origem | Critério para reaproveitar |
| --- | --- | --- |
| Estoque e notificações | A análise estática aponta risco de efeitos duplicados em transições concorrentes. | Testar as transições no banco de destino e garantir um único efeito por operação. |
| Migrações e acesso ao banco | A cadeia contém um ponto de compatibilidade de chave estrangeira SQLite a verificar. `stamp` apenas registra a revisão no histórico. | Testar banco vazio e atualização e verificar permissões e RLS quando aplicável. |
| Sessões e limites | O logout limpa credenciais do cliente, enquanto um JWT existente pode continuar válido até expirar ou ser invalidado. O limitador é mantido em memória por processo. | Definir validade, revogação e limites adequados à quantidade de instâncias. |
| Cobertura integrada | Os testes de navegador interceptam a API. | Exercitar a jornada com API e banco isolados em homologação. |

Consulte a [análise de sistema](02_REFERENCIAS/docs/ANALISE_SISTEMA.md), a [validação](VALIDACAO.md) e a [revisão por arquivo](REVISAO_DOCUMENTAL.md) para contexto e limites das evidências.
