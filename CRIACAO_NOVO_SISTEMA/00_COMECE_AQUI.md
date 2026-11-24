# Criação de um novo sistema

**Exemplo técnico para construir outro site** a partir do Cesta do Vale. Roadmap e passo a passo revisados em 24/11/2026.

## Roteiro de leitura

| Leia | Para quê |
| --- | --- |
| [Roadmap de arquitetura](ROADMAP_ARQUITETURA.md) | Entender as camadas, jornadas, fases e critérios de aceite. |
| [Passo a passo](PASSO_A_PASSO_PROJETO.md) | Executar as oito fases, adaptando-as ao escopo escolhido. |
| [Especificação técnica para LLM](ESPECIFICACAO_TECNICA_IMPLEMENTACAO_LLM.md) | Implementar tecnicamente da ideia à produção: stack, dados, Vercel, CI/CD, segurança e integrações LLM/agentes. |
| [Prompt inicial para outro projeto](PROMPT_INICIAL_NOVO_PROJETO.md) | Texto pronto para iniciar outra conversa com uma LLM, anexando o manual visual e a especificação técnica. |
| [Estado técnico](ESTADO_ATUAL.md) | Consultar a base de referência e riscos encontrados. |
| [Modelos](01_MODELOS/01_DEFINICAO_E_PERSONAS.md) | Registrar produto, pessoas, telas, arquitetura e critérios. |
| [Flora e testes](FLORA_FLUXO_POSSIBILIDADES_E_TESTES.md) | Adaptar a assistente se ela atender às necessidades do novo site. |
| [Hackathon](HACKATHON.md) | Preparar uma versão demonstrável para um desafio. |
| [Revisão documental](REVISAO_DOCUMENTAL.md) | Encontrar a finalidade e o estado de cada referência. |
| [Validação](VALIDACAO.md) e [manifesto](MANIFESTO.json) | Consultar verificações, origem e integridade das cópias. |

## Ordem para começar

1. Leia o roadmap e escolha as fases compatíveis com a jornada.
2. Preencha [definição e personas](01_MODELOS/01_DEFINICAO_E_PERSONAS.md) e [requisitos e fluxos](01_MODELOS/02_REQUISITOS_E_FLUXOS.md). Se útil, use o [modelo de mapa de telas e protótipo](01_MODELOS/02A_MAPA_DE_TELAS_E_PROTOTIPO.md) e o [exemplo preenchido do Cesta do Vale](03_EXEMPLOS/MAPA_DE_TELAS_CESTA_DO_VALE.md).
3. Registre escolhas técnicas em [estrutura e arquitetura](01_MODELOS/03_ESTRUTURA_E_ARQUITETURA.md).
4. Mantenha progresso e evidências no [checklist](01_MODELOS/04_CHECKLIST_DE_CRIACAO.md).
5. Preencha o [briefing de implementação](01_MODELOS/05_BRIEFING_PARA_IMPLEMENTACAO.md) para orientar o desenvolvimento.
6. Use os [padrões de lançamento](01_MODELOS/06_PADROES_DE_LANCAMENTO.md) ao preparar a versão pública.
7. Para delegar a implementação a uma LLM, use a [especificação técnica](ESPECIFICACAO_TECNICA_IMPLEMENTACAO_LLM.md) como contrato executável, junto dos modelos preenchidos; resolva todos os campos `DECIDIR` antes das etapas dependentes.

## Referências

`02_REFERENCIAS/` guarda documentos e configurações de referência do Cesta do Vale. O [passo a passo original](02_REFERENCIAS/PASSO_A_PASSO_PROJETO.md) mostra como esse sistema foi construído. Algumas referências são históricas ou dependem de código e mídias do projeto de origem. Consulte a [revisão documental](REVISAO_DOCUMENTAL.md) antes de usá-las.

Para reutilizar código ou mídia, obtenha os arquivos no repositório de origem e adapte o domínio, os dados, as permissões, as migrações, os endereços e as integrações. Esta pasta contém material documental e configurações de exemplo. Não coloque a documentação em `frontend/public`, no build ou em rotas públicas.

## Instrução para iniciar a implementação

> Leia `CRIACAO_NOVO_SISTEMA/00_COMECE_AQUI.md`, `ROADMAP_ARQUITETURA.md` e `PASSO_A_PASSO_PROJETO.md`. Implemente a partir dos modelos preenchidos para o novo domínio. Use `02_REFERENCIAS` como exemplo técnico. Adapte as decisões ao produto aprovado, valide com dados fictícios e registre as evidências.
