import type { LinkSocial } from '../../types/linkSocial';
import type { LinkProjeto } from '../../types/projeto';

type TipoIconeAcao = LinkSocial['tipo'] | LinkProjeto['tipo'] | 'fechar';

type PropriedadesIconeAcao = {
  tipo: TipoIconeAcao;
};

function IconeAcao({ tipo }: PropriedadesIconeAcao) {
  if (tipo === 'linkedin') {
    return (
      <span className="icone-acao icone-acao-textual" aria-hidden="true">
        in
      </span>
    );
  }

  if (tipo === 'behance') {
    return (
      <span className="icone-acao icone-acao-textual" aria-hidden="true">
        Bē
      </span>
    );
  }

  if (tipo === 'medium') {
    return (
      <span
        className="icone-acao icone-acao-textual"
        aria-hidden="true"
      >
        M
      </span>
    );
  }

  if (tipo === 'github') {
    return (
      <span className="icone-acao" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            fill="currentColor"
            d="M12 .7a11.3 11.3 0 0 0-3.57 22c.57.1.78-.25.78-.55v-2.16c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.54-.29-5.21-1.27-5.21-5.64 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.11 1.17A10.8 10.8 0 0 1 12 5.93c.96 0 1.93.13 2.83.38 2.15-1.48 3.11-1.17 3.11-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.38-2.68 5.34-5.23 5.63.41.35.78 1.05.78 2.12v3.16c0 .3.21.66.79.55A11.3 11.3 0 0 0 12 .7Z"
          />
        </svg>
      </span>
    );
  }

  if (tipo === 'email') {
    return (
      <span className="icone-acao" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" focusable="false">
          <path
            d="M4 6.5h16v11H4v-11Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="m5 7.5 7 5 7-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }

  if (tipo === 'figma') {
    return (
      <span className="icone-acao" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor" focusable="false">
          <path d="M9 2h3v6H9a3 3 0 0 1 0-6Z" />
          <path d="M12 2h3a3 3 0 0 1 0 6h-3V2Z" opacity=".82" />
          <path d="M9 8h3v6H9a3 3 0 0 1 0-6Z" opacity=".72" />
          <circle cx="15" cy="11" r="3" opacity=".9" />
          <path d="M9 14h3v3a3 3 0 1 1-3-3Z" opacity=".8" />
        </svg>
      </span>
    );
  }

  if (tipo === 'repositorio') {
    return (
      <span className="icone-acao" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" focusable="false">
          <circle cx="7" cy="5" r="2" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17" cy="7" r="2" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="7" cy="19" r="2" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M7 7v10M9 7h4a4 4 0 0 1 4 4v4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }

  if (tipo === 'site') {
    return (
      <span className="icone-acao" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" focusable="false">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M3.5 12h17M12 3c2.2 2.45 3.3 5.45 3.3 9s-1.1 6.55-3.3 9c-2.2-2.45-3.3-5.45-3.3-9S9.8 5.45 12 3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }

  if (tipo === 'fechar') {
    return (
      <span className="icone-acao" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" focusable="false">
          <path
            d="m6 6 12 12M18 6 6 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }

  return (
    <span className="icone-acao" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" focusable="false">
        <path
          d="M14 5h5v5M19 5l-8 8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default IconeAcao;
