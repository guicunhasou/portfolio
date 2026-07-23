import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type PreferenciaAcessibilidade =
  | 'reduzirMovimento'
  | 'pausarAnimacoes'
  | 'contrasteReforcado'
  | 'destacarLinks';

type PreferenciasAcessibilidade = Record<PreferenciaAcessibilidade, boolean>;

const CHAVE_ACESSIBILIDADE = 'portfolio:acessibilidade';
const PREFERENCIAS_PADRAO: PreferenciasAcessibilidade = {
  reduzirMovimento: false,
  pausarAnimacoes: false,
  contrasteReforcado: false,
  destacarLinks: false,
};

function obterPreferenciasSalvas(): PreferenciasAcessibilidade {
  try {
    const valorSalvo = window.localStorage.getItem(CHAVE_ACESSIBILIDADE);

    if (!valorSalvo) {
      return PREFERENCIAS_PADRAO;
    }

    const preferencias = JSON.parse(valorSalvo) as Partial<PreferenciasAcessibilidade>;

    return {
      reduzirMovimento: preferencias.reduzirMovimento === true,
      pausarAnimacoes: preferencias.pausarAnimacoes === true,
      contrasteReforcado: preferencias.contrasteReforcado === true,
      destacarLinks: preferencias.destacarLinks === true,
    };
  } catch {
    return PREFERENCIAS_PADRAO;
  }
}

function salvarPreferencias(preferencias: PreferenciasAcessibilidade) {
  try {
    window.localStorage.setItem(
      CHAVE_ACESSIBILIDADE,
      JSON.stringify(preferencias),
    );
  } catch {
    return;
  }
}

type ValorAcessibilidadeContexto = {
  preferencias: PreferenciasAcessibilidade;
  movimentoReduzido: boolean;
  acessibilidadeAtiva: boolean;
  alternarPreferencia: (preferencia: PreferenciaAcessibilidade) => void;
};

const AcessibilidadeContexto =
  createContext<ValorAcessibilidadeContexto | null>(null);

type PropriedadesProvedorAcessibilidade = {
  children: ReactNode;
};

export function ProvedorAcessibilidade({
  children,
}: PropriedadesProvedorAcessibilidade) {
  const [preferencias, setPreferencias] = useState<PreferenciasAcessibilidade>(
    obterPreferenciasSalvas,
  );
  const [movimentoReduzidoSistema, setMovimentoReduzidoSistema] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const movimentoReduzido =
    preferencias.reduzirMovimento || movimentoReduzidoSistema;
  const acessibilidadeAtiva =
    movimentoReduzidoSistema || Object.values(preferencias).some(Boolean);

  useEffect(() => {
    const consultaMovimento = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );
    const atualizarPreferenciaSistema = (evento: MediaQueryListEvent) => {
      setMovimentoReduzidoSistema(evento.matches);
    };

    setMovimentoReduzidoSistema(consultaMovimento.matches);
    consultaMovimento.addEventListener('change', atualizarPreferenciaSistema);

    return () => {
      consultaMovimento.removeEventListener(
        'change',
        atualizarPreferenciaSistema,
      );
    };
  }, []);

  useEffect(() => {
    const raiz = document.documentElement;

    raiz.dataset.reduzirMovimento = movimentoReduzido ? 'true' : 'false';
    raiz.dataset.pausarAnimacoes = preferencias.pausarAnimacoes
      ? 'true'
      : 'false';
    raiz.dataset.contrasteReforcado = preferencias.contrasteReforcado
      ? 'true'
      : 'false';
    raiz.dataset.destacarLinks = preferencias.destacarLinks ? 'true' : 'false';

    salvarPreferencias(preferencias);
  }, [movimentoReduzido, preferencias]);

  const valor = useMemo(
    () => ({
      preferencias,
      movimentoReduzido,
      acessibilidadeAtiva,
      alternarPreferencia: (preferencia: PreferenciaAcessibilidade) => {
        setPreferencias((preferenciasAtuais) => ({
          ...preferenciasAtuais,
          [preferencia]: !preferenciasAtuais[preferencia],
        }));
      },
    }),
    [acessibilidadeAtiva, movimentoReduzido, preferencias],
  );

  return (
    <AcessibilidadeContexto.Provider value={valor}>
      {children}
    </AcessibilidadeContexto.Provider>
  );
}

export function useAcessibilidade() {
  const contexto = useContext(AcessibilidadeContexto);

  if (!contexto) {
    throw new Error(
      'useAcessibilidade deve ser usado dentro de ProvedorAcessibilidade.',
    );
  }

  return contexto;
}
