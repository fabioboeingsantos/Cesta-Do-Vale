import { useEffect } from 'react'

const email = 'fabio.boeingsantos@gmail.com'

export function focarInformacao(hash) {
  if (!['#privacidade', '#cookies', '#termos'].includes(hash)) return

  const secao = document.getElementById(hash.slice(1))
  if (!secao) return

  secao.open = true
  secao.querySelector('summary').focus({ preventScroll: true })
  secao.scrollIntoView({ block: 'start' })
}

export function abrirInformacaoAtual(evento) {
  const hash = evento.currentTarget.hash
  if (hash === window.location.hash) {
    requestAnimationFrame(() => focarInformacao(hash))
  }
}

function Contato() {
  return <a href={`mailto:${email}`}>{email}</a>
}

export function InformacoesLegais() {
  useEffect(() => {
    const focar = () => focarInformacao(window.location.hash)
    const quadro = requestAnimationFrame(focar)
    window.addEventListener('hashchange', focar)
    return () => {
      cancelAnimationFrame(quadro)
      window.removeEventListener('hashchange', focar)
    }
  }, [])

  return (
    <>
      <details id="privacidade">
        <summary>Política de privacidade</summary>
        <div className="vale-documento">
          <h3>Quem responde pelos dados</h3>
          <p>Fabio Boeing Santos é o responsável pelo tratamento dos dados da demonstração Cesta do Vale. Para assuntos de privacidade ou acessibilidade, escreva para <Contato />.</p>
          <h3>O que usamos e para quê</h3>
          <p>A página pública verifica se há uma sessão aberta. As escolhas da prévia de alimentos e tamanhos ficam na própria página. No cadastro, usamos o nome de usuário, o e-mail e a senha protegida por hash para oferecer acesso, confirmação e recuperação. Usamos informações de conexão, como o endereço IP, para limitar tentativas de acesso e proteger o serviço.</p>
          <p>O Supabase é o banco de dados da aplicação. Ele guarda contas e informações dos pedidos simulados, incluindo itens, quantidades, semana, andamento e avaliações. O sistema também guarda notificações relacionadas aos pedidos e hashes temporários de links para confirmar e-mail ou recuperar senha. Esses dados operacionais ficam vinculados ao serviço de conta e pedidos.</p>
          <h3>Serviços usados no funcionamento</h3>
          <p>O Supabase fornece o banco de dados. O serviço de e-mail processa seu endereço ao enviar confirmação e recuperação da conta. A Flora consulta catálogo e pedidos autorizados durante a sessão. A conversa e o histórico usados pela interface ficam em memória e não são gravados como histórico da Flora no banco. Quando o modo de IA externa estiver ativo, a mensagem e o contexto necessário à resposta podem ser enviados ao provedor de IA configurado. O reconhecimento de voz depende do navegador e a leitura em voz alta pode depender da configuração de síntese de voz.</p>
          <h3>Retenção e seus direitos</h3>
          <p>Os dados de contas e pedidos são mantidos enquanto necessários para a demonstração. Os dados demonstrativos são revisados a cada 90 dias para identificar registros que já não atendem a essa finalidade. Dados de recuperação têm validade limitada. Você também pode solicitar a exclusão pelo contato abaixo.</p>
          <p>Pelo e-mail <Contato />, você pode solicitar confirmação de tratamento, acesso ou correção, informações sobre compartilhamento, portabilidade quando cabível, anonimização, bloqueio ou eliminação e exercer os demais direitos previstos na LGPD. Para proteger a conta, podemos pedir uma confirmação proporcional da sua identidade.</p>
        </div>
      </details>
      <details id="cookies">
        <summary>Cookies e armazenamento</summary>
        <div className="vale-documento">
          <p>Usamos um cookie de autenticação para manter o acesso após o login. A duração padrão é de 24 horas. Ao sair, o navegador recebe a instrução para apagar o cookie. O token de acesso também fica no armazenamento da aba durante a sessão e é removido ao sair.</p>
          <p>Se você trocar o tema, o navegador guarda a preferência até que ela seja alterada ou que você limpe os dados do site. As notificações da sessão ficam na memória da página. Os avisos persistentes são consultados no servidor com a conta autenticada.</p>
          <p>A landing não usa cookies de publicidade, pixels ou ferramentas de análise de audiência. Você pode apagar os dados locais nas configurações do navegador. Bloquear o armazenamento de autenticação pode impedir a restauração da sessão.</p>
        </div>
      </details>
      <details id="termos">
        <summary>Termos da demonstração</summary>
        <div className="vale-documento">
          <p>O Cesta do Vale é uma demonstração de um sistema de pedidos de cestas. Produtos, estoque, valores, pedidos e entregas são usados para testar o funcionamento. Criar uma conta ou confirmar um pedido não gera cobrança, compra, entrega ou reembolso.</p>
          <p>Use os fluxos com dados de teste e não informe dados de pagamento ou de outras pessoas. Mantenha suas credenciais protegidas e encerre a sessão ao usar um computador compartilhado. A Flora serve para explorar o catálogo e sugerir cestas para revisão.</p>
          <p>As imagens e animações da apresentação são ilustrações geradas por IA. Para dúvidas sobre a demonstração, escreva para <Contato />.</p>
        </div>
      </details>
    </>
  )
}

export function PaginaInformacoes() {
  return <div className="inicio-vale">
    <main className="vale-largura vale-informacoes">
      <a href="/">Voltar ao Cesta do Vale</a>
      <h1>Informações do Cesta do Vale</h1>
      <div className="vale-perguntas"><InformacoesLegais /></div>
    </main>
  </div>
}
