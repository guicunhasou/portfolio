type TipoIconeControle = 'musica' | 'tema' | 'idioma' | 'acessibilidade';

type PropriedadesIconeControle = {
  tipo: TipoIconeControle;
  temaAtivo?: 'claro' | 'escuro';
  nivelMusica?: 0 | 1 | 2 | 3;
  idiomaAlternativo?: boolean;
  acessibilidadeAtiva?: boolean;
};

function IconeControle({
  tipo,
  temaAtivo = 'claro',
  nivelMusica = 0,
  idiomaAlternativo = false,
  acessibilidadeAtiva = false,
}: PropriedadesIconeControle) {
  if (tipo === 'musica') {
    return (
      <span className="icone-controle" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" focusable="false">
          <path
            d="M4 10v4h3.2l4.3 3.5v-11L7.2 10H4Z"
            fill="currentColor"
          />
          {nivelMusica >= 1 && (
            <path
              d="M14.4 9.2a4 4 0 0 1 0 5.6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          )}
          {nivelMusica >= 2 && (
            <path
              d="M16.8 6.9a7.3 7.3 0 0 1 0 10.2"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          )}
          {nivelMusica >= 3 && (
            <path
              d="M19.2 4.8a10.2 10.2 0 0 1 0 14.4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          )}
        </svg>
      </span>
    );
  }

  if (tipo === 'tema') {
    if (temaAtivo === 'escuro') {
      return (
        <span className="icone-controle" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" focusable="false">
            <path
              d="M19.4 15.3A8 8 0 0 1 8.7 4.6a8 8 0 1 0 10.7 10.7Z"
              fill="currentColor"
            />
          </svg>
        </span>
      );
    }

    return (
      <span className="icone-controle" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" focusable="false">
          <circle cx="12" cy="12" r="3.8" fill="currentColor" />
          <path
            d="M12 2.8v2.1M12 19.1v2.1M21.2 12h-2.1M4.9 12H2.8M18.5 5.5 17 7M7 17l-1.5 1.5M18.5 18.5 17 17M7 7 5.5 5.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }

  if (tipo === 'idioma') {
    return (
      <span className="icone-controle" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" focusable="false">
          <circle
            cx="12"
            cy="12"
            r="8.5"
            fill={idiomaAlternativo ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M3.8 12h16.4M12 3.5c2.1 2.3 3.1 5.1 3.1 8.5S14.1 18.2 12 20.5C9.9 18.2 8.9 15.4 8.9 12S9.9 5.8 12 3.5Z"
            stroke={idiomaAlternativo ? 'var(--detalhe-icone-idioma)' : 'currentColor'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }

  if (acessibilidadeAtiva) {
    return (
      <span className="icone-controle" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" focusable="false">
          <circle cx="12" cy="12" r="9" fill="currentColor" />
          <circle
            cx="12"
            cy="5.2"
            r="1.7"
            fill="var(--detalhe-icone-acessibilidade)"
          />
          <path
            d="M6.4 9.1c1.8.8 3.7 1.2 5.6 1.2s3.8-.4 5.6-1.2M12 10.3v3.5M12 13.8 9.1 19M12 13.8l2.9 5.2"
            stroke="var(--detalhe-icone-acessibilidade)"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }

  return (
    <span className="icone-controle" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" focusable="false">
        <circle
          cx="12"
          cy="4.4"
          r="2.1"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M5 8.5c2.2 1 4.5 1.5 7 1.5s4.8-.5 7-1.5M12 10v4.2M12 14.2 8.4 21M12 14.2l3.6 6.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default IconeControle;
