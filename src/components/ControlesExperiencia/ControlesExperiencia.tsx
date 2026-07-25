import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import {
  useAcessibilidade,
  type PreferenciaAcessibilidade,
} from '../../acessibilidade/AcessibilidadeContexto';
import { useIdioma } from '../../idiomas/IdiomaContexto';
import {
  IDIOMAS_DISPONIVEIS,
  type Idioma,
} from '../../idiomas/tipos';
import IconeControle from '../IconeControle/IconeControle';

type TipoControle = 'tema' | 'idioma' | 'acessibilidade';
type TemaPreferido = 'sistema' | 'claro' | 'escuro';
type TemaAtivo = Exclude<TemaPreferido, 'sistema'>;

const CHAVE_TEMA = 'portfolio:tema';
const TEMAS: TemaPreferido[] = ['claro', 'escuro', 'sistema'];
const PREFERENCIAS_ACESSIBILIDADE: PreferenciaAcessibilidade[] = [
  'reduzirMovimento',
  'pausarAnimacoes',
  'contrasteReforcado',
  'destacarLinks',
];
const DURACAO_PERMANENCIA_MOUSE = 1200;

const CORES_NAVEGADOR: Record<TemaAtivo, string> = {
  claro: '#f2f6ee',
  escuro: '#1d1624',
};

function obterTemaSalvo(): TemaPreferido {
  try {
    const temaSalvo = window.localStorage.getItem(CHAVE_TEMA);

    if (temaSalvo === 'claro' || temaSalvo === 'escuro') {
      return temaSalvo;
    }
  } catch {
    return 'sistema';
  }

  return 'sistema';
}

function salvarTema(tema: TemaPreferido) {
  try {
    window.localStorage.setItem(CHAVE_TEMA, tema);
  } catch {
    return;
  }
}

function navegarGrupoOpcoes<T extends string>(
  evento: ReactKeyboardEvent<HTMLButtonElement>,
  valorAtual: T,
  opcoes: readonly T[],
  selecionar: (valor: T) => void,
  referencias: Partial<Record<T, HTMLButtonElement>>,
) {
  const teclasAvancar = ['ArrowRight', 'ArrowDown'];
  const teclasVoltar = ['ArrowLeft', 'ArrowUp'];

  if (
    !teclasAvancar.includes(evento.key) &&
    !teclasVoltar.includes(evento.key) &&
    evento.key !== 'Home' &&
    evento.key !== 'End'
  ) {
    return;
  }

  evento.preventDefault();

  const indiceAtual = opcoes.indexOf(valorAtual);
  let proximoIndice = indiceAtual;

  if (teclasAvancar.includes(evento.key)) {
    proximoIndice = (indiceAtual + 1) % opcoes.length;
  } else if (teclasVoltar.includes(evento.key)) {
    proximoIndice = (indiceAtual - 1 + opcoes.length) % opcoes.length;
  } else if (evento.key === 'Home') {
    proximoIndice = 0;
  } else if (evento.key === 'End') {
    proximoIndice = opcoes.length - 1;
  }

  const proximoValor = opcoes[proximoIndice];
  selecionar(proximoValor);
  window.requestAnimationFrame(() => {
    referencias[proximoValor]?.focus({ preventScroll: true });
  });
}

function ControlesExperiencia() {
  const { idioma, definirIdioma, traducao } = useIdioma();
  const {
    preferencias,
    acessibilidadeAtiva,
    alternarPreferencia,
  } = useAcessibilidade();
  const [controleAberto, setControleAberto] = useState<TipoControle | null>(
    null,
  );
  const [temaPreferido, setTemaPreferido] =
    useState<TemaPreferido>(obterTemaSalvo);
  const [sistemaEscuro, setSistemaEscuro] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches,
  );
  const grupoRef = useRef<HTMLElement | null>(null);
  const acionadoresRef = useRef<
    Partial<Record<TipoControle, HTMLButtonElement>>
  >({});
  const opcoesTemaRef = useRef<
    Partial<Record<TemaPreferido, HTMLButtonElement>>
  >({});
  const opcoesIdiomaRef = useRef<
    Partial<Record<Idioma, HTMLButtonElement>>
  >({});
  const opcoesAcessibilidadeRef = useRef<
    Partial<Record<PreferenciaAcessibilidade, HTMLButtonElement>>
  >({});
  const temporizadorAberturaRef = useRef<number | null>(null);
  const aberturaSemFocoRef = useRef(false);
  const temaAtivo: TemaAtivo =
    temaPreferido === 'sistema'
      ? sistemaEscuro
        ? 'escuro'
        : 'claro'
      : temaPreferido;
  const idiomaSelecionado = IDIOMAS_DISPONIVEIS.find(
    (opcao) => opcao.codigo === idioma,
  );
  const controles: Array<{ tipo: TipoControle; rotulo: string }> = [
    { tipo: 'tema', rotulo: traducao.controles.rotulos.tema },
    { tipo: 'idioma', rotulo: traducao.controles.rotulos.idioma },
    {
      tipo: 'acessibilidade',
      rotulo: traducao.controles.rotulos.acessibilidade,
    },
  ];

  useEffect(() => {
    const consultaTema = window.matchMedia('(prefers-color-scheme: dark)');
    const atualizarTemaSistema = (evento: MediaQueryListEvent) => {
      setSistemaEscuro(evento.matches);
    };

    setSistemaEscuro(consultaTema.matches);
    consultaTema.addEventListener('change', atualizarTemaSistema);

    return () => {
      consultaTema.removeEventListener('change', atualizarTemaSistema);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.tema = temaAtivo;
    document.documentElement.style.colorScheme =
      temaAtivo === 'escuro' ? 'dark' : 'light';
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', CORES_NAVEGADOR[temaAtivo]);
    salvarTema(temaPreferido);
  }, [temaAtivo, temaPreferido]);

  useLayoutEffect(() => {
    if (!controleAberto) {
      return;
    }

    if (aberturaSemFocoRef.current) {
      aberturaSemFocoRef.current = false;
      return;
    }

    const elementoInicial =
      controleAberto === 'tema'
        ? opcoesTemaRef.current[temaPreferido]
        : controleAberto === 'idioma'
          ? opcoesIdiomaRef.current[idioma]
          : opcoesAcessibilidadeRef.current.reduzirMovimento;

    elementoInicial?.focus({ preventScroll: true });
  }, [controleAberto, idioma, temaPreferido]);

  useEffect(() => {
    if (!controleAberto) {
      return;
    }

    const fecharAoClicarFora = (evento: PointerEvent) => {
      const grupo = grupoRef.current;

      if (
        grupo &&
        evento.target instanceof Node &&
        !grupo.contains(evento.target)
      ) {
        setControleAberto(null);
      }
    };

    const fecharComEsc = (evento: KeyboardEvent) => {
      if (evento.key !== 'Escape') {
        return;
      }

      evento.preventDefault();
      const tipoAberto = controleAberto;
      setControleAberto(null);
      window.requestAnimationFrame(() => {
        acionadoresRef.current[tipoAberto]?.focus({ preventScroll: true });
      });
    };

    document.addEventListener('pointerdown', fecharAoClicarFora);
    document.addEventListener('keydown', fecharComEsc);

    return () => {
      document.removeEventListener('pointerdown', fecharAoClicarFora);
      document.removeEventListener('keydown', fecharComEsc);
    };
  }, [controleAberto]);

  useEffect(() => {
    return () => {
      if (temporizadorAberturaRef.current !== null) {
        window.clearTimeout(temporizadorAberturaRef.current);
      }
    };
  }, []);

  const limparTemporizadorAbertura = () => {
    if (temporizadorAberturaRef.current === null) {
      return;
    }

    window.clearTimeout(temporizadorAberturaRef.current);
    temporizadorAberturaRef.current = null;
  };

  const abrirControleSemMoverFoco = (tipo: TipoControle) => {
    aberturaSemFocoRef.current = true;
    setControleAberto(tipo);
  };

  const iniciarPermanenciaMouse = (
    evento: ReactPointerEvent<HTMLLIElement>,
    tipo: TipoControle,
  ) => {
    if (evento.pointerType !== 'mouse' || controleAberto) {
      return;
    }

    limparTemporizadorAbertura();
    temporizadorAberturaRef.current = window.setTimeout(() => {
      temporizadorAberturaRef.current = null;
      abrirControleSemMoverFoco(tipo);
    }, DURACAO_PERMANENCIA_MOUSE);
  };

  const alternarControle = (tipo: TipoControle) => {
    setControleAberto((controleAtual) =>
      controleAtual === tipo ? null : tipo,
    );
  };

  const fecharControle = (tipo: TipoControle) => {
    setControleAberto(null);
    window.requestAnimationFrame(() => {
      acionadoresRef.current[tipo]?.focus({ preventScroll: true });
    });
  };

  const encaminharFocoParaConteudo = (
    evento: ReactKeyboardEvent<HTMLButtonElement>,
    fecharPainel = false,
  ) => {
    if (evento.key !== 'Tab' || evento.shiftKey) {
      return;
    }

    const dialogoAberto = grupoRef.current?.closest('dialog[open]');
    const raizConteudo =
      dialogoAberto?.querySelector<HTMLElement>('.conteudo-modal') ??
      document.querySelector<HTMLElement>('main');
    const primeiroElemento = raizConteudo?.querySelector<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    if (!primeiroElemento) {
      return;
    }

    evento.preventDefault();

    if (fecharPainel) {
      setControleAberto(null);
    }

    window.requestAnimationFrame(() => {
      primeiroElemento.focus();
    });
  };

  return (
    <aside
      ref={grupoRef}
      className={`controles-experiencia${controleAberto ? ' tem-controle-aberto' : ''}`}
      aria-label={traducao.controles.ariaGrupo}
    >
      <ul className="lista-controles-experiencia">
        {controles.map(({ tipo, rotulo }) => {
          const aberto = controleAberto === tipo;
          const idPainel = `painel-controle-${tipo}`;
          const descricaoEstado =
            tipo === 'tema'
              ? `, ${traducao.controles.temaAtivo[temaAtivo]}`
              : tipo === 'idioma'
                ? `, ${traducao.controles.idiomaAtivo} ${idiomaSelecionado?.nome ?? idioma}`
                : '';

          return (
            <li
              className={`controle-experiencia controle-${tipo}${aberto ? ' controle-aberto' : ''}`}
              key={tipo}
              onPointerEnter={(evento) =>
                iniciarPermanenciaMouse(evento, tipo)
              }
              onPointerLeave={limparTemporizadorAbertura}
            >
              <button
                ref={(elemento: HTMLButtonElement | null) => {
                  if (elemento) {
                    acionadoresRef.current[tipo] = elemento;
                  }
                }}
                className="acionador-controle"
                type="button"
                aria-expanded={aberto}
                aria-controls={idPainel}
                aria-label={`${rotulo}${descricaoEstado}`}
                tabIndex={aberto ? -1 : 0}
                onFocus={() => {
                  limparTemporizadorAbertura();

                  if (controleAberto && controleAberto !== tipo) {
                    setControleAberto(null);
                  }
                }}
                onClick={() => alternarControle(tipo)}
                onKeyDown={(evento) => {
                  if (tipo === 'acessibilidade' && !aberto) {
                    encaminharFocoParaConteudo(evento);
                  }
                }}
              >
                <IconeControle
                  tipo={tipo}
                  temaAtivo={temaAtivo}
                  idiomaAlternativo={idioma !== 'pt'}
                  acessibilidadeAtiva={acessibilidadeAtiva}
                />
                <span className="rotulo-controle">{rotulo}</span>
              </button>

              <section
                id={idPainel}
                className="painel-controle"
                aria-hidden={!aberto}
                aria-labelledby={`titulo-controle-${tipo}`}
              >
                <header className="cabecalho-controle">
                  <h2 id={`titulo-controle-${tipo}`}>
                    <IconeControle
                      tipo={tipo}
                      temaAtivo={temaAtivo}
                      idiomaAlternativo={idioma !== 'pt'}
                      acessibilidadeAtiva={acessibilidadeAtiva}
                    />
                    <span>{rotulo}</span>
                  </h2>
                  <button
                    className="fechar-controle"
                    type="button"
                    aria-label={`${traducao.controles.fecharOpcoes} ${rotulo}`}
                    disabled={!aberto}
                    tabIndex={aberto ? 0 : -1}
                    onClick={() => fecharControle(tipo)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="m7 7 10 10M17 7 7 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </header>

                {tipo === 'tema' ? (
                  <div
                    className="opcoes-tema"
                    role="radiogroup"
                    aria-label={traducao.controles.escolherTema}
                  >
                    {TEMAS.map((tema) => {
                      const selecionado = temaPreferido === tema;
                      const temaRepresentado: TemaAtivo =
                        tema === 'sistema'
                          ? sistemaEscuro
                            ? 'escuro'
                            : 'claro'
                          : tema;

                      return (
                        <button
                          ref={(elemento: HTMLButtonElement | null) => {
                            if (elemento) {
                              opcoesTemaRef.current[tema] = elemento;
                            }
                          }}
                          className="opcao-tema"
                          type="button"
                          role="radio"
                          aria-checked={selecionado}
                          disabled={!aberto}
                          tabIndex={aberto && selecionado ? 0 : -1}
                          key={tema}
                          onClick={() => setTemaPreferido(tema)}
                          onKeyDown={(evento) =>
                            navegarGrupoOpcoes(
                              evento,
                              tema,
                              TEMAS,
                              setTemaPreferido,
                              opcoesTemaRef.current,
                            )
                          }
                        >
                          <IconeControle
                            tipo="tema"
                            temaAtivo={temaRepresentado}
                          />
                          <span>{traducao.controles.temas[tema]}</span>
                        </button>
                      );
                    })}
                  </div>
                ) : tipo === 'idioma' ? (
                  <div
                    className="opcoes-idioma"
                    role="radiogroup"
                    aria-label={traducao.controles.escolherIdioma}
                  >
                    {IDIOMAS_DISPONIVEIS.map((opcao) => {
                      const selecionado = idioma === opcao.codigo;

                      return (
                        <button
                          ref={(elemento: HTMLButtonElement | null) => {
                            if (elemento) {
                              opcoesIdiomaRef.current[opcao.codigo] = elemento;
                            }
                          }}
                          className="opcao-idioma"
                          type="button"
                          role="radio"
                          aria-checked={selecionado}
                          aria-label={opcao.nome}
                          disabled={!aberto}
                          tabIndex={aberto && selecionado ? 0 : -1}
                          key={opcao.codigo}
                          onClick={() => definirIdioma(opcao.codigo)}
                          onKeyDown={(evento) =>
                            navegarGrupoOpcoes(
                              evento,
                              opcao.codigo,
                              IDIOMAS_DISPONIVEIS.map(
                                (idiomaDisponivel) => idiomaDisponivel.codigo,
                              ),
                              definirIdioma,
                              opcoesIdiomaRef.current,
                            )
                          }
                        >
                          <span className="sigla-idioma" aria-hidden="true">
                            {opcao.sigla}
                          </span>
                          <span>{opcao.nome}</span>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div
                    className="opcoes-acessibilidade"
                    role="group"
                    aria-label={traducao.controles.escolherAcessibilidade}
                  >
                    {PREFERENCIAS_ACESSIBILIDADE.map((preferencia, indice) => {
                      const ativa = preferencias[preferencia];
                      const ultimaOpcao =
                        indice === PREFERENCIAS_ACESSIBILIDADE.length - 1;

                      return (
                        <button
                          ref={(elemento: HTMLButtonElement | null) => {
                            if (elemento) {
                              opcoesAcessibilidadeRef.current[preferencia] =
                                elemento;
                            }
                          }}
                          className="opcao-acessibilidade"
                          type="button"
                          role="switch"
                          aria-checked={ativa}
                          disabled={!aberto}
                          tabIndex={aberto ? 0 : -1}
                          key={preferencia}
                          onClick={() => alternarPreferencia(preferencia)}
                          onKeyDown={(evento) => {
                            if (ultimaOpcao) {
                              encaminharFocoParaConteudo(evento, true);
                            }
                          }}
                        >
                          <span
                            className="indicador-preferencia"
                            aria-hidden="true"
                          >
                            <span />
                          </span>
                          <span>
                            {
                              traducao.controles.preferenciasAcessibilidade[
                                preferencia
                              ]
                            }
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </section>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ControlesExperiencia;
