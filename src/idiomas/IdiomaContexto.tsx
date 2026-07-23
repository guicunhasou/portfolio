import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { traducoes } from './traducoes';
import {
  IDIOMAS,
  IDIOMAS_DISPONIVEIS,
  type Idioma,
} from './tipos';

const CHAVE_IDIOMA = 'portfolio:idioma';

function idiomaValido(valor: string | null): valor is Idioma {
  return IDIOMAS.includes(valor as Idioma);
}

function detectarIdiomaNavegador(): Idioma {
  const preferencias = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const preferencia of preferencias) {
    const codigo = preferencia.toLowerCase().split('-')[0];

    if (idiomaValido(codigo)) {
      return codigo;
    }
  }

  return 'pt';
}

function obterIdiomaInicial(): Idioma {
  try {
    const idiomaSalvo = window.localStorage.getItem(CHAVE_IDIOMA);

    if (idiomaValido(idiomaSalvo)) {
      return idiomaSalvo;
    }
  } catch {
    return detectarIdiomaNavegador();
  }

  return detectarIdiomaNavegador();
}

function salvarIdioma(idioma: Idioma) {
  try {
    window.localStorage.setItem(CHAVE_IDIOMA, idioma);
  } catch {
    return;
  }
}

function atualizarMeta(seletor: string, conteudo: string) {
  document.querySelector(seletor)?.setAttribute('content', conteudo);
}

type ValorIdiomaContexto = {
  idioma: Idioma;
  definirIdioma: (idioma: Idioma) => void;
  traducao: (typeof traducoes)[Idioma];
};

const IdiomaContexto = createContext<ValorIdiomaContexto | null>(null);

type PropriedadesProvedorIdioma = {
  children: ReactNode;
};

export function ProvedorIdioma({ children }: PropriedadesProvedorIdioma) {
  const [idioma, definirIdioma] = useState<Idioma>(obterIdiomaInicial);
  const traducao = traducoes[idioma];

  useEffect(() => {
    const idiomaDisponivel = IDIOMAS_DISPONIVEIS.find(
      (opcao) => opcao.codigo === idioma,
    );

    document.documentElement.lang = idiomaDisponivel?.lang ?? 'pt-BR';
    document.title = traducao.metadados.titulo;

    atualizarMeta('meta[name="description"]', traducao.metadados.descricao);
    atualizarMeta('meta[property="og:locale"]', traducao.metadados.localeSocial);
    atualizarMeta('meta[property="og:title"]', traducao.metadados.titulo);
    atualizarMeta(
      'meta[property="og:description"]',
      traducao.metadados.descricaoSocial,
    );
    atualizarMeta(
      'meta[property="og:image:alt"]',
      traducao.metadados.imagemSocialAlt,
    );
    atualizarMeta('meta[name="twitter:title"]', traducao.metadados.titulo);
    atualizarMeta(
      'meta[name="twitter:description"]',
      traducao.metadados.descricaoSocial,
    );

    salvarIdioma(idioma);
  }, [idioma, traducao]);

  const valor = useMemo(
    () => ({ idioma, definirIdioma, traducao }),
    [idioma, traducao],
  );

  return (
    <IdiomaContexto.Provider value={valor}>
      {children}
    </IdiomaContexto.Provider>
  );
}

export function useIdioma() {
  const contexto = useContext(IdiomaContexto);

  if (!contexto) {
    throw new Error('useIdioma deve ser usado dentro de ProvedorIdioma.');
  }

  return contexto;
}
