type TipoIconeControle = 'tema' | 'idioma' | 'acessibilidade';

type PropriedadesIconeControle = {
  tipo: TipoIconeControle;
  temaAtivo?: 'claro' | 'escuro';
  idiomaAlternativo?: boolean;
  acessibilidadeAtiva?: boolean;
};

function IconeControle({
  tipo,
  temaAtivo = 'claro',
  idiomaAlternativo = false,
  acessibilidadeAtiva = false,
}: PropriedadesIconeControle) {
  if (tipo === 'tema') {
    if (temaAtivo === 'escuro') {
      return (
        <span className="icone-controle" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" focusable="false">
            <path
              d="M19.45 15.35A8 8 0 0 1 8.65 4.55a8 8 0 1 0 10.8 10.8Z"
              stroke="currentColor"
              strokeWidth="1.8"
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
            cy="12"
            r="3.45"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.35 5.65 16.8 7.2M7.2 16.8l-1.55 1.55M18.35 18.35 16.8 16.8M7.2 7.2 5.65 5.65"
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
            r="8.35"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M3.65 12h16.7M12 3.65c2.15 2.3 3.25 5.1 3.25 8.35S14.15 18.05 12 20.35C9.85 18.05 8.75 15.25 8.75 12S9.85 5.95 12 3.65Z"
            stroke={
              idiomaAlternativo
                ? 'var(--detalhe-icone-idioma)'
                : 'currentColor'
            }
            strokeWidth="1.55"
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
          <circle
            cx="12"
            cy="12"
            r="8.35"
            fill="currentColor"
            fillOpacity={0.1}
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle
            cx="12"
            cy="7.15"
            r="1.35"
            fill="var(--detalhe-icone-acessibilidade)"
          />
          <path
            d="M7.65 10.2c1.35.62 2.8.93 4.35.93s3-.31 4.35-.93M12 11.15v3.05M12 14.2l-2.65 4.2M12 14.2l2.65 4.2"
            stroke="var(--detalhe-icone-acessibilidade)"
            strokeWidth="1.7"
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
          cy="12"
          r="8.35"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="7.15" r="1.35" fill="currentColor" />
        <path
          d="M7.65 10.2c1.35.62 2.8.93 4.35.93s3-.31 4.35-.93M12 11.15v3.05M12 14.2l-2.65 4.2M12 14.2l2.65 4.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default IconeControle;
