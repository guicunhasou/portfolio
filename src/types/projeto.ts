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
  informacaoAdicional?: string;
  imagem?: string;
  textoAlternativo: string;
  tags: string[];
  links: LinkProjeto[];
  destaque?: boolean;
};
