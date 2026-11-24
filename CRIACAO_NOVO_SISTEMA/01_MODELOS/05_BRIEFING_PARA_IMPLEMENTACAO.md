# Briefing para implementar o novo sistema

Anexe o mapa de telas, os contratos, os critérios de aceite e o plano de ambientes preenchidos para o novo domínio. Referencie o [roadmap](../ROADMAP_ARQUITETURA.md) e o [passo a passo](../PASSO_A_PASSO_PROJETO.md) como exemplos técnicos.

Preencha os campos e entregue este documento junto dos modelos anteriores.

## Solicitação

Criar o sistema **[nome]** para **[público]**, com a jornada principal **[resultado esperado]** e as tecnologias aprovadas abaixo.

## Decisões aprovadas

- Problema e objetivo: [preencher].
- Personas e perfis: [preencher].
- Tarefas e permissões: [referenciar a matriz preenchida].
- Funcionalidades e regras: [referenciar requisitos preenchidos].
- Mapa de telas e protótipo clicável: [referenciar mapa, link compartilhável e jornadas conferidas].
- Domínio preservado ou substituído: [preencher].
- Entidades e transições: [preencher].
- Marca, linguagem e recursos visuais: [preencher].
- Frontend, backend, banco, sessão, infraestrutura e CI: [preencher os componentes adotados].
- Assistente e integrações opcionais: [preencher].
- Critérios de aceite: [preencher].

## Regras de adaptação

1. Consultar `00_COMECE_AQUI.md` e os modelos preenchidos antes de implementar.
2. Tratar `02_REFERENCIAS` como material de origem; não presumir que decisões antigas valem para o novo sistema.
3. Não reutilizar contas, senhas, banco ou domínios publicados do projeto anterior.
4. Manter documentos internos fora dos arquivos servidos pela aplicação.
5. Não copiar regras de cestas, estoque, preços ou prazos se não fizerem parte do novo domínio.
6. Definir política de sessão e tratar concorrência em operações com efeitos persistentes.
7. Implementar os testes pertinentes e registrar apenas verificações realmente executadas.

## Entrega esperada

Código, configuração de ambiente sem segredos, instruções de execução, fluxos, testes e evidências. Para projetos com persistência, inclua esquema e migrações. Registre as pendências no checklist.
