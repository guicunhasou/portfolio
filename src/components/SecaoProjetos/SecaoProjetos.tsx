import { useEffect, useRef, useState } from 'react';
import { projetos } from '../../data/projetos';

const quantidadeProjetos = projetos.length;

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
      className="secao-projetos carousel"
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
        {projetos.map((projeto, indice) => (
          <article
            key={projeto.id}
            className={`projeto ${projetoAtual === indice ? 'is-current' : ''}`}
            ref={(elemento) => {
              projetosRef.current[indice] = elemento;
            }}
            aria-label={`Projeto ${indice + 1} de ${quantidadeProjetos}: ${projeto.nome}`}
          >
            <div className="imagem">
              <img src={projeto.imagem} alt={projeto.textoAlternativo} />
            </div>
            <div className="descricao">
              <div className="textos">
                <h3>{projeto.nome}</h3>
                <p>{projeto.descricaoCurta}</p>
                {projeto.informacaoAdicional && (
                  <p>{projeto.informacaoAdicional}</p>
                )}
              </div>
              <ul className="tags" aria-label="Tecnologias e competências">
                {projeto.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <ul className="links">
                {projeto.links.map((link) => (
                  <li key={`${projeto.id}-${link.tipo}-${link.rotulo}`}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.rotulo}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
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
