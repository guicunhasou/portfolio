export const IDIOMAS = ['pt', 'en', 'es', 'fr', 'de'] as const;

export type Idioma = (typeof IDIOMAS)[number];

export const IDIOMAS_DISPONIVEIS: Array<{
  codigo: Idioma;
  sigla: string;
  nome: string;
  lang: string;
}> = [
  { codigo: 'pt', sigla: 'PT', nome: 'Português', lang: 'pt-BR' },
  { codigo: 'en', sigla: 'EN', nome: 'English', lang: 'en' },
  { codigo: 'es', sigla: 'ES', nome: 'Español', lang: 'es' },
  { codigo: 'fr', sigla: 'FR', nome: 'Français', lang: 'fr' },
  { codigo: 'de', sigla: 'DE', nome: 'Deutsch', lang: 'de' },
];
