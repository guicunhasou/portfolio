import { forwardRef } from 'react';
import type { Projeto } from '../../types/projeto';

type PropriedadesCardProjeto = {
  projeto: Projeto;
  indice: number;
  quantidadeProjetos: number;
  atual: boolean;
};

const CardProjeto = forwardRef<HTMLElement, PropriedadesCardProjeto>(
  function CardProjeto(
    { projeto, indice, quantidadeProjetos, atual },
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
          <img src={projeto.imagem} alt={projeto.textoAlternativo} />
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

          <ul className="links-projeto">
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
    );
  },
);

export default CardProjeto;
