import { useEffect, useRef, useState } from 'react';
import imagemIaraGames from '../../assets/imagens/img2.jpg';
import imagemJardimental from '../../assets/imagens/img1.jpg';
import imagemSiteInstitucional from '../../assets/imagens/img5.png';
import imagemSportsX from '../../assets/imagens/img4.jpg';

const quantidadeProjetos = 4;

function SecaoProjetos() {
  const [projetoAtual, setProjetoAtual] = useState(0);
  const [carrosselPausado, setCarrosselPausado] = useState(false);
  const trilhaRef = useRef<HTMLDivElement>(null);
  const projetosRef = useRef<Array<HTMLElement | null>>([]);
  const rolagemProgramaticaRef = useRef(false);
  const temporizadorMovimentoRef = useRef<number | null>(null);
  const temporizadorLeituraRef = useRef<number | null>(null);
  const primeiraPosicaoRef = useRef(true);

  const irParaProjeto = (indice: number) => {
    const proximoIndice = (indice + quantidadeProjetos) % quantidadeProjetos;
    setProjetoAtual(proximoIndice);
  };

  useEffect(() => {
    const trilha = trilhaRef.current;
    const projeto = projetosRef.current[projetoAtual];

    if (!trilha || !projeto) {
      return;
    }

    const movimentoReduzido = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const limitesTrilha = trilha.getBoundingClientRect();
    const limitesProjeto = projeto.getBoundingClientRect();
    const deslocamento =
      trilha.scrollLeft +
      limitesProjeto.left -
      limitesTrilha.left -
      (trilha.clientWidth - limitesProjeto.width) / 2;
    const comportamento =
      primeiraPosicaoRef.current || movimentoReduzido ? 'auto' : 'smooth';

    rolagemProgramaticaRef.current = true;

    if (temporizadorMovimentoRef.current !== null) {
      window.clearTimeout(temporizadorMovimentoRef.current);
    }

    trilha.scrollTo({
      left: deslocamento,
      behavior: comportamento,
    });

    temporizadorMovimentoRef.current = window.setTimeout(
      () => {
        rolagemProgramaticaRef.current = false;
        temporizadorMovimentoRef.current = null;
      },
      comportamento === 'smooth' ? 600 : 0,
    );

    primeiraPosicaoRef.current = false;
  }, [projetoAtual]);

  useEffect(() => {
    const movimentoReduzido = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (movimentoReduzido || carrosselPausado) {
      return;
    }

    const intervalo = window.setInterval(() => {
      setProjetoAtual((indiceAtual) =>
        (indiceAtual + 1) % quantidadeProjetos,
      );
    }, 4500);

    return () => window.clearInterval(intervalo);
  }, [carrosselPausado]);

  useEffect(() => {
    return () => {
      if (temporizadorMovimentoRef.current !== null) {
        window.clearTimeout(temporizadorMovimentoRef.current);
      }

      if (temporizadorLeituraRef.current !== null) {
        window.clearTimeout(temporizadorLeituraRef.current);
      }
    };
  }, []);

  const atualizarProjetoPelaRolagem = () => {
    if (rolagemProgramaticaRef.current) {
      return;
    }

    if (temporizadorLeituraRef.current !== null) {
      window.clearTimeout(temporizadorLeituraRef.current);
    }

    temporizadorLeituraRef.current = window.setTimeout(() => {
      temporizadorLeituraRef.current = null;

      const trilha = trilhaRef.current;
      if (!trilha) {
        return;
      }

      const centroTrilha =
        trilha.getBoundingClientRect().left + trilha.clientWidth / 2;
      let indiceMaisProximo = 0;
      let menorDistancia = Number.POSITIVE_INFINITY;

      projetosRef.current.forEach((projeto, indice) => {
        if (!projeto) {
          return;
        }

        const limites = projeto.getBoundingClientRect();
        const centroProjeto = limites.left + limites.width / 2;
        const distancia = Math.abs(centroProjeto - centroTrilha);

        if (distancia < menorDistancia) {
          menorDistancia = distancia;
          indiceMaisProximo = indice;
        }
      });

      setProjetoAtual((indiceAtual) =>
        indiceAtual === indiceMaisProximo ? indiceAtual : indiceMaisProximo,
      );
    }, 120);
  };

  return (
    <section
      id="projetos"
      className="carousel"
      aria-label="Projetos selecionados"
      aria-roledescription="carrossel"
      tabIndex={0}
      onKeyDown={(evento) => {
        if (evento.key === 'ArrowRight') {
          evento.preventDefault();
          irParaProjeto(projetoAtual + 1);
        }

        if (evento.key === 'ArrowLeft') {
          evento.preventDefault();
          irParaProjeto(projetoAtual - 1);
        }
      }}
      onMouseEnter={() => setCarrosselPausado(true)}
      onMouseLeave={() => setCarrosselPausado(false)}
      onFocusCapture={() => setCarrosselPausado(true)}
      onBlurCapture={(evento) => {
        if (!evento.currentTarget.contains(evento.relatedTarget)) {
          setCarrosselPausado(false);
        }
      }}
    >
      <div
        className="carousel-track"
        ref={trilhaRef}
        onScroll={atualizarProjetoPelaRolagem}
      >
        <article
          className={`projeto ${projetoAtual === 0 ? 'is-current' : ''}`}
          ref={(elemento) => {
            projetosRef.current[0] = elemento;
          }}
          aria-label="Projeto 1 de 4: SportsX"
        >
          <div className="imagem">
            <img src={imagemSportsX} alt="Interface do projeto SportsX" />
          </div>
          <div className="descricao">
            <div className="textos">
              <h3>SportsX</h3>
              <p>
                Plataforma web responsiva criada para dar visibilidade a
                esportes menos valorizados, unindo front-end, UX/UI e
                acessibilidade.
              </p>
              <p>Projeto selecionado para o FIAP NEXT 2025.</p>
            </div>
            <ul className="tags" aria-label="Tecnologias e competências">
              <li>UX/UI</li>
              <li>Front-end</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>Acessibilidade</li>
            </ul>
            <ul className="links">
              <li>
                <a
                  href="https://fiap-webdesign.github.io/enterprise-challenge-sportsx/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Página publicada
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/fiap-webdesign/enterprise-challenge-sportsx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositório
                </a>
              </li>
              <li>
                <a
                  href="https://www.figma.com/design/QtaMgmCtG6Y0UcIVD4mC70/Enterprise-Challenge?node-id=348-2&t=G8Y0sdoiVUFy7WKq-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Figma
                </a>
              </li>
            </ul>
          </div>
        </article>

        <article
          className={`projeto ${projetoAtual === 1 ? 'is-current' : ''}`}
          ref={(elemento) => {
            projetosRef.current[1] = elemento;
          }}
          aria-label="Projeto 2 de 4: Iara Games"
        >
          <div className="imagem">
            <img
              src={imagemIaraGames}
              alt="Interface do projeto Iara Games"
            />
          </div>
          <div className="descricao">
            <div className="textos">
              <h3>Iara Games</h3>
              <p>
                Projeto acadêmico com interfaces interativas, acessibilidade
                e visualização de dados usando HTML, CSS, JavaScript e
                Node-RED.
              </p>
            </div>
            <ul className="tags" aria-label="Tecnologias e competências">
              <li>Front-end</li>
              <li>UX/UI</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>Node-RED</li>
            </ul>
            <ul className="links">
              <li>
                <a
                  href="https://guicunhasou.github.io/iara-games/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Página publicada
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/guicunhasou/iara-games"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositório
                </a>
              </li>
              <li>
                <a
                  href="https://www.figma.com/design/pMH6zTuYQDshExMhQQGLeK/Iara-Games?node-id=97-10&t=rxvJ9SQssHLTYwbs-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Figma
                </a>
              </li>
            </ul>
          </div>
        </article>

        <article
          className={`projeto ${projetoAtual === 2 ? 'is-current' : ''}`}
          ref={(elemento) => {
            projetosRef.current[2] = elemento;
          }}
          aria-label="Projeto 3 de 4: Jardimental"
        >
          <div className="imagem">
            <img
              src={imagemJardimental}
              alt="Interface do projeto Jardimental"
            />
          </div>
          <div className="descricao">
            <div className="textos">
              <h3>Jardimental</h3>
              <p>
                Estudo de caso UX/UI de um app gamificado para acompanhamento
                de hábitos de saúde mental.
              </p>
            </div>
            <ul className="tags" aria-label="Tecnologias e competências">
              <li>UX/UI</li>
              <li>Estudo de Caso</li>
              <li>Figma</li>
              <li>Prototipagem</li>
              <li>Gamificação</li>
            </ul>
            <ul className="links">
              <li>
                <a
                  href="https://www.behance.net/gallery/186602883/Jardimental-Estudo-de-Caso-UXUI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Estudo de caso
                </a>
              </li>
              <li>
                <a
                  href="https://www.figma.com/design/ZrPQwEFRN4NBoRsO2I4aCa/JARDIMENTAL?node-id=89-116&t=jBzMcGUvaKzY9hy1-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Figma
                </a>
              </li>
            </ul>
          </div>
        </article>

        <article
          className={`projeto ${projetoAtual === 3 ? 'is-current' : ''}`}
          ref={(elemento) => {
            projetosRef.current[3] = elemento;
          }}
          aria-label="Projeto 4 de 4: Site Institucional"
        >
          <div className="imagem">
            <img
              src={imagemSiteInstitucional}
              alt="Interface do projeto Site Institucional"
            />
          </div>
          <div className="descricao">
            <div className="textos">
              <h3>Site Institucional</h3>
              <p>
                Projeto de site institucional para uma escola real, focado em
                design intuitivo e responsivo.
              </p>
            </div>
            <ul className="tags" aria-label="Tecnologias e competências">
              <li>Front-end</li>
              <li>UX/UI</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <ul className="links">
              <li>
                <a
                  href="https://guicunhasou.github.io/escolar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Página publicada
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/guicunhasou/escolar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositório
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>

      <button
        className="carousel-nav prev"
        type="button"
        aria-label="Projeto anterior"
        onClick={() => irParaProjeto(projetoAtual - 1)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      <button
        className="carousel-nav next"
        type="button"
        aria-label="Próximo projeto"
        onClick={() => irParaProjeto(projetoAtual + 1)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
    </section>
  );
}

export default SecaoProjetos;
