import type { Projeto } from '../../types/projeto';

type PropriedadesCardProjeto = {
  projeto: Projeto;
  aoAbrirDetalhes: (projeto: Projeto, acionador: HTMLButtonElement) => void;
};

function CardProjeto({
  projeto,
  aoAbrirDetalhes,
}: PropriedadesCardProjeto) {
  const idTitulo = `titulo-card-${projeto.id}`;

  return (
    <article className="card-projeto" aria-labelledby={idTitulo}>
      <button
        className="acionador-card"
        type="button"
        onClick={(evento) => aoAbrirDetalhes(projeto, evento.currentTarget)}
      >
        <span className="somente-leitor">Ver detalhes de {projeto.nome}</span>
      </button>

      <div className="imagem-projeto">
        {projeto.imagem ? (
          <img
            src={projeto.imagem}
            alt={projeto.textoAlternativo}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="imagem-projeto-indisponivel">
            <span className="simbolo-projeto" aria-hidden="true">
              ✦
            </span>
            <strong>{projeto.nome}</strong>
          </div>
        )}
      </div>

      <div className="conteudo-projeto">
        <div className="textos-projeto">
          <h3 id={idTitulo}>{projeto.nome}</h3>
          <p>{projeto.descricaoCurta}</p>
        </div>
      </div>
    </article>
  );
}

export default CardProjeto;
