import { useEffect, useRef, useState } from 'react'
import { InformacoesLegais, abrirInformacaoAtual } from './InformacoesLegais'
import { tamanhosCesta } from '../utilitarios/tamanhosCesta'
import './TelaInicio.css'

const produtos = [
  { id: 'alface', nome: 'Alface', grupo: 'Folhas' },
  { id: 'tomate', nome: 'Tomate', grupo: 'Legumes' },
  { id: 'cenoura', nome: 'Cenoura', grupo: 'Raízes' },
  { id: 'couve', nome: 'Couve', grupo: 'Folhas' },
  { id: 'abobrinha', nome: 'Abobrinha', grupo: 'Legumes' },
  { id: 'beterraba', nome: 'Beterraba', grupo: 'Raízes' },
]
const grupos = ['Destaques', 'Folhas', 'Legumes', 'Raízes']

function Marca() {
  return <a className="vale-marca" href="#inicio" aria-label="Cesta do Vale, início">
    <img src="/marca/cesta-da-logo.png" width="44" height="44" alt="" />
    Cesta do Vale
  </a>
}

function Colheita() {
  const [grupo, selecionar] = useState('Destaques')
  const visiveis = grupo === 'Destaques' ? produtos.slice(0, 3) : produtos.filter(p => p.grupo === grupo)
  return <section className="vale-colheita vale-largura" id="colheita" aria-labelledby="titulo-colheita">
    <p className="vale-rotulo">O que vem da terra</p>
    <div className="vale-intro"><h2 id="titulo-colheita">Explore a <em>colheita.</em></h2>
      <p>Conheça alguns alimentos da horta. Na sua conta, você encontra os produtos disponíveis para a semana.</p></div>
    <div className="vale-filtros" role="group" aria-label="Filtrar alimentos">
      {grupos.map(item => <button type="button" key={item} aria-pressed={item === grupo} onClick={() => selecionar(item)}>{item}</button>)}
    </div>
    <p className="vale-ilustracoes">Imagens ilustrativas geradas por IA.</p>
    <ul className="vale-produtos" aria-live="polite" aria-label="Amostra de alimentos">{visiveis.map(p =>
      <li key={p.id}><img src={'/colheita/' + p.id + '.webp'} alt="" width="540" height="540" loading="lazy" />
        <div><h3>{p.nome}</h3><span>{p.grupo}</span></div></li>)}</ul>
  </section>
}

function GuiaCestas({ aoCriarConta }) {
  const [tamanho, selecionar] = useState(tamanhosCesta[0])
  return <section className="vale-guia" id="como-funciona" aria-labelledby="titulo-guia">
    <div className="vale-largura vale-guia-grid">
      <div className="vale-guia-texto"><p className="vale-rotulo">Como funciona</p>
        <h2 id="titulo-guia">Uma cesta do <em>seu jeito.</em></h2>
        <ol className="vale-passos">
          <li><strong>Escolha seu tamanho</strong><p>Compare as três opções e veja quantas unidades cabem em cada cesta.</p></li>
          <li><strong>Decida o que levar</strong><p>Escolha a cesta pronta ou combine os produtos disponíveis no catálogo.</p></li>
          <li><strong>Acompanhe seu pedido</strong><p>Confirme a seleção e acompanhe a separação e a entrega pela sua conta.</p></li>
        </ol><button type="button" className="vale-primario" onClick={aoCriarConta}>Criar conta de assinante</button>
      </div>
      <div className="vale-simulador"><img src={'/colheita/cesta-' + tamanho.id + '.webp'} alt={'Ilustração da cesta ' + tamanho.nome.toLowerCase()} width="512" height="512" loading="lazy" />
        <p className="vale-capacidade" role="status">Cesta {tamanho.nome.toLowerCase()} <span>·</span> {tamanho.limite} unidades</p>
        <div className="vale-tamanhos" role="group" aria-label="Tamanho da cesta">{tamanhosCesta.map(item =>
          <button type="button" key={item.id} aria-pressed={item.id === tamanho.id} onClick={() => selecionar(item)}>{item.nome}</button>)}</div>
      </div>
    </div>
  </section>
}

function AnimacaoLanding({ nome, descricao, poster, src }) {
  const videoRef = useRef(null)
  const pausaManual = useRef(false)
  const [reproduzindo, setReproduzindo] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    const pergunta = video.closest('details')
    const movimento = window.matchMedia('(prefers-reduced-motion: reduce)')
    let visivel = false

    function sincronizar() {
      if (!visivel || pergunta?.open === false || movimento.matches || pausaManual.current) {
        video.pause()
        return
      }
      video.play().catch(() => {})
    }

    const observador = new IntersectionObserver(([entrada]) => {
      visivel = entrada.isIntersecting && entrada.intersectionRatio >= 0.15
      sincronizar()
    }, { threshold: 0.15 })
    observador.observe(video)
    pergunta?.addEventListener('toggle', sincronizar)
    movimento.addEventListener('change', sincronizar)

    return () => {
      observador.disconnect()
      pergunta?.removeEventListener('toggle', sincronizar)
      movimento.removeEventListener('change', sincronizar)
    }
  }, [])

  function alternarReproducao() {
    const video = videoRef.current
    if (video.paused) {
      pausaManual.current = false
      video.play().catch(() => {})
    } else {
      pausaManual.current = true
      video.pause()
    }
  }

  return (
    <button
      type="button"
      className="vale-area-video"
      aria-label={`${reproduzindo ? 'Pausar' : 'Reproduzir'}: ${nome}`}
      aria-describedby={descricao}
      onClick={alternarReproducao}
    >
      <video
        ref={videoRef}
        aria-hidden="true"
        loop muted playsInline preload="none"
        poster={poster}
        src={src}
        onPlay={() => setReproduzindo(true)}
        onPause={() => setReproduzindo(false)}
      />
    </button>
  )
}


function DestaqueFlora({ aoAcessarFlora }) {
  return (
    <section className="vale-flora" id="conheca-flora" aria-labelledby="titulo-flora">
      <div className="vale-largura vale-flora-grid">
        <div className="vale-flora-texto">
          <p className="vale-rotulo">Assistente virtual</p>
          <h2 id="titulo-flora">Conheça a <em>Flora.</em></h2>
          <p>Converse com a Flora para consultar o catálogo, pedir sugestões e montar sua cesta. Digite ou use a voz quando o navegador oferecer esse recurso.</p>
          <div className="vale-flora-exemplo">
            <span>Experimente perguntar</span>
            <p>“Pode montar uma cesta pequena com alface, tomate e cenoura?”</p>
          </div>
          <p>A Flora monta uma prévia. Você pode ajustar os itens e decide quando confirmar o pedido simulado.</p>
          <button type="button" className="vale-primario" onClick={aoAcessarFlora}>Entrar para usar a Flora</button>
        </div>
        <figure className="vale-flora-video">
          <AnimacaoLanding
            nome="Animação da Flora e da sugestão de cesta"
            descricao="descricao-video-flora"
            poster="/imagens/flora-demonstracao.webp"
            src="/videos/flora-assistente-visual.mp4"
          />
          <figcaption id="descricao-video-flora" hidden>Animação sem áudio gerada por IA. A Flora aparece como uma luz cercada por folhas. Cartões com os produtos se juntam em uma cesta de hortaliças.</figcaption>
        </figure>
      </div>
    </section>
  )
}


function Duvidas() {
  return <section className="vale-duvidas vale-largura" id="duvidas" aria-labelledby="titulo-duvidas">
    <div><p className="vale-rotulo">Antes de pedir</p><h2 id="titulo-duvidas">Tire suas <em>dúvidas.</em></h2></div>
    <div className="vale-perguntas">
      <details>
        <summary>Posso conhecer a horta antes de entrar?</summary>
        <p>Explore a amostra de alimentos e os tamanhos das cestas. Todos os pedidos desta demonstração são simulados.</p>
        <p id="descricao-video-horta" hidden>A animação sem áudio mostra uma feira ao ar livre e uma cesta de vime sendo preenchida com folhas, cenouras, tomates e outras hortaliças.</p>
        <AnimacaoLanding
          nome="Animação da feira e da montagem da cesta"
          descricao="descricao-video-horta"
          poster="/imagens/feira-comunitaria-capa.webp"
          src="/videos/cesta-do-vale-visual.mp4"
        />
      </details>
      <InformacoesLegais />
    </div></section>
}

export default function TelaInicio({ aoEntrar, aoCriarConta, aoAcessarFlora }) {
  return <div className="inicio-vale" id="inicio">
    <a className="vale-pular" href="#principal">Pular para o conteúdo</a>
    <header className="vale-topo"><div className="vale-largura vale-barra"><Marca />
      <nav aria-label="Navegação principal"><a href="#colheita">A colheita</a><a href="#como-funciona">Como funciona</a><a href="#conheca-flora">A Flora</a><a href="#duvidas">Dúvidas</a></nav>
      <button className="vale-entrar" onClick={aoEntrar} type="button">Entrar</button></div></header>
    <main id="principal" tabIndex={-1}><section className="vale-hero" aria-labelledby="titulo-inicial">
      <img className="vale-feira" src="/imagens/feira-comunitaria-capa.webp" width="1600" height="900" alt="" fetchPriority="high" />
      <div className="vale-largura vale-hero-texto"><p className="vale-rotulo">Horta comunitária · Demonstração</p>
        <h1 id="titulo-inicial">Da horta,<br/><em>para a sua mesa.</em></h1>
        <p className="vale-chamada">Experimente montar uma cesta da semana e acompanhar um pedido de demonstração. O site não realiza cobranças.</p>
        <div className="vale-acoes"><a className="vale-primario" href="#colheita">Explorar a colheita</a><button className="vale-secundario" onClick={aoCriarConta} type="button">Criar conta de assinante</button></div>
      </div>
    </section>
    <Colheita /><GuiaCestas aoCriarConta={aoCriarConta} /><DestaqueFlora aoAcessarFlora={aoAcessarFlora} /><Duvidas /></main>
    <footer className="vale-rodape"><div className="vale-largura"><Marca /><a href="#privacidade" onClick={abrirInformacaoAtual}>Privacidade</a><a href="#cookies" onClick={abrirInformacaoAtual}>Cookies</a><a href="#termos" onClick={abrirInformacaoAtual}>Termos da demonstração</a><a href="#inicio">Voltar ao início</a></div></footer>
  </div>
}
