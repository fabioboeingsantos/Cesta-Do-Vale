# Checklist de criação

Use as fases do [roadmap](../ROADMAP_ARQUITETURA.md#4-etapas-dependências-e-critérios-de-aceite) para acompanhar a entrega. Registre o motivo para uma fase que não se aplica ao projeto.

| Fase | Responsável | Situação | Evidência com versão e data |
| --- | --- | --- | --- |
| [fase do roadmap] | [nome] | [pendente, em andamento, concluída ou não aplicável] | [resultado de teste, documento ou ambiente] |

## Definição

- [ ] Preencher problema, personas, tarefas e matriz de permissões.
- [ ] Confirmar se a mudança envolve apenas personas ou também o domínio.
- [ ] Definir escopo, entidades, estados, regras e critérios de aceite.
- [ ] Prototipar a jornada principal com mapa de telas, permissões e estados de falha.
- [ ] Definir identidade visual e necessidade de assistente/voz/e-mail.

## Mapa de telas e protótipo

- [ ] Decidir quais formas de entrada cada perfil precisa.
- [ ] Registrar origem, ação, destino, acesso e estados de cada tela no [mapa](02A_MAPA_DE_TELAS_E_PROTOTIPO.md).
- [ ] Conectar e percorrer as jornadas e as alternativas escolhidas no protótipo clicável.
- [ ] Registrar o link do protótipo e as decisões pendentes antes de começar a implementação.

## Preparação do projeto

- [ ] Criar pasta e repositório próprios.
- [ ] Configurar runtimes e dependências a partir dos arquivos aprovados.
- [ ] Criar `.gitignore`, exemplos de ambiente e documentação inicial.
- [ ] Definir banco novo, URLs, CORS e chaves próprias.
- [ ] Substituir domínios, nomes de projetos, referências à marca e dados de demonstração.
- [ ] Manter esta pasta fora de `public`, build e rotas da aplicação.
- [ ] Verificar acesso direto à pasta de referência no servidor de desenvolvimento. Se usar Vite, manter o bloqueio explícito.

## Implementação

- [ ] Criar os modelos e migrações do novo domínio.
- [ ] Implementar serviços e validações de estado/quantidade/valor aplicáveis.
- [ ] Implementar autenticação, autorização e isolamento de dados.
- [ ] Definir idempotência/concorrência para operações com efeitos nos dados.
- [ ] Criar telas, cliente HTTP e tratamento de falhas.
- [ ] Adaptar prompts e permissões da IA, se mantida.
- [ ] Manter uma alternativa manual para as operações apoiadas por IA.

## Verificação

- [ ] Testar cada perfil e recusar acessos indevidos.
- [ ] Executar a suíte do backend em banco isolado.
- [ ] Validar migrações desde banco vazio e atualização de uma versão anterior.
- [ ] Executar lint e build do frontend.
- [ ] Testar o fluxo completo no navegador e no celular.
- [ ] Executar uma jornada integrada em homologação com API e banco isolados, além dos cenários com respostas simuladas.
- [ ] Executar testes unitários do frontend e E2E Playwright, se adotados.
- [ ] Conferir contraste de textos, campos e botões nos temas claro e escuro.
- [ ] Testar seleção entre registros recentes e reinício do contexto pelo menu do assistente, se adotado.
- [ ] Testar requisições simultâneas nas transições críticas.
- [ ] Testar logout, expiração, recuperação e invalidação de sessões conforme a política escolhida.
- [ ] Conferir que o build não inclui documentação interna ou credenciais.

## Publicação

- [ ] Conferir os [19 padrões de lançamento](06_PADROES_DE_LANCAMENTO.md) e registrar evidências.
- [ ] Adaptar Compose/Docker, CI e arquivos da hospedagem.
- [ ] Conferir RLS/políticas/privilégios, caso use Supabase.
- [ ] Configurar cookie seguro em HTTPS e origens corretas.
- [ ] Validar provedores externos sem afetar contas reais.
- [ ] Definir backups, limites e monitoramento.
- [ ] Ensaiar restauração e rollback e registrar as pessoas responsáveis.
- [ ] Registrar evidências com data; não herdar resultados de testes do projeto anterior.
- [ ] Atualizar README, arquitetura, banco, fluxos e pendências do novo sistema.
