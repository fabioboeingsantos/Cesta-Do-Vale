# Mapa de telas e protótipo

Preencha entre [requisitos e fluxos](02_REQUISITOS_E_FLUXOS.md) e [estrutura e arquitetura](03_ESTRUTURA_E_ARQUITETURA.md). Consulte o [exemplo preenchido do Cesta do Vale](../03_EXEMPLOS/MAPA_DE_TELAS_CESTA_DO_VALE.md).

## Decisões de acesso

| Decisão | Escolha e justificativa | O que aparece no protótipo |
| --- | --- | --- |
| O sistema precisa de landing page? | [sim/não; público, objetivos e endereço de entrada] | [landing e botões ou a tela/link que inicia cada jornada] |
| Algum perfil terá cadastro público? | [sim/não por perfil; campos, confirmação e verificação de e-mail] | [entrada, formulário, erro, confirmação e retorno] |
| Algum perfil terá acesso por convite? | [sim/não por perfil; quem emite, como entrega, validade e reemissão] | [emissão, se houver interface; link simulado, ativação, confirmação, link inválido/expirado/usado e saída desses estados] |
| Algum perfil precisa de primeiro acesso guiado? | [sim/não por perfil; gatilho, passos obrigatórios, retomada e conclusão] | [destino inicial, passo a passo, saída e destino de quem retorna] |
| Como serão login e recuperação? | [identificador, como obter o perfil, destino por perfil e política de recuperação] | [login, erro, destino por perfil e recuperação/redefinição quando prevista] |

## Inventário de telas

Duplique as linhas conforme as jornadas aprovadas. Use o mesmo ID quando uma tela for compartilhada. Se um resultado aparecer na própria tela, registre o estado e informe como a pessoa continua.

| ID e nome da tela | Perfil com acesso | Origem da navegação | Ação principal | Destino ou resultado | Estados relevantes |
| --- | --- | --- | --- | --- | --- |
| [T01 · Entrada] | [público ou perfil] | [URL, link, menu ou tela anterior] | [ação e rótulo] | [ID ou estado] | [inicial, restrito, erro e saída] |
| [T02 · Formulário] | [perfil e condições] | [ID e ação de origem] | [ação] | [ID ou estado] | [vazio, validação, enviando, falha e sucesso] |
| [T03 · Resultado] | [perfil e propriedade dos dados] | [ID e evento] | [ação] | [ID ou estado] | [carregando, vazio, confirmação, retorno] |

## Conexões obrigatórias para o protótipo clicável

Registre a sequência por IDs, a ação clicável em cada transição e o caso de aceite associado. Ligue também as saídas de erro, o retorno e o cancelamento quando fizerem parte da jornada.

| Jornada | Telas e estados a conectar antes da implementação | Cenário para percorrer |
| --- | --- | --- |
| Primeira tarefa de um novo usuário | [entrada escolhida → criação/ativação, se aplicável → login → guia, se escolhido → tarefa → revisão → confirmação] | [perfil, dados fictícios e resultado esperado] |
| Pessoa que retorna | [entrada → login → destino do perfil → lista ou consulta → detalhes → volta] | [perfil e registro existente] |
| Perfil com acesso restrito | [entrada ou convite → login → painel → ação principal → confirmação; cobrir link inválido, expirado e usado quando houver convite] | [perfil, autorização e mudança de estado] |
| Recuperação de acesso | [login → solicitação → retorno neutro → link simulado → redefinição → confirmação no login, se prevista] | [resultado com link válido e saída com link inválido] |

- Link e versão do protótipo: [preencher].
- Jornadas percorridas e ajustes aprovados: [preencher].
- Decisões pendentes e responsável: [preencher].
