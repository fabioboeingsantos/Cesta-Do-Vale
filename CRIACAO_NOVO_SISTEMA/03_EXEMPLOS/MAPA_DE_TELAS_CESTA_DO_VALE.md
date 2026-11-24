# Cesta do Vale — mapa de telas para o protótipo

O exemplo cobre o acesso, o pedido manual e a separação. Use o [modelo em branco](../01_MODELOS/02A_MAPA_DE_TELAS_E_PROTOTIPO.md) para adaptar as decisões ao próximo sistema.

## Decisões do Cesta do Vale

- A landing apresenta o serviço e oferece **Criar conta de assinante** e **Entrar**.
- O cadastro público é de assinantes. A confirmação do e-mail é opcional.
- O responsável emite o convite de produtor por comando administrativo e entrega o link em canal privado. O convite vale 48 horas e pode ativar a conta uma única vez.
- O login é comum. O perfil da conta leva a **Pedir a cesta** ou ao painel do produtor. Após entrar, a pessoa chega diretamente à tarefa ou ao painel. O primeiro acesso de produtor inclui a definição da senha pelo convite.

## Inventário

| ID e tela | Perfil com acesso | Origem | Ação principal | Destino ou resultado | Estados relevantes |
| --- | --- | --- | --- | --- | --- |
| A1 · Landing | Visitante | Endereço do frontend | Criar conta de assinante ou entrar | A2 ou A3 | Inicial, acesso aberto, fechar e voltar |
| A2 · Cadastro de assinante | Visitante | A1 ou A3 | Informar usuário, e-mail e senha e criar conta | A3 com confirmação | Campos inválidos, senhas diferentes, usuário/e-mail ocupado, enviando, cadastro confirmado |
| A3 · Login comum | Assinante ou produtor, antes de iniciar sessão | A1, A2, A4, A6 ou A7 | Entrar com usuário/e-mail e senha | S1 para assinante, P1 para produtor. **Esqueci minha senha** abre A5 | Credenciais inválidas, limite de tentativas, validando, confirmação de cadastro/ativação/redefinição |
| A4 · Ativação do produtor | Pessoa com link de convite | Link entregue pelo responsável | Definir e confirmar a senha | A3 com confirmação | Senhas diferentes, enviando, convite inválido, expirado (inclusive por reemissão) ou usado. Pedir outro ou voltar ao login |
| A5 · Recuperação | Pessoa que esqueceu a senha | A3 | Informar e-mail e solicitar instruções | Resposta neutra na própria tela, com link para A6 enviado ao e-mail quando aplicável | E-mail inválido, enviando, resposta neutra, limite de tentativas, envio indisponível |
| A6 · Redefinição | Pessoa com link de recuperação | E-mail da recuperação | Salvar a nova senha | A3 com confirmação | Senhas diferentes, link inválido/expirado/usado, enviando, senha alterada |
| A7 · Confirmação de e-mail | Pessoa com link de confirmação | E-mail opcional do cadastro | Confirmar e-mail | A3 com confirmação | Confirmando, link inválido/expirado/usado, endereço confirmado |
| S1 · Pedir a cesta | Assinante | A3 ou menu da área autenticada | Escolher tipo, tamanho e itens | S2 para revisar. **Minhas cestas** abre S3 | Catálogo carregando, seleção incompleta, falta de estoque, composição pronta para revisar |
| S2 · Revisão do pedido | Assinante | S1 | Revisar composição e finalizar pedido | S3 com confirmação e pedido pendente em destaque | Revisão, erro de estoque, salvando, sucesso; voltar para editar |
| S3 · Minhas cestas | Assinante, pedidos da própria conta | S1, S2 ou S4 | Expandir um pedido e abrir **Ver detalhes e separação** | S4 | Lista vazia, cartões recolhidos ou expandidos, pedido recém-criado em destaque |
| S4 · Detalhes da cesta | Assinante, pedido da própria conta | S3 | Conferir itens e situação | Própria tela, com confirmação de recebimento quando enviada, ou volta para S3 | Pedido indisponível, pendente, em separação, preparado, enviado, entregue, cancelado; itens faltantes quando houver |
| P1 · Painel do produtor | Produtor | A3 | Abrir **A separação** | P2 | Menu inicial com separação, consulta, estoque e entregas |
| P2 · Lista de separação | Produtor | P1 ou P3 | Expandir uma cesta e clicar em **Separar produtos** | P3 | Lista vazia, filtros, pedidos pendentes ou em separação |
| P3 · Separação da cesta | Produtor | P2 | Conferir itens e salvar progresso ou concluir | Estado atualizado na própria tela; voltar a P2 | Sem progresso, parcial, falta de estoque, erro ao salvar, **Preparado para envio** ao concluir |

## Conexões do protótipo clicável

1. **Primeiro pedido.** A1 → **Criar conta de assinante** → A2 → **Criar conta de assinante** → A3 com confirmação → **Entrar** → S1 → montar cesta → S2 → **Finalizar pedido** → S3 com confirmação e pedido em destaque.
2. **Assinante que retorna.** A1 → **Entrar** → A3 → S1 → **Minhas cestas** → S3 → abrir um pedido → S4 → voltar para S3.
3. **Produtor convidado.** Simular o link já emitido → A4 → **Ativar conta de produtor** → A3 com confirmação → **Entrar** → P1 → P2 → **Separar produtos** → P3 → **Salvar e concluir separação** → estado **Preparado para envio**. Ligar também os estados inválido, expirado e usado de A4, com retorno ao login e orientação para pedir novo convite.
4. **Recuperação.** A3 → **Esqueci minha senha** → A5 → **Recuperar senha** → resposta neutra → abrir link simulado → A6 → **Salvar nova senha** → A3 com confirmação.
5. **Alternativas.** Conectar login recusado, confirmação opcional de e-mail (A7 → A3), revisão com estoque alterado (S2 → S1) e lista vazia em S3 ou P2.

Para conduzir a demonstração, prepare duas contas fictícias de perfis distintos, um segundo pedido já registrado para o histórico e links simulados para os estados do convite e da recuperação. A confirmação do pedido é um estado de **Minhas cestas** no fluxo atual.
