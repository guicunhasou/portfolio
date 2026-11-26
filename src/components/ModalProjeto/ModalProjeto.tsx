import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
} from 'react';
import { useAcessibilidade } from '../../acessibilidade/AcessibilidadeContexto';
import { useIdioma } from '../../idiomas/IdiomaContexto';
import type { Projeto } from '../../types/projeto';
import IconeAcao from '../IconeAcao/IconeAcao';
import { ajustarPreviaModal } from './previaModal';

type PropriedadesModalProjeto = {
  projeto: Projeto;
  aoFechar: () => void;
  aoDefinirDestinoControles: (elemento: HTMLElement | null) => void;
};

function ModalProjeto({
  projeto,
  aoFechar,
  aoDefinirDestinoControles,
}: PropriedadesModalProjeto) {
  const { traducao } = useIdioma();
  const { movimentoReduzido, preferencias } = useAcessibilidade();
  const dialogoRef = useRef<HTMLDialogElement>(null);
  const painelRef = useRef<HTMLDivElement>(null);
  const rolagemRef = useRef<HTMLDivElement>(null);
  const cabecalhoRef = useRef<HTMLElement>(null);
  const rodapeRef = useRef<HTMLElement>(null);
  const galeriaRef = useRef<HTMLDivElement>(null);
  const textoRef = useRef<HTMLDivElement>(null);
  const [indiceImagem, setIndiceImagem] = useState(0);
  const [rotacaoInterrompida, setRotacaoInterrompida] = useState(false);
  const animacoesPausadas = preferencias.pausarAnimacoes;
  const idTitulo = `titulo-modal-${projeto.id}`;
  const idDescricao = `descricao-modal-${projeto.id}`;
  const colaboradores = projeto.colaboradores ?? [];
  const contribuicao = projeto.contribuicao ?? [];
  const imagensModal = projeto.imagensModal ?? [];
  const temLinks = projeto.links.length > 0;

  useEffect(() => {
    const dialogo = dialogoRef.current;

    if (!dialogo) {
      return;
    }

    document.body.classList.add('modal-aberto');

    if (!dialogo.open) {
      dialogo.showModal();
    }

    dialogo.focus({ preventScroll: true });

    return () => {
      document.body.classList.remove('modal-aberto');
    };
  }, []);

  useLayoutEffect(() => {
    const painel = painelRef.current;
    const rolagem = rolagemRef.current;
    const cabecalho = cabecalhoRef.current;
    const rodape = rodapeRef.current;
    const galeria = galeriaRef.current;
    const texto = textoRef.current;

    if (!painel || !rolagem || !cabecalho || !galeria || !texto) {
      return;
    }

    let quadroPrevia = 0;
    const ajustarRolagem = () => {
      if (!painel.clientHeight) {
        return;
      }

      const alturaCabecalho = cabecalho.offsetHeight;
      const alturaLivre = painel.clientHeight - alturaCabecalho - (rodape?.offsetHeight ?? 0);
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

      // A área central precisa acomodar leitura e navegação por teclado.
      const rolagemIntegral = alturaLivre < 9 * rem;
      painel.toggleAttribute('data-rolagem-integral', rolagemIntegral);
      // Compensa a barra de rolagem quando ela ocupa espaço no layout.
      const barraPainel = painel.offsetWidth - painel.clientWidth - 2 * painel.clientLeft;
      const barraRolagem = rolagem.offsetWidth - rolagem.clientWidth;
      rolagem.style.setProperty('--altura-cabecalho-modal', `${alturaCabecalho}px`);
      rolagem.style.setProperty('--altura-central-modal', `${alturaLivre}px`);
      rolagem.style.setProperty('--largura-barra-modal', `${barraPainel + barraRolagem}px`);
      cancelAnimationFrame(quadroPrevia);
      quadroPrevia = requestAnimationFrame(() => ajustarPreviaModal(rolagem, texto, rolagemIntegral));
    };

    const observador = new ResizeObserver(ajustarRolagem);
    observador.observe(painel);
    observador.observe(rolagem);
    observador.observe(cabecalho);
    observador.observe(galeria);
    observador.observe(texto);
    if (rodape) {
      observador.observe(rodape);
    }
    ajustarRolagem();

    let ativo = true;
    void document.fonts.ready.then(() => {
      if (ativo) {
        ajustarRolagem();
      }
    });

    return () => {
      ativo = false;
      cancelAnimationFrame(quadroPrevia);
      observador.disconnect();
    };
  }, [projeto.id, temLinks, traducao]);

  useEffect(() => {
    setIndiceImagem(0);
    setRotacaoInterrompida(false);
  }, [projeto.id]);

  useEffect(() => {
    if (movimentoReduzido || animacoesPausadas || rotacaoInterrompida) {
      return;
    }

    if (imagensModal.length <= 1) {
      return;
    }

    const intervalo = window.setInterval(() => {
      setIndiceImagem((indiceAtual) =>
        (indiceAtual + 1) % imagensModal.length,
      );
    }, 5000);

    return () => {
      window.clearInterval(intervalo);
    };
  }, [animacoesPausadas, imagensModal.length, movimentoReduzido, projeto.id, rotacaoInterrompida]);

  const navegarImagem = (direcao: number) => {
    setRotacaoInterrompida(true);
    setIndiceImagem((indiceAtual) =>
      (indiceAtual + direcao + imagensModal.length) % imagensModal.length,
    );
  };
  const posicaoImagem = traducao.projetos.posicaoImagem
    .replace('{atual}', String(indiceImagem + 1))
    .replace('{total}', String(imagensModal.length));

  const fecharDialogo = () => {
    // Libera o foco fora do diálogo antes da atualização da árvore do React.
    dialogoRef.current?.close();
    aoFechar();
  };

  const revelarConteudoFocado = (evento: FocusEvent<HTMLDivElement>) => {
    const { target: alvo, currentTarget: corpo } = evento;
    const rolagem = rolagemRef.current;
    if (alvo === corpo || !rolagem || painelRef.current?.hasAttribute('data-rolagem-integral')) {
      return;
    }

    requestAnimationFrame(() => {
      if (document.activeElement !== alvo) {
        return;
      }

      const limites = rolagem.getBoundingClientRect();
      const posicao = alvo.getBoundingClientRect();
      const { scrollPaddingBlockStart, scrollPaddingBlockEnd } = getComputedStyle(rolagem);
      const inicioVisivel = limites.top + parseFloat(scrollPaddingBlockStart);
      const fimVisivel = limites.bottom - parseFloat(scrollPaddingBlockEnd);
      const ajuste = posicao.top < inicioVisivel
        ? posicao.top - inicioVisivel
        : Math.max(0, posicao.bottom - fimVisivel);

      rolagem.scrollTo({ top: rolagem.scrollTop + ajuste, behavior: 'instant' });
    });
  };

  const rolarConteudoPorPagina = (evento: KeyboardEvent<HTMLDivElement>) => {
    if (evento.key !== 'PageUp' && evento.key !== 'PageDown') {
      return;
    }

    const rolagem = rolagemRef.current;
    const cabecalho = cabecalhoRef.current;
    if (!rolagem || !cabecalho || painelRef.current?.hasAttribute('data-rolagem-integral')) {
      return;
    }

    evento.preventDefault();
    // Usa a altura de leitura e conclui a rolagem antes de um possível Tab.
    const alturaVisivel = rolagem.clientHeight - cabecalho.offsetHeight;
    const direcao = evento.key === 'PageDown' ? 1 : -1;
    rolagem.scrollBy({ top: direcao * alturaVisivel * 0.9, behavior: 'instant' });
  };

  const manterFocoNoModal = (evento: KeyboardEvent<HTMLDialogElement>) => {
    if (evento.key !== 'Tab' || evento.defaultPrevented) {
      return;
    }

    const dialogo = dialogoRef.current;

    if (!dialogo) {
      return;
    }

    const elementosFocaveis = Array.from(
      dialogo.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex="0"]',
      ),
    ).filter(
      (elemento) =>
        elemento.tabIndex >= 0 && elemento.getClientRects().length > 0,
    );
    const primeiroElemento = elementosFocaveis[0];
    const ultimoElemento = elementosFocaveis.at(-1);

    if (!primeiroElemento || !ultimoElemento) {
      evento.preventDefault();
      dialogo.focus();
      return;
    }

    const focoAtual = document.activeElement;

    if (
      evento.shiftKey &&
      (focoAtual === dialogo ||
        focoAtual === primeiroElemento ||
        !dialogo.contains(focoAtual))
    ) {
      evento.preventDefault();
      ultimoElemento.focus();
      return;
    }

    if (
      !evento.shiftKey &&
      (focoAtual === dialogo ||
        focoAtual === ultimoElemento ||
        !dialogo.contains(focoAtual))
    ) {
      evento.preventDefault();
      primeiroElemento.focus();
    }
  };

  return (
    <dialog
      ref={dialogoRef}
      className="modal-projeto"
      tabIndex={-1}
      aria-labelledby={idTitulo}
      aria-describedby={idDescricao}
      onClick={(evento) => {
        if (evento.target === evento.currentTarget) {
          fecharDialogo();
        }
      }}
      onCancel={(evento) => {
        evento.preventDefault();
        fecharDialogo();
      }}
      onKeyDown={manterFocoNoModal}
    >
      <div className="conteudo-modal" ref={painelRef}>
        <div className="rolagem-modal" ref={rolagemRef}>
          <header className="cabecalho-modal" ref={cabecalhoRef}>
            <div className="identificacao-modal">
              <h2 id={idTitulo}>{projeto.nome}</h2>

              {colaboradores.length > 0 && (
                <p className="colaboradores-projeto-modal">
                  {traducao.projetos.colaboracaoCom}{' '}
                  {colaboradores.map((colaborador, indice) => (
                    <span key={colaborador.nome}>
                      {indice > 0 &&
                        (indice === colaboradores.length - 1
                          ? traducao.projetos.conjuncaoColaboradores
                          : ', ')}
                      {colaborador.url ? (
                        <a
                          className="link-discreto"
                          href={colaborador.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${traducao.projetos.linkedinDe} ${colaborador.nome} (${traducao.geral.abreNovaAba})`}
                        >
                          {colaborador.nome}
                        </a>
                      ) : (
                        colaborador.nome
                      )}
                    </span>
                  ))}
                  {'.'}
                </p>
              )}
            </div>

            <button
              className="botao-acao botao-fechar"
              type="button"
              aria-label={traducao.projetos.fechar}
              onClick={fecharDialogo}
            >
              <IconeAcao tipo="fechar" />
            </button>
            {projeto.tags.length > 0 && (
              <ul
                className="tags-modal"
                role="list"
                aria-label={traducao.projetos.tecnologiasCompetencias}
              >
                {projeto.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
          </header>

          <div
            className="corpo-modal"
            role="region"
            aria-label={traducao.projetos.conteudoProjeto}
            tabIndex={0}
            onFocusCapture={revelarConteudoFocado}
            onKeyDown={rolarConteudoPorPagina}
          >
            <div
              className="galeria-modal"
              ref={galeriaRef}
              role="group"
              aria-label={`${traducao.projetos.imagensProjeto} ${projeto.nome}`}
              onPointerEnter={() => setRotacaoInterrompida(true)}
              onFocusCapture={() => setRotacaoInterrompida(true)}
            >
              <div className="imagem-modal">
                {imagensModal.length > 0 ? (
                  imagensModal.map((imagem, indice) => {
                    const imagemAtiva = indice === indiceImagem;

                    return (
                      <picture
                        className={`imagem-slide${imagemAtiva ? ' imagem-slide-ativa' : ''}`}
                        key={imagem.src}
                        aria-hidden={!imagemAtiva}
                      >
                        {imagem.srcMobile && (
                          <source media="(max-width: 42.5rem)" srcSet={imagem.srcMobile} />
                        )}
                        <img
                          src={imagem.src}
                          alt={imagemAtiva ? imagem.textoAlternativo : ''}
                          decoding="async"
                        />
                      </picture>
                    );
                  })
                ) : projeto.imagem ? (
                  <img
                    className="imagem-modal-capa"
                    src={projeto.imagem}
                    alt={projeto.textoAlternativo}
                  />
                ) : (
                  <div className="previa-modal-indisponivel">
                    <span className="simbolo-modal" aria-hidden="true">
                      ✦
                    </span>
                    <strong>{projeto.nome}</strong>
                    <span>{traducao.projetos.previaAtualizacao}</span>
                  </div>
                )}
              </div>

              {imagensModal.length > 1 && (
                <div className="controles-galeria">
                  <button
                    className="botao-acao botao-galeria botao-galeria-anterior"
                    type="button"
                    aria-label={traducao.projetos.imagemAnterior}
                    onClick={() => navegarImagem(-1)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                      <path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className="paginacao-galeria" aria-hidden="true">
                    {imagensModal.map((imagem, indice) => (
                      <span key={imagem.src} data-ativa={indice === indiceImagem} />
                    ))}
                  </div>
                  <span
                    className="somente-leitor posicao-galeria"
                    aria-live={rotacaoInterrompida || movimentoReduzido || animacoesPausadas ? 'polite' : 'off'}
                    aria-atomic="true"
                  >
                    {posicaoImagem}
                  </span>
                  <button
                    className="botao-acao botao-galeria botao-galeria-proxima"
                    type="button"
                    aria-label={traducao.projetos.proximaImagem}
                    onClick={() => navegarImagem(1)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                      <path d="m10 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            <div className="texto-modal" ref={textoRef}>
              <p className="descricao-projeto-modal" id={idDescricao}>
                {projeto.descricaoCompleta}
              </p>
              {contribuicao.map((paragrafo) => (
                <p key={paragrafo}>{paragrafo}</p>
              ))}
            </div>
          </div>
        </div>

        {temLinks && (
          <footer className="rodape-modal" ref={rodapeRef}>
            <ul
              className="links-modal"
              aria-label={traducao.projetos.linksProjeto}
            >
              {projeto.links.map((link) => (
                <li key={`${projeto.id}-${link.tipo}-${link.rotulo}`}>
                  {link.url ? (
                    <a
                      className="botao-acao botao-completo"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconeAcao tipo={link.tipo} />
                      <span>{link.rotulo}</span>
                      <span className="somente-leitor">
                        {' '}
                        ({traducao.geral.abreNovaAba})
                      </span>
                    </a>
                  ) : (
                    <span className="botao-acao botao-completo link-projeto-em-breve">
                      <IconeAcao tipo={link.tipo} />
                      <span>{link.rotulo}</span>
                      <span className="somente-leitor">
                        {' '}
                        ({traducao.geral.linkEmBreve})
                      </span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </footer>
        )}
      </div>

      <div
        className="destino-controles-modal"
        ref={aoDefinirDestinoControles}
      />
    </dialog>
  );
}

export default ModalProjeto;
