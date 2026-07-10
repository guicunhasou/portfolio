import { forwardRef } from 'react';
import type { Projeto } from '../../types/projeto';

type PropriedadesCardProjeto = {
  projeto: Projeto;
  indice: number;
  quantidadeProjetos: number;
  atual: boolean;
  aoAbrirDetalhes: (projeto: Projeto, acionador: HTMLButtonElement) => void;
};

const CardProjeto = forwardRef<HTMLElement, PropriedadesCardProjeto>(
  function CardProjeto(
    { projeto, indice, quantidadeProjetos, atual, aoAbrirDetalhes },
    referencia,
  ) {
    return (
      <article
        ref={referencia}
        className={`card-projeto ${atual ? 'card-atual' : ''}`.trim()}
        aria-current={atual ? 'true' : undefined}
        aria-label={`Projeto ${indice + 1} de ${quantidadeProjetos}: ${projeto.nome}`}
      >
        <div className="imagem-projeto">
          {projeto.imagem ? (
            <img src={projeto.imagem} alt={projeto.textoAlternativo} />
          ) : (
            <div className="imagem-projeto-indisponivel">
              <span className="simbolo-projeto" aria-hidden="true">
                ✦
              </span>
              <strong>{projeto.nome}</strong>
              <span>Prévia visual em atualização</span>
            </div>
          )}
        </div>

        <div className="conteudo-projeto">
          <div className="textos-projeto">
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricaoCurta}</p>
            {projeto.informacaoAdicional && (
              <p>{projeto.informacaoAdicional}</p>
            )}
          </div>

          <ul
            className="tags-projeto"
            aria-label="Tecnologias e competências"
          >
            {projeto.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <button
            className="botao-detalhes"
            type="button"
            onClick={(evento) =>
              aoAbrirDetalhes(projeto, evento.currentTarget)
            }
          >
            Ver detalhes
          </button>
        </div>
      </article>
    );
  },
);

export default CardProjeto;
