import { useEffect, useRef, type KeyboardEvent } from 'react';
import type { Projeto } from '../../types/projeto';

type PropriedadesModalProjeto = {
  projeto: Projeto;
  aoFechar: () => void;
};

function ModalProjeto({ projeto, aoFechar }: PropriedadesModalProjeto) {
  const dialogoRef = useRef<HTMLDialogElement>(null);
  const botaoFecharRef = useRef<HTMLButtonElement>(null);
  const idTitulo = `titulo-modal-${projeto.id}`;
  const idDescricao = `descricao-modal-${projeto.id}`;

  useEffect(() => {
    const dialogo = dialogoRef.current;

    if (!dialogo) {
      return;
    }

    document.body.classList.add('modal-aberto');

    if (!dialogo.open) {
      dialogo.showModal();
    }

    botaoFecharRef.current?.focus();

    return () => {
      document.body.classList.remove('modal-aberto');
    };
  }, []);

  const manterFocoNoModal = (evento: KeyboardEvent<HTMLDialogElement>) => {
    if (evento.key !== 'Tab') {
      return;
    }

    const dialogo = dialogoRef.current;

    if (!dialogo) {
      return;
    }

    const elementosFocaveis = Array.from(
      dialogo.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]'),
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
      (focoAtual === primeiroElemento || !dialogo.contains(focoAtual))
    ) {
      evento.preventDefault();
      ultimoElemento.focus();
      return;
    }

    if (!evento.shiftKey && focoAtual === ultimoElemento) {
      evento.preventDefault();
      primeiroElemento.focus();
    }
  };

  return (
    <dialog
      ref={dialogoRef}
      className="modal-projeto"
      aria-labelledby={idTitulo}
      aria-describedby={idDescricao}
      onCancel={(evento) => {
        evento.preventDefault();
        aoFechar();
      }}
      onKeyDown={manterFocoNoModal}
    >
      <div className="conteudo-modal">
        <header className="cabecalho-modal">
          <div>
            <p className="rotulo-modal">Detalhes do projeto</p>
            <h2 id={idTitulo}>{projeto.nome}</h2>
          </div>

          <button
            ref={botaoFecharRef}
            className="botao-fechar"
            type="button"
            onClick={aoFechar}
          >
            <span aria-hidden="true">×</span>
            <span>Fechar</span>
          </button>
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
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.rotulo}
                        <span className="somente-leitor"> (abre em nova aba)</span>
                      </a>
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
