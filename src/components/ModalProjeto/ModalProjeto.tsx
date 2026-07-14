import { useEffect, useRef, type KeyboardEvent } from "react";
import type { Projeto } from "../../types/projeto";
import IconeAcao from "../IconeAcao/IconeAcao";

type PropriedadesModalProjeto = {
  projeto: Projeto;
  aoFechar: (origem: "ponteiro" | "teclado") => void;
};

function ModalProjeto({ projeto, aoFechar }: PropriedadesModalProjeto) {
  const dialogoRef = useRef<HTMLDialogElement>(null);
  const idTitulo = `titulo-modal-${projeto.id}`;
  const idDescricao = `descricao-modal-${projeto.id}`;
  const colaboradores = projeto.colaboradores ?? [];

  useEffect(() => {
    const dialogo = dialogoRef.current;

    if (!dialogo) {
      return;
    }

    document.body.classList.add("modal-aberto");

    if (!dialogo.open) {
      dialogo.showModal();
    }

    dialogo.focus({ preventScroll: true });

    return () => {
      document.body.classList.remove("modal-aberto");
    };
  }, []);

  const manterFocoNoModal = (evento: KeyboardEvent<HTMLDialogElement>) => {
    if (evento.key !== "Tab") {
      return;
    }

    const dialogo = dialogoRef.current;

    if (!dialogo) {
      return;
    }

    const elementosFocaveis = Array.from(
      dialogo.querySelectorAll<HTMLElement>("button:not([disabled]), a[href]"),
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
          aoFechar("ponteiro");
        }
      }}
      onCancel={(evento) => {
        evento.preventDefault();
        aoFechar("teclado");
      }}
      onKeyDown={manterFocoNoModal}
    >
      <div className="conteudo-modal">
        <header className="cabecalho-modal">
          <button
            className="botao-acao botao-expansivel botao-fechar"
            type="button"
            onClick={(evento) =>
              aoFechar(evento.detail === 0 ? "teclado" : "ponteiro")
            }
          >
            <IconeAcao tipo="fechar" />
            <span className="rotulo-botao">Fechar</span>
          </button>

          <div>
            <p className="rotulo-modal">Detalhes do projeto</p>
            <h2 id={idTitulo}>{projeto.nome}</h2>

            {colaboradores.length > 0 && (
              <p className="colaboradores-projeto">
                Em colaboração com{" "}
                {colaboradores.map((colaborador, indice) => (
                  <span key={colaborador.nome}>
                    {indice > 0 &&
                      (indice === colaboradores.length - 1
                        ? " e "
                        : ", ")}
                    {colaborador.url ? (
                      <a
                        href={colaborador.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn de ${colaborador.nome} (abre em nova aba)`}
                      >
                        {colaborador.nome}
                      </a>
                    ) : (
                      colaborador.nome
                    )}
                  </span>
                ))}
                {"."}
              </p>
            )}
          </div>
        </header>

        <div className="corpo-modal">
          <div className="imagem-modal">
            {projeto.imagem ? (
              <img src={projeto.imagem} alt={projeto.textoAlternativo} />
            ) : (
              <div className="previa-modal-indisponivel">
                <span className="simbolo-modal" aria-hidden="true">
                  ✦
                </span>
                <strong>{projeto.nome}</strong>
                <span>Prévia visual em atualização</span>
              </div>
            )}
          </div>

          <div className="detalhes-projeto">
            <p id={idDescricao}>{projeto.descricaoCompleta}</p>

            {projeto.informacaoAdicional && (
              <p className="informacao-adicional">
                {projeto.informacaoAdicional}
              </p>
            )}

            <section
              className="grupo-detalhes"
              aria-labelledby={`titulo-tags-${projeto.id}`}
            >
              <h3 id={`titulo-tags-${projeto.id}`}>
                Tecnologias e competências
              </h3>
              <ul className="tags-modal">
                {projeto.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </section>

            {projeto.links.length > 0 && (
              <section
                className="grupo-detalhes"
                aria-labelledby={`titulo-links-${projeto.id}`}
              >
                <h3 id={`titulo-links-${projeto.id}`}>Links do projeto</h3>
                <ul className="links-modal">
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
                            {" "}
                            (abre em nova aba)
                          </span>
                        </a>
                      ) : (
                        <span className="botao-acao botao-completo link-projeto-em-breve">
                          <IconeAcao tipo={link.tipo} />
                          <span>{link.rotulo}</span>
                          <span className="somente-leitor">
                            {" "}
                            (link em breve)
                          </span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default ModalProjeto;
