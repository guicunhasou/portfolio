import imagemEstelar from '../assets/imagens/capa-estelar.webp';
import imagemSportsX from '../assets/imagens/capa-sportsx.webp';
import imagemIaraGames from '../assets/imagens/capa-iara.webp';
import imagemJardimental from '../assets/imagens/capa-jardimental.webp';
import imagemSiteInstitucional from '../assets/imagens/capa-institucional.webp';
import estelar1 from '../assets/imagens/modais/estelar-1.webp';
import estelar2 from '../assets/imagens/modais/estelar-2.webp';
import estelar3 from '../assets/imagens/modais/estelar-3.webp';
import sportsx1 from '../assets/imagens/modais/sportsx-1.webp';
import sportsx2 from '../assets/imagens/modais/sportsx-2.webp';
import sportsx3 from '../assets/imagens/modais/sportsx-3.webp';
import jardimental1 from '../assets/imagens/modais/jardimental-1.webp';
import jardimental2 from '../assets/imagens/modais/jardimental-2.webp';
import jardimental3 from '../assets/imagens/modais/jardimental-3.webp';
import iara1 from '../assets/imagens/modais/iara-1.webp';
import iara2 from '../assets/imagens/modais/iara-2.webp';
import iara3 from '../assets/imagens/modais/iara-3.webp';
import institucional1 from '../assets/imagens/modais/institucional-1.webp';
import institucional2 from '../assets/imagens/modais/institucional-2.webp';
import institucional3 from '../assets/imagens/modais/institucional-3.webp';
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
    colaboradores: colaboradorasProjetos,
    imagem: imagemEstelar,
    textoAlternativo:
      'Astronauta segurando um coração luminoso ao lado de interfaces de acompanhamento emocional e uma constelação colorida',
    imagensModal: [
      {
        src: estelar1,
        textoAlternativo:
          'Astronauta segurando um coração luminoso ao lado da constelação da jornada emocional e de indicadores de bem-estar do Estelar',
      },
      {
        src: estelar2,
        textoAlternativo:
          'Telas do Estelar para cuidado imediato, jornada emocional, registro de eventos e acompanhamento da missão',
      },
      {
        src: estelar3,
        textoAlternativo:
          'Telas do Estelar com radar de suporte, painel da missão e área de conexão com a Terra',
      },
    ],
    tags: ['React Native', 'Expo Router', 'TypeScript', 'UX/UI', 'Figma'],
    links: [
      {
        rotulo: 'Repositório',
        url: 'https://github.com/guicunhasou/Estelar',
        tipo: 'repositorio',
      },
      {
        rotulo: 'Figma',
        url: 'https://www.figma.com/proto/iE0wnaC0eO3JqJgl6DSydU/Global-Solutions-Space-Connect-Estelar?node-id=1018-1370&viewport=167%2C913%2C0.41&t=8e3fCfVlCn0Vi6yu-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1018%3A1370',
        tipo: 'figma',
      },
    ],
  },
  {
    id: 'sportsx',
    nome: 'SportsX',
    descricaoCurta:
      'Plataforma web responsiva criada para dar visibilidade a esportes menos valorizados.',
    descricaoCompleta:
      'Projeto acadêmico desenvolvido em equipe para ampliar a visibilidade de esportes menos valorizados por meio de uma experiência web responsiva e acessível. O projeto foi selecionado para o FIAP NEXT 2025.',
    colaboradores: colaboradorasProjetos,
    imagem: imagemSportsX,
    textoAlternativo:
      'Atleta praticando escalada ao lado de cards que apresentam diferentes modalidades esportivas',
    imagensModal: [
      {
        src: sportsx1,
        textoAlternativo:
          'Atleta praticando escalada ao lado de cards de corrida de trilha, asa-delta e escalada',
      },
      {
        src: sportsx2,
        textoAlternativo:
          'Telas do SportsX com modalidades esportivas, página inicial e perfil de praticante',
      },
      {
        src: sportsx3,
        textoAlternativo:
          'Telas do SportsX com detalhes de modalidade, área para patrocinadores e formulário de contato',
      },
    ],
    tags: ['UX/UI', 'HTML', 'CSS', 'JavaScript', 'Acessibilidade'],
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
    imagensModal: [
      {
        src: jardimental1,
        textoAlternativo:
          'Telas do Jardimental com registro de humor, jardim virtual e histórico emocional',
      },
      {
        src: jardimental2,
        textoAlternativo:
          'Telas do Jardimental com evolução emocional, check-in diário e resumo do humor',
      },
      {
        src: jardimental3,
        textoAlternativo:
          'Telas do Jardimental com comunidade, jardim virtual e conteúdo de relaxamento',
      },
    ],
    tags: [
      'Pesquisa UX',
      'Figma',
      'Prototipagem',
      'Arquitetura da Informação',
      'Gamificação',
    ],
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
    imagensModal: [
      {
        src: iara1,
        textoAlternativo:
          'Personagem Iara sentada na floresta ao lado de capas de jogos brasileiros',
      },
      {
        src: iara2,
        textoAlternativo:
          'Telas da Iara Games com página inicial, fórum e perfil da personagem',
      },
      {
        src: iara3,
        textoAlternativo:
          'Telas da Iara Games com detalhes de jogos, catálogo e página de compra',
      },
    ],
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
    imagensModal: [
      {
        src: institucional1,
        textoAlternativo:
          'Telas do site institucional da escola com as páginas A Escola, Blog e Contato',
      },
      {
        src: institucional2,
        textoAlternativo:
          'Telas do site institucional da escola com calendário, página inicial e indicadores',
      },
      {
        src: institucional3,
        textoAlternativo:
          'Estudantes diante da escola, atividade com a comunidade e aviso de reunião pedagógica',
      },
    ],
    tags: ['Front-end', 'HTML', 'CSS', 'JavaScript', 'Responsividade'],
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
