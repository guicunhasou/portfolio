export type LinkProjeto = {
  rotulo: string;
  url: string;
  tipo: 'site' | 'repositorio' | 'figma' | 'behance' | 'outro';
};

export type Projeto = {
  id: string;
  nome: string;
  descricaoCurta: string;
  descricaoCompleta: string;
  imagem: string;
  tags: string[];
  links: LinkProjeto[];
  destaque?: boolean;
};
