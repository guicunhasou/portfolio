import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import IconeControle from "../IconeControle/IconeControle";

type TipoControle = "musica" | "tema" | "idioma" | "acessibilidade";
type TemaPreferido = "sistema" | "claro" | "escuro";
type TemaAtivo = Exclude<TemaPreferido, "sistema">;

const CHAVE_TEMA = "portfolio:tema";
const TEMAS: TemaPreferido[] = ["claro", "escuro", "sistema"];
const CORES_NAVEGADOR: Record<TemaAtivo, string> = {
  claro: "#f2f6ee",
  escuro: "#1d1624",
};

const controles: Array<{
  tipo: TipoControle;
  rotulo: string;
}> = [
  { tipo: "musica", rotulo: "Música" },
  { tipo: "tema", rotulo: "Tema" },
  { tipo: "idioma", rotulo: "Idioma" },
  { tipo: "acessibilidade", rotulo: "Acessibilidade" },
];

function obterTemaSalvo(): TemaPreferido {
  try {
    const temaSalvo = window.localStorage.getItem(CHAVE_TEMA);

    if (temaSalvo === "claro" || temaSalvo === "escuro") {
      return temaSalvo;
    }
  } catch {
    return "sistema";
  }

  return "sistema";
}

function salvarTema(tema: TemaPreferido) {
  try {
    window.localStorage.setItem(CHAVE_TEMA, tema);
  } catch {
    return;
  }
}

function ControlesExperiencia() {
  const [controleAberto, setControleAberto] = useState<TipoControle | null>(
    null,
  );
  const [temaPreferido, setTemaPreferido] =
    useState<TemaPreferido>(obterTemaSalvo);
  const [sistemaEscuro, setSistemaEscuro] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const grupoRef = useRef<HTMLElement | null>(null);
  const acionadoresRef = useRef<
    Partial<Record<TipoControle, HTMLButtonElement>>
  >({});
  const fecharRef = useRef<Partial<Record<TipoControle, HTMLButtonElement>>>(
    {},
  );
  const opcoesTemaRef = useRef<
    Partial<Record<TemaPreferido, HTMLButtonElement>>
  >({});
  const temaAtivo: TemaAtivo =
    temaPreferido === "sistema"
      ? sistemaEscuro
        ? "escuro"
        : "claro"
      : temaPreferido;

  useEffect(() => {
    const consultaTema = window.matchMedia("(prefers-color-scheme: dark)");
    const atualizarTemaSistema = (evento: MediaQueryListEvent) => {
      setSistemaEscuro(evento.matches);
    };

    setSistemaEscuro(consultaTema.matches);
    consultaTema.addEventListener("change", atualizarTemaSistema);

    return () => {
      consultaTema.removeEventListener("change", atualizarTemaSistema);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.tema = temaAtivo;
    document.documentElement.style.colorScheme =
      temaAtivo === "escuro" ? "dark" : "light";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", CORES_NAVEGADOR[temaAtivo]);
    salvarTema(temaPreferido);
  }, [temaAtivo, temaPreferido]);

  useLayoutEffect(() => {
    if (!controleAberto) {
      return;
    }

    const elementoInicial =
      controleAberto === "tema"
        ? opcoesTemaRef.current[temaPreferido]
        : fecharRef.current[controleAberto];

    elementoInicial?.focus({ preventScroll: true });
  }, [controleAberto]);

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
      if (evento.key !== "Escape") {
        return;
      }

      evento.preventDefault();
      setControleAberto(null);
    };

    document.addEventListener("pointerdown", fecharAoClicarFora);
    document.addEventListener("keydown", fecharComEsc);

    return () => {
      document.removeEventListener("pointerdown", fecharAoClicarFora);
      document.removeEventListener("keydown", fecharComEsc);
    };
  }, [controleAberto]);

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

  const navegarOpcoesTema = (
    evento: ReactKeyboardEvent<HTMLButtonElement>,
    temaAtual: TemaPreferido,
  ) => {
    const teclasAvancar = ["ArrowRight", "ArrowDown"];
    const teclasVoltar = ["ArrowLeft", "ArrowUp"];

    if (
      !teclasAvancar.includes(evento.key) &&
      !teclasVoltar.includes(evento.key) &&
      evento.key !== "Home" &&
      evento.key !== "End"
    ) {
      return;
    }

    evento.preventDefault();

    const indiceAtual = TEMAS.indexOf(temaAtual);
    let proximoIndice = indiceAtual;

    if (teclasAvancar.includes(evento.key)) {
      proximoIndice = (indiceAtual + 1) % TEMAS.length;
    } else if (teclasVoltar.includes(evento.key)) {
      proximoIndice = (indiceAtual - 1 + TEMAS.length) % TEMAS.length;
    } else if (evento.key === "Home") {
      proximoIndice = 0;
    } else if (evento.key === "End") {
      proximoIndice = TEMAS.length - 1;
    }

    const proximoTema = TEMAS[proximoIndice];
    setTemaPreferido(proximoTema);
    window.requestAnimationFrame(() => {
      opcoesTemaRef.current[proximoTema]?.focus({ preventScroll: true });
    });
  };

  const encaminharFocoParaConteudo = (
    evento: ReactKeyboardEvent<HTMLButtonElement>,
    fecharPainel = false,
  ) => {
    if (evento.key !== "Tab" || evento.shiftKey) {
      return;
    }

    const primeiroElemento = document.querySelector<HTMLElement>(
      'main a[href], main button:not([disabled]), main input:not([disabled]), main select:not([disabled]), main textarea:not([disabled]), main [tabindex]:not([tabindex="-1"])',
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
      className={`controles-experiencia${controleAberto ? " tem-controle-aberto" : ""}`}
      aria-label="Controles de experiência"
    >
      <ul className="lista-controles-experiencia">
        {controles.map(({ tipo, rotulo }) => {
          const aberto = controleAberto === tipo;
          const idPainel = `painel-controle-${tipo}`;
          const descricaoEstado = tipo === "tema" ? `, tema ${temaAtivo}` : "";

          return (
            <li
              className={`controle-experiencia controle-${tipo}${aberto ? " controle-aberto" : ""}`}
              key={tipo}
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
                  if (controleAberto && controleAberto !== tipo) {
                    setControleAberto(null);
                  }
                }}
                onClick={() => alternarControle(tipo)}
                onKeyDown={(evento) => {
                  if (tipo === "acessibilidade" && !aberto) {
                    encaminharFocoParaConteudo(evento);
                  }
                }}
              >
                <IconeControle
                  tipo={tipo}
                  temaAtivo={temaAtivo}
                  nivelMusica={0}
                  idiomaAlternativo={false}
                  acessibilidadeAtiva={false}
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
                      nivelMusica={0}
                      idiomaAlternativo={false}
                      acessibilidadeAtiva={false}
                    />
                    <span>{rotulo}</span>
                  </h2>
                  <button
                    ref={(elemento: HTMLButtonElement | null) => {
                      if (elemento) {
                        fecharRef.current[tipo] = elemento;
                      }
                    }}
                    className="fechar-controle"
                    type="button"
                    aria-label={`Fechar opções de ${rotulo.toLowerCase()}`}
                    disabled={!aberto}
                    tabIndex={aberto ? 0 : -1}
                    onClick={() => fecharControle(tipo)}
                    onKeyDown={(evento) => {
                      if (tipo === "acessibilidade") {
                        encaminharFocoParaConteudo(evento, true);
                      }
                    }}
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

                {tipo === "tema" ? (
                  <div
                    className="opcoes-tema"
                    role="radiogroup"
                    aria-label="Escolha o tema do portfólio"
                  >
                    {TEMAS.map((tema) => {
                      const selecionado = temaPreferido === tema;
                      const temaRepresentado: TemaAtivo =
                        tema === "sistema"
                          ? sistemaEscuro
                            ? "escuro"
                            : "claro"
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
                            navegarOpcoesTema(evento, tema)
                          }
                        >
                          <IconeControle
                            tipo="tema"
                            temaAtivo={temaRepresentado}
                          />
                          <span>
                            {tema === "sistema"
                              ? "Sistema"
                              : tema === "claro"
                                ? "Claro"
                                : "Escuro"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <p className="controle-em-breve">Em breve</p>
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
