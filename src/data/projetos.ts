import imagemIaraGames from '../assets/imagens/img2.webp';
import imagemJardimental from '../assets/imagens/img1.webp';
import imagemSiteInstitucional from '../assets/imagens/img5.webp';
import imagemSportsX from '../assets/imagens/img4.webp';
import type { Projeto } from '../types/projeto';

export const projetos: Projeto[] = [
  {
    id: 'sportsx',
    nome: 'SportsX',
    descricaoCurta:
      'Plataforma web responsiva criada para dar visibilidade a esportes menos valorizados, unindo front-end, UX/UI e acessibilidade.',
    descricaoCompleta:
      'Projeto acadêmico desenvolvido em equipe para ampliar a visibilidade de esportes menos valorizados por meio de uma experiência web responsiva e acessível.',
    informacaoAdicional: 'Projeto selecionado para o FIAP NEXT 2025.',
    imagem: imagemSportsX,
    textoAlternativo:
      'Página inicial do SportsX com destaque para escalada esportiva',
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
    id: 'iara-games',
    nome: 'Iara Games',
    descricaoCurta:
      'Projeto acadêmico com interfaces interativas, acessibilidade e visualização de dados usando HTML, CSS, JavaScript e Node-RED.',
    descricaoCompleta:
      'Projeto educacional que reúne interfaces interativas, prototipação e visualização de dados em uma experiência construída com tecnologias web e Node-RED.',
    imagem: imagemIaraGames,
    textoAlternativo:
      'Página inicial do Iara Games com personagem ilustrada e acesso ao catálogo',
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
    id: 'jardimental',
    nome: 'Jardimental',
    descricaoCurta:
      'Estudo de caso UX/UI de um app gamificado para acompanhamento de hábitos de saúde mental.',
    descricaoCompleta:
      'Estudo de caso de UX/UI para um aplicativo gamificado voltado ao acompanhamento de hábitos de saúde mental, com foco em prototipação e storytelling de produto.',
    imagem: imagemJardimental,
    textoAlternativo:
      'Protótipos do aplicativo Jardimental apresentados sobre fundo rosa',
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
    id: 'site-institucional',
    nome: 'Site Institucional',
    descricaoCurta:
      'Projeto de site institucional para uma escola real, focado em design intuitivo e responsivo.',
    descricaoCompleta:
      'Site institucional desenvolvido para uma escola real, com foco em clareza de navegação, organização visual, responsividade e utilidade para a comunidade escolar.',
    imagem: imagemSiteInstitucional,
    textoAlternativo:
      'Página inicial do site da escola com banner e atalhos de navegação',
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
  {
    id: 'estelar',
    nome: 'Estelar',
    descricaoCurta:
      'Aplicativo mobile de saúde mental e bem-estar para astronautas em missões espaciais de longa duração.',
    descricaoCompleta:
      'Projeto funcional desenvolvido para a Global Solution FIAP 2026, com foco em saúde mental no espaço, experiência mobile, acompanhamento emocional e uma identidade visual autoral.',
    informacaoAdicional: 'Global Solution FIAP 2026.',
    textoAlternativo: 'Prévia visual do projeto Estelar em atualização',
    tags: ['React Native', 'Expo', 'TypeScript', 'UX/UI', 'Figma'],
    links: [],
    destaque: true,
  },
];
