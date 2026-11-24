# Configuração do assistente

Configure os provedores e modelos no ambiente da API. Comece com `ASSISTENTE_MODO=simulado` para desenvolvimento sem chamadas externas. O exemplo abaixo habilita o modo externo no Cesta do Vale.

```dotenv
ASSISTENTE_MODO=openrouter
IA_PROVEDOR_PADRAO=openrouter
IA_PROVEDOR_INTERPRETE=openrouter
IA_PROVEDOR_ASSINANTE=openrouter
IA_PROVEDOR_PRODUTOR=openrouter
IA_PROVEDOR_QA=openrouter
IA_FALLBACK_JANGADA=true
IA_GEMINI_FALLBACK_MODEL=gemini-3.8-flash
OPENROUTER_API_KEY=
GEMINI_API_KEY=
IA_MODELO_PADRAO=openrouter/free
IA_MODELO_PEDIDO_CESTA=
IA_MODELO_INTERPRETE=
IA_MODELO_ASSINANTE=
IA_MODELO_PRODUTOR=
IA_MODELO_QA=
OPENROUTER_MAX_TOKENS=2048
```

`/assistente/analisar` resolve consultas reconhecidas localmente e, quando precisa de IA externa, executa os agentes com OpenRouter. Em uma falha elegível, a Jangada pode tentar Gemini. A resposta passa pelo contrato do agente e pela validação do fluxo. O adaptador registra o provedor que respondeu no fluxo de agentes.

`/assistente/pedido` tem caminho próprio. Usa uma proposta estruturada e validação local, com ferramentas vazias e confirmação posterior pela rota de negócio. O limite de saída que a rota de montagem passa à Jangada é 2048 tokens no checkout de referência.

`IA_FALLBACK_JANGADA=false` desliga a reserva. Erros de autenticação e requisições inválidas não acionam fallback, pois trocar de provedor não corrige esses problemas. `ASSISTENTE_MODO=simulado` desliga chamadas externas e executa o fluxo local.

`IA_MODELO_PADRAO` e `IA_MODELO_*` escolhem os modelos. A OpenRouter continua limitada a modelos gratuitos e sua chave deve estar em `OPENROUTER_API_KEY`.

As variáveis antigas `OPENROUTER_MODEL*` continuam aceitas quando o agente usa OpenRouter.

As chamadas dos agentes são sequenciais. A Jangada aplica retry limitado e fallback para falhas recuperáveis. Se OpenRouter e Gemini falharem, a API retorna HTTP 503.

Nunca use prefixo `VITE_` para a chave. Reinicie a API após alterar configuração ou prompts.
Não inclua credenciais no Git. Os arquivos `backend/ia/prompts/*.md` devem acompanhar
a aplicação no deploy.

[Fluxos atuais da Flora](../../../FLORA_FLUXO_POSSIBILIDADES_E_TESTES.md) · [Evidências anteriores](../ASSISTENTE_OPENROUTER.md)
