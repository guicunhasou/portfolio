export type ColaboradorProjeto = {
  nome: string;
  url?: string;
};

export type ImagemModalProjeto = {
  src: string;
  textoAlternativo: string;
};

export type LinkProjeto = {
  rotulo: string;
  url?: string;
  tipo: 'site' | 'repositorio' | 'figma' | 'medium' | 'behance' | 'outro';
};

export type Projeto = {
  id: string;
  nome: string;
  descricaoCurta: string;
  descricaoCompleta: string;
  colaboradores?: ColaboradorProjeto[];
  imagem?: string;
  textoAlternativo: string;
  imagensModal?: ImagemModalProjeto[];
  tags: string[];
  links: LinkProjeto[];
  destaque?: boolean;
};
