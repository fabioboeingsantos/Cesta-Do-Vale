# Privacidade na operação da demonstração

Fabio Boeing Santos recebe solicitações em `fabio.boeingsantos@gmail.com`. O aviso público está disponível em `/informacoes#privacidade`. O Cesta do Vale é uma demonstração, sem cobrança ou entrega real.

## Dados, banco e funcionamento da Flora

O projeto usa o Supabase como banco PostgreSQL quando configurado para esse ambiente. A confirmação final deve verificar o ambiente de implantação. O código armazena contas, produtos e pedidos. Pedidos incluem itens, semana, estado de separação e entrega e avaliações. O sistema armazena notificações relacionadas aos pedidos e hashes de uso único para links de confirmação e recuperação. A confirmação final deve verificar cópias, logs e backups mantidos pelo Supabase e pela hospedagem.

A Flora não persiste o histórico da conversa como histórico de chat no banco. As mensagens e o contexto da conversa permanecem na sessão da interface. A Flora consulta o catálogo e os pedidos permitidos ao perfil. Quando a configuração usa IA externa, a mensagem atual e o contexto necessário à resposta são enviados ao provedor de IA configurado. A configuração deve ser verificada para identificar provedor e condições vigentes. O reconhecimento de fala e a síntese de voz dependem das opções ativas do navegador e do backend.

## Retenção e atendimento

A política pública estabelece revisão dos dados demonstrativos a cada 90 dias. Esta revisão é um procedimento operacional manual e não uma eliminação automática. A retenção técnica de backups, logs e dados de provedores depende da configuração contratual do Supabase e da hospedagem e deve ser conferida no ambiente publicado.

- Verificar a data e o objetivo de cada cadastro, pedido, notificação e token de conta.
- Revisar os registros de teste a cada 90 dias. Excluir ou anonimizar os que perderam a finalidade, observando obrigações e solicitações de titulares.
- A confirmação por e-mail expira em 24 horas e links de recuperação em 30 minutos. O banco guarda o hash, não o token enviado.
- Avaliar notificações, pedidos que registram nome de usuário e cópias em backups ao atender um pedido de exclusão. Fazer a verificação num banco isolado antes de atuar em dados compartilhados.
- Responder solicitações pelo e-mail público. Não solicitar senha. Guardar somente o registro mínimo necessário para acompanhar a solicitação.

## Origem de imagens e vídeos

O responsável informou que as imagens e os vídeos da landing foram criados com ChatGPT e ferramentas do Google. Registrar, para cada arquivo, qual ferramenta do Google foi usada, a data de criação, os termos aplicáveis nessa data e eventuais imagens ou materiais fornecidos como referência. A informação sobre a ferramenta de origem e as condições históricas de cada arquivo ainda precisa ser confirmada para completar o inventário de permissões.

Os vídeos exibidos pela landing são versões silenciosas dos vídeos de apresentação. Cada vídeo tem descrição textual equivalente. As imagens documentadas historicamente como provenientes da Wikimedia Commons são arquivos diferentes e não devem ser confundidas com a mídia da landing.