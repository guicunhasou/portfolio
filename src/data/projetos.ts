import imagemEstelar from '../assets/imagens/capa-estelar.webp';
import imagemSportsX from '../assets/imagens/capa-sportsx.webp';
import imagemIaraGames from '../assets/imagens/capa-iara.webp';
import imagemJardimental from '../assets/imagens/capa-jardimental.webp';
import imagemSiteInstitucional from '../assets/imagens/capa-institucional.webp';
import type { ColaboradorProjeto, Projeto } from '../types/projeto';

const colaboradorasProjetos: ColaboradorProjeto[] = [
  {
    nome: 'Isa Alves',
    url: 'https://www.linkedin.com/in/isalvesb/',
  },
  {
    nome: 'Kauane Cavalcante',
    url: 'https://www.linkedin.com/in/kauanecavalcante',
  },
  {
    nome: 'Mirna Marinho',
    url: 'https://www.linkedin.com/in/amimarinho/',
  },
];

export const projetos: Projeto[] = [
  {
    id: 'estelar',
    nome: 'Estelar',
    descricaoCurta:
      'App mobile de saúde mental e bem-estar para astronautas em missões de longa duração.',
    descricaoCompleta:
      'Projeto funcional desenvolvido para a Global Solution FIAP 2026, com foco em saúde mental no espaço, experiência mobile, acompanhamento emocional e uma identidade visual autoral.',
    informacaoAdicional: 'Global Solution FIAP 2026.',
    colaboradores: colaboradorasProjetos,
    imagem: imagemEstelar,
    textoAlternativo: 'Astronauta segurando um coração luminoso ao lado de interfaces de acompanhamento emocional e uma constelação colorida',
    tags: ['React Native', 'Expo', 'TypeScript', 'UX/UI', 'Figma'],
    links: [
      {
        rotulo: 'Repositório',
        url: '',
        tipo: 'repositorio',
      },
      {
        rotulo: 'Figma',
        url: '',
        tipo: 'figma',
      },
      {
        rotulo: 'Medium',
        url: '',
        tipo: 'medium',
      },
      {
        rotulo: 'Behance',
        url: '',
        tipo: 'behance',
      },
    ],
    destaque: true,
  },
  {
    id: 'sportsx',
    nome: 'SportsX',
    descricaoCurta:
      'Plataforma web responsiva criada para dar visibilidade a esportes menos valorizados.',
    descricaoCompleta:
      'Projeto acadêmico desenvolvido em equipe para ampliar a visibilidade de esportes menos valorizados por meio de uma experiência web responsiva e acessível.',
    informacaoAdicional: 'Projeto selecionado para o FIAP NEXT 2025.',
    colaboradores: colaboradorasProjetos,
    imagem: imagemSportsX,
    textoAlternativo:
      'Atleta praticando escalada ao lado de cards que apresentam diferentes modalidades esportivas',
    tags: ['UX/UI', 'Front-end', 'JavaScript', 'Bootstrap', 'Acessibilidade'],
    links: [
      {
        rotulo: 'Página publicada',
        url: 'https://fiap-webdesign.github.io/enterprise-challenge-sportsx/',
        tipo: 'site',
      },
      {
        rotulo: 'Repositório',
        url: 'https://github.com/fiap-webdesign/enterprise-challenge-sportsx',
        tipo: 'repositorio',
      },
      {
        rotulo: 'Figma',
        url: 'https://www.figma.com/design/QtaMgmCtG6Y0UcIVD4mC70/Enterprise-Challenge?node-id=348-2&t=G8Y0sdoiVUFy7WKq-1',
        tipo: 'figma',
      },
    ],
    destaque: true,
  },
  {
    id: 'jardimental',
    nome: 'Jardimental',
    descricaoCurta:
      'Estudo de caso UX/UI de um app para acompanhamento de hábitos de saúde mental.',
    descricaoCompleta:
      'Estudo de caso de UX/UI para um aplicativo gamificado voltado ao acompanhamento de hábitos de saúde mental, com foco em prototipação e storytelling de produto.',
    imagem: imagemJardimental,
    textoAlternativo:
      'Telas do aplicativo com registro de humor, jardim virtual florido e histórico emocional',
    tags: ['UX/UI', 'Estudo de Caso', 'Figma', 'Prototipagem', 'Gamificação'],
    links: [
      {
        rotulo: 'Estudo de caso',
        url: 'https://www.behance.net/gallery/186602883/Jardimental-Estudo-de-Caso-UXUI',
        tipo: 'behance',
      },
      {
        rotulo: 'Figma',
        url: 'https://www.figma.com/design/ZrPQwEFRN4NBoRsO2I4aCa/JARDIMENTAL?node-id=89-116&t=jBzMcGUvaKzY9hy1-1',
        tipo: 'figma',
      },
    ],
  },
  {
    id: 'iara-games',
    nome: 'Iara Games',
    descricaoCurta:
      'Projeto acadêmico focado em interfaces interativas, dados e acessibilidade.',
    descricaoCompleta:
      'Projeto educacional que reúne interfaces interativas, prototipação e visualização de dados em uma experiência construída com tecnologias web e Node-RED.',
    colaboradores: colaboradorasProjetos,
      imagem: imagemIaraGames,
    textoAlternativo:
      'Personagem Iara sentada em uma floresta ao lado de capas de diferentes jogos',
    tags: ['Front-end', 'UX/UI', 'JavaScript', 'Bootstrap', 'Node-RED'],
    links: [
      {
        rotulo: 'Página publicada',
        url: 'https://guicunhasou.github.io/iara-games/index.html',
        tipo: 'site',
      },
      {
        rotulo: 'Repositório',
        url: 'https://github.com/guicunhasou/iara-games',
        tipo: 'repositorio',
      },
      {
        rotulo: 'Figma',
        url: 'https://www.figma.com/design/pMH6zTuYQDshExMhQQGLeK/Iara-Games?node-id=97-10&t=rxvJ9SQssHLTYwbs-1',
        tipo: 'figma',
      },
    ],
  },
  {
    id: 'site-institucional',
    nome: 'Site Institucional',
    descricaoCurta:
      'Projeto de site institucional para uma escola real, focado em design intuitivo e responsivo.',
    descricaoCompleta:
      'Site institucional desenvolvido para uma escola real, com foco em clareza de navegação, organização visual, responsividade e utilidade para a comunidade escolar.',
    imagem: imagemSiteInstitucional,
    textoAlternativo:
      'Estudantes na entrada da escola, atividade com a comunidade escolar e aviso de reunião pedagógica',
    tags: ['Front-end', 'UX/UI', 'HTML', 'CSS', 'JavaScript'],
    links: [
      {
        rotulo: 'Página publicada',
        url: 'https://guicunhasou.github.io/escolar/',
        tipo: 'site',
      },
      {
        rotulo: 'Repositório',
        url: 'https://github.com/guicunhasou/escolar',
        tipo: 'repositorio',
      },
    ],
  },
];
