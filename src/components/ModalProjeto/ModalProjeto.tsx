import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { useAcessibilidade } from '../../acessibilidade/AcessibilidadeContexto';
import { useIdioma } from '../../idiomas/IdiomaContexto';
import type { Projeto } from '../../types/projeto';
import IconeAcao from '../IconeAcao/IconeAcao';

type PropriedadesModalProjeto = {
  projeto: Projeto;
  aoFechar: (origem: 'ponteiro' | 'teclado') => void;
};

function ModalProjeto({ projeto, aoFechar }: PropriedadesModalProjeto) {
  const { traducao } = useIdioma();
  const { movimentoReduzido, preferencias } = useAcessibilidade();
  const dialogoRef = useRef<HTMLDialogElement>(null);
  const [indiceImagem, setIndiceImagem] = useState(0);
  const animacoesPausadas = preferencias.pausarAnimacoes;
  const idTitulo = `titulo-modal-${projeto.id}`;
  const idDescricao = `descricao-modal-${projeto.id}`;
  const colaboradores = projeto.colaboradores ?? [];
  const imagensModal = projeto.imagensModal ?? [];

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

  useEffect(() => {
    setIndiceImagem(0);
  }, [projeto.id]);

  useEffect(() => {
    if (movimentoReduzido || animacoesPausadas) {
      setIndiceImagem(0);
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
  }, [animacoesPausadas, imagensModal.length, movimentoReduzido, projeto.id]);

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
          aoFechar('ponteiro');
        }
      }}
      onCancel={(evento) => {
        evento.preventDefault();
        aoFechar('teclado');
      }}
      onKeyDown={manterFocoNoModal}
    >
      <div className="conteudo-modal">
        <header className="cabecalho-modal">
          <div className="identificacao-modal">
            <h2 id={idTitulo}>{projeto.nome}</h2>

            {colaboradores.length > 0 && (
              <p className="colaboradores-projeto-modal">
                {traducao.projetos.colaboracaoCom}{' '}
                {colaboradores.map((colaborador, indice) => {
                  const nomeCurto = colaborador.nome.split(' ')[0];

                  return (
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
                          {nomeCurto}
                        </a>
                      ) : (
                        nomeCurto
                      )}
                    </span>
                  );
                })}
              </p>
            )}
          </div>

          <button
            className="botao-acao botao-expansivel botao-fechar"
            type="button"
            onClick={(evento) =>
              aoFechar(evento.detail === 0 ? 'teclado' : 'ponteiro')
            }
          >
            <IconeAcao tipo="fechar" />
            <span className="rotulo-botao">{traducao.projetos.fechar}</span>
          </button>
        </header>

        <div className="corpo-modal">
          <div className="resumo-modal">
            <p className="descricao-projeto-modal" id={idDescricao}>
              {projeto.descricaoCompleta}
            </p>

            <div
              className="tags-modal"
              role="list"
              aria-label={traducao.projetos.tecnologiasCompetencias}
            >
              {projeto.tags.map((tag) => (
                <span role="listitem" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="imagem-modal"
            role="group"
            aria-label={`${traducao.projetos.imagensProjeto} ${projeto.nome}`}
          >
            {imagensModal.length > 0 ? (
              imagensModal.map((imagem, indice) => {
                const imagemAtiva = indice === indiceImagem;

                return (
                  <img
                    className={`imagem-slide${imagemAtiva ? ' imagem-slide-ativa' : ''}`}
                    key={imagem.src}
                    src={imagem.src}
                    alt={imagemAtiva ? imagem.textoAlternativo : ''}
                    aria-hidden={!imagemAtiva}
                    decoding="async"
                  />
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

          {projeto.links.length > 0 && (
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
          )}
        </div>
      </div>
    </dialog>
  );
}

export default ModalProjeto;
