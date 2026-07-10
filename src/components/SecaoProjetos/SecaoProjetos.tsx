import { useEffect, useRef, useState } from 'react';
import { projetos } from '../../data/projetos';
import type { Projeto } from '../../types/projeto';
import CardProjeto from '../CardProjeto/CardProjeto';
import ModalProjeto from '../ModalProjeto/ModalProjeto';

const quantidadeProjetos = projetos.length;
const consultaLayoutDesktop = '(min-width: 1025px)';

function SecaoProjetos() {
  const [projetoAtual, setProjetoAtual] = useState(0);
  const [carrosselPausado, setCarrosselPausado] = useState(false);
  const [layoutDesktop, setLayoutDesktop] = useState(() =>
    window.matchMedia(consultaLayoutDesktop).matches,
  );
  const [projetoSelecionado, setProjetoSelecionado] =
    useState<Projeto | null>(null);
  const trilhaRef = useRef<HTMLDivElement>(null);
  const projetosRef = useRef<Array<HTMLElement | null>>([]);
  const rolagemProgramaticaRef = useRef(false);
  const temporizadorMovimentoRef = useRef<number | null>(null);
  const temporizadorLeituraRef = useRef<number | null>(null);
  const primeiraPosicaoRef = useRef(true);
  const acionadorModalRef = useRef<HTMLButtonElement | null>(null);

  const abrirModal = (projeto: Projeto, acionador: HTMLButtonElement) => {
    acionadorModalRef.current = acionador;
    setCarrosselPausado(true);
    setProjetoSelecionado(projeto);
  };

  const fecharModal = () => {
    const acionador = acionadorModalRef.current;

    setCarrosselPausado(true);
    setProjetoSelecionado(null);

    window.requestAnimationFrame(() => {
      acionador?.focus();
    });
  };

  const irParaProjeto = (indice: number) => {
    const proximoIndice = (indice + quantidadeProjetos) % quantidadeProjetos;
    setProjetoAtual(proximoIndice);
  };

  useEffect(() => {
    const consulta = window.matchMedia(consultaLayoutDesktop);
    const atualizarLayout = () => setLayoutDesktop(consulta.matches);

    atualizarLayout();
    consulta.addEventListener('change', atualizarLayout);

    return () => consulta.removeEventListener('change', atualizarLayout);
  }, []);

  useEffect(() => {
    const trilha = trilhaRef.current;

    if (layoutDesktop) {
      trilha?.scrollTo({ left: 0, behavior: 'auto' });
      primeiraPosicaoRef.current = true;
      return;
    }

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
  }, [layoutDesktop, projetoAtual]);

  useEffect(() => {
    const movimentoReduzido = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (
      layoutDesktop ||
      movimentoReduzido ||
      carrosselPausado ||
      projetoSelecionado
    ) {
      return;
    }

    const intervalo = window.setInterval(() => {
      setProjetoAtual((indiceAtual) =>
        (indiceAtual + 1) % quantidadeProjetos,
      );
    }, 4500);

    return () => window.clearInterval(intervalo);
  }, [carrosselPausado, layoutDesktop, projetoSelecionado]);

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
    if (layoutDesktop || rolagemProgramaticaRef.current) {
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
    <>
      <section
        id="projetos"
        className={`secao-projetos ${layoutDesktop ? 'lista-projetos' : 'carousel'}`}
        aria-labelledby="titulo-projetos"
        aria-roledescription={layoutDesktop ? undefined : 'carrossel'}
        tabIndex={layoutDesktop ? undefined : 0}
        onKeyDown={(evento) => {
          if (layoutDesktop) {
            return;
          }

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
        <header className="cabecalho-projetos">
          <p className="rotulo-projetos">Trabalhos selecionados</p>
          <h2 id="titulo-projetos">Projetos</h2>
          <p className="descricao-projetos">
            Interfaces, produtos digitais e experiências construídas entre
            design e código.
          </p>
        </header>

        <div
          className="carousel-track"
          ref={trilhaRef}
          onScroll={atualizarProjetoPelaRolagem}
        >
          {projetos.map((projeto, indice) => (
            <CardProjeto
              key={projeto.id}
              ref={(elemento) => {
                projetosRef.current[indice] = elemento;
              }}
              projeto={projeto}
              indice={indice}
              quantidadeProjetos={quantidadeProjetos}
              atual={!layoutDesktop && projetoAtual === indice}
              aoAbrirDetalhes={abrirModal}
            />
          ))}
        </div>

        {!layoutDesktop && (
          <>
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
          </>
        )}
      </section>

      {projetoSelecionado && (
        <ModalProjeto projeto={projetoSelecionado} aoFechar={fecharModal} />
      )}
    </>
  );
}

export default SecaoProjetos;
