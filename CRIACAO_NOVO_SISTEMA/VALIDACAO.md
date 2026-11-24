# Validação do pacote

## Revisão de 24/11/2026

Base do código de referência `66a56f1248371e990f9b4d92c9ee55f2daf8ca96`. A referência local de `origin/master` incluía a evolução `578ec74` de convites e prototipação. O [estado técnico](ESTADO_ATUAL.md) registra a diferença.

- **Inventário.** 84 arquivos portáteis identificados e registrados na [revisão por arquivo](REVISAO_DOCUMENTAL.md). O [manifesto](MANIFESTO.json) contém 69 referências, sendo 57 fiéis ao texto da origem e 12 adaptadas. Todos os SHA-256 foram recalculados e conferidos com normalização de quebras de linha para LF.
- **Navegação.** Validação automatizada dos links locais e do fechamento dos blocos em 60 arquivos Markdown. Na consolidação, foi também conferida a correspondência das oito fases entre o roadmap e o passo a passo. Os caminhos de código e mídia pertencentes à origem aparecem como referências textuais.
- **Configuração.** Conferidos os dois projetos Playwright, as etapas da CI, os contextos do Docker e o bloqueio da pasta no Vite. O pacote usa configurações do Cesta do Vale como exemplos.
- **Evidência da análise técnica na mesma base.** Build e três testes unitários do frontend passaram. O lint concluiu com dois avisos. Os 12 cenários da Flora passaram no Playwright com API simulada em desktop e celular, em execução que reutilizou o servidor Vite local.
- **Validação operacional ainda necessária.** A suíte Python encontrou acesso negado ao interpretador do ambiente virtual local na análise técnica. A revisão documental não validou os serviços publicados, o banco remoto ou os provedores reais.

## Revisão de 16/11/2026

As referências foram atualizadas a partir do checkout local baseado no commit `22d3fbd`.
Essas evidências descrevem o estado daquela revisão. O [estado técnico](ESTADO_ATUAL.md) registra a base posterior usada pelo roadmap.

O manifesto passou de 57 para 69 entradas. Foram conferidas a integridade das 68 cópias sincronizadas
por SHA-256 e a correspondência com as origens. A entrada do exemplo de ambiente conserva
seu hash anterior e foi excluída da leitura e da sincronização.

Foram conferidos 34 links locais do índice, dos cinco modelos, do roteiro de hackathon e do documento de estado atual,
todos com destinos existentes.
Esta revisão documental utiliza a inspeção da configuração Vite para registrar a permanência
do bloqueio `**/CRIACAO_NOVO_SISTEMA/**`. A evidência HTTP abaixo pertence à execução de 10/11.

## Evidências históricas de 10/11/2026

Verificações executadas em **10/11/2026**:

- 57 cópias conferidas pelo SHA-256 registrado no manifesto.
- 16 links locais do índice/modelos novos conferidos, sem destinos ausentes.
- Blocos de código dos documentos novos conferidos, sem fechamento ausente.
- `npm run lint` e `npm run build` do frontend aprovados após a configuração de bloqueio.
- Servidor Vite temporário encerrado após o teste: acesso direto ao documento por `/@fs/`
  retornou **403**; `isFileLoadingAllowed` retornou `false`.
- A URL comum `/CRIACAO_NOVO_SISTEMA/00_COMECE_AQUI.md` retornou o fallback da aplicação,
  sem o conteúdo do documento. HTTP 200 do fallback não significa publicação do arquivo.
- A página inicial continuou respondendo HTTP 200.

Os testes verificam a configuração local. Não houve deploy ou consulta à hospedagem nesta tarefa.
Os links herdados das referências para código/imagens que não fazem parte deste pacote não são
considerados documentos autossuficientes; a limitação está explicada no índice.
