import { useEffect, useState } from 'react';

const QUANTIDADE_FORMAS = 6;

function FundoLava() {
  const [paginaVisivel, setPaginaVisivel] = useState(() => !document.hidden);

  useEffect(() => {
    const atualizarVisibilidade = () => {
      setPaginaVisivel(!document.hidden);
    };

    document.addEventListener('visibilitychange', atualizarVisibilidade);

    return () => {
      document.removeEventListener('visibilitychange', atualizarVisibilidade);
    };
  }, []);

  return (
    <div
      className={`fundo-lava${paginaVisivel ? '' : ' fundo-lava-pausado'}`}
      aria-hidden="true"
    >
      {Array.from({ length: QUANTIDADE_FORMAS }, (_, indice) => (
        <span
          className={`forma-lava forma-lava-${indice + 1}`}
          key={indice}
        />
      ))}
    </div>
  );
}

export default FundoLava;
