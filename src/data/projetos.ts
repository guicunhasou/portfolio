import imagemEstelar from "../assets/imagens/capa-estelar.webp";
import imagemSportsX from "../assets/imagens/capa-sportsx.webp";
import imagemIaraGames from "../assets/imagens/capa-iara.webp";
import imagemJardimental from "../assets/imagens/capa-jardimental.webp";
import estelar1 from "../assets/imagens/modais/estelar-1.webp";
import estelar2 from "../assets/imagens/modais/estelar-2.webp";
import estelar3 from "../assets/imagens/modais/estelar-3.webp";
import sportsx1 from "../assets/imagens/modais/sportsx-1.webp";
import sportsx2 from "../assets/imagens/modais/sportsx-2.webp";
import sportsx3 from "../assets/imagens/modais/sportsx-3.webp";
import jardimental1 from "../assets/imagens/modais/jardimental-1.webp";
import jardimental2 from "../assets/imagens/modais/jardimental-2.webp";
import jardimental3 from "../assets/imagens/modais/jardimental-3.webp";
import iara1 from "../assets/imagens/modais/iara-1.webp";
import iara2 from "../assets/imagens/modais/iara-2.webp";
import iara3 from "../assets/imagens/modais/iara-3.webp";
import type { ColaboradorProjeto, Projeto } from "../types/projeto";

const colaboradorasProjetos: ColaboradorProjeto[] = [
  {
    nome: "Isa Alves",
    url: "https://www.linkedin.com/in/isalvesb/",
  },
  {
    nome: "Kauane Cavalcante",
    url: "https://www.linkedin.com/in/kauanecavalcante",
  },
  {
    nome: "Mirna Marinho",
    url: "https://www.linkedin.com/in/amimarinho/",
  },
];

export const projetos: Projeto[] = [
  {
    id: "estelar",
    nome: "Estelar",
    descricaoCurta:
      "App mobile de saúde mental e bem-estar para astronautas em missões de longa duração.",
    descricaoCompleta:
      "Criamos o Estelar para a Global Solution Space Connect da FIAP de 2026. O app mobile propõe uma rotina de cuidado emocional para astronautas em missões longas. O check-in registra humor, energia, estresse e sono. Ao longo da missão, os registros se tornam pontos de uma constelação que mostra como o bem-estar evoluiu.",
    contribuicao: [
      "Participei da concepção, da identidade visual e da prototipação no Figma. Em React Native e TypeScript, contribuí para refinar o check-in e a jornada em forma de constelação, além de padronizar componentes e mensagens de feedback entre as telas.",
      "A equipe reuniu registro local, respiração guiada e um radar de suporte no mesmo fluxo de missão. A galeria mostra como o registro diário leva à jornada e como o app oferece caminhos de cuidado imediato.",
    ],
    colaboradores: colaboradorasProjetos,
    imagem: imagemEstelar,
    textoAlternativo:
      "Astronauta segurando um coração luminoso ao lado de interfaces de acompanhamento emocional e uma constelação colorida",
    imagensModal: [
      {
        src: estelar1,
        textoAlternativo:
          "Astronauta segurando um coração luminoso ao lado da constelação da jornada emocional e de indicadores de bem-estar do Estelar",
      },
      {
        src: estelar2,
        textoAlternativo:
          "Telas do Estelar para cuidado imediato, jornada emocional, registro de eventos e acompanhamento da missão",
      },
      {
        src: estelar3,
        textoAlternativo:
          "Telas do Estelar com radar de suporte, painel da missão e área de conexão com a Terra",
      },
    ],
    tags: ["React Native", "Expo Router", "TypeScript", "UX/UI", "Figma"],
    links: [
      {
        rotulo: "Repositório",
        url: "https://github.com/amimarinho/Estelar",
        tipo: "repositorio",
      },
      {
        rotulo: "Figma",
        url: "https://www.figma.com/proto/iE0wnaC0eO3JqJgl6DSydU/Global-Solutions-Space-Connect-Estelar?node-id=1018-1370&viewport=167%2C913%2C0.41&t=8e3fCfVlCn0Vi6yu-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1018%3A1370",
        tipo: "figma",
      },
    ],
  },
  {
    id: "sportsx",
    nome: "SportsX",
    descricaoCurta:
      "Plataforma web responsiva criada para dar visibilidade a esportes menos valorizados.",
    descricaoCompleta:
      "Criamos o SportsX no Enterprise Challenge da FIAP com Concentrix e Google para dar espaço a esportes pouco divulgados. Na vitrine web, a pessoa descobre modalidades, consulta perfis e usa a busca e o mapa para encontrar locais de prática.",
    contribuicao: [
      "Trabalhei em JavaScript e na documentação. Contribuí para o carrossel circular de depoimentos, que permite avançar e voltar sem chegar a um fim abrupto, e organizei a documentação técnica para facilitar a manutenção em equipe.",
      "Na revisão da versão web, contribuí com ajustes de navegação e busca. O SportsX foi selecionado para o NEXT FIAP 2025 e ficou em segundo lugar, conforme meu registro da participação.",
    ],
    colaboradores: colaboradorasProjetos,
    imagem: imagemSportsX,
    textoAlternativo:
      "Atleta praticando escalada ao lado de cards que apresentam diferentes modalidades esportivas",
    imagensModal: [
      {
        src: sportsx1,
        textoAlternativo:
          "Atleta praticando escalada ao lado de cards de corrida de trilha, asa-delta e escalada",
      },
      {
        src: sportsx2,
        textoAlternativo:
          "Telas do SportsX com modalidades esportivas, página inicial e perfil de praticante",
      },
      {
        src: sportsx3,
        textoAlternativo:
          "Telas do SportsX com detalhes de modalidade, área para patrocinadores e formulário de contato",
      },
    ],
    tags: ["UX/UI", "HTML", "CSS", "JavaScript", "Acessibilidade"],
    links: [
      {
        rotulo: "Site",
        url: "https://fiap-webdesign.github.io/enterprise-challenge-sportsx/",
        tipo: "site",
      },
      {
        rotulo: "Repositório",
        url: "https://github.com/fiap-webdesign/enterprise-challenge-sportsx",
        tipo: "repositorio",
      },
      {
        rotulo: "Figma",
        url: "https://www.figma.com/design/QtaMgmCtG6Y0UcIVD4mC70/Enterprise-Challenge?node-id=348-2&t=G8Y0sdoiVUFy7WKq-1",
        tipo: "figma",
      },
    ],
  },
  {
    id: "jardimental",
    nome: "Jardimental",
    descricaoCurta:
      "Estudo de caso UX/UI de um app para acompanhamento de hábitos de saúde mental.",
    descricaoCompleta:
      "Criei o Jardimental como estudo de caso de UX/UI para explorar como um diário pode incentivar hábitos de bem-estar. No protótipo, a pessoa registra o humor, consulta o histórico e ganha flores para um jardim virtual ao concluir hábitos.",
    contribuicao: [
      "Concebi o jardim como representação visual da rotina. Organizei a arquitetura do app no Figma e desenhei os fluxos que ligam o check-in diário, o resumo do humor e o jardim, para que a pessoa acompanhe a evolução de formas complementares.",
      "Desenvolvi a identidade botânica e prototipei telas de conteúdos de relaxamento e comunidade. O estudo de caso detalha como essas escolhas aparecem nas telas e como a recompensa visual se integra ao acompanhamento diário.",
    ],
    imagem: imagemJardimental,
    textoAlternativo:
      "Telas do aplicativo com registro de humor, jardim virtual florido e histórico emocional",
    imagensModal: [
      {
        src: jardimental1,
        textoAlternativo:
          "Telas do Jardimental com registro de humor, jardim virtual e histórico emocional",
      },
      {
        src: jardimental2,
        textoAlternativo:
          "Telas do Jardimental com evolução emocional, check-in diário e resumo do humor",
      },
      {
        src: jardimental3,
        textoAlternativo:
          "Telas do Jardimental com comunidade, jardim virtual e conteúdo de relaxamento",
      },
    ],
    tags: [
      "Pesquisa UX",
      "Figma",
      "Prototipagem",
      "Arquitetura da Informação",
      "Gamificação",
    ],
    links: [
      {
        rotulo: "Estudo de caso",
        url: "https://www.behance.net/gallery/186602883/Jardimental-Estudo-de-Caso-UXUI",
        tipo: "behance",
      },
      {
        rotulo: "Figma",
        url: "https://www.figma.com/design/ZrPQwEFRN4NBoRsO2I4aCa/JARDIMENTAL?node-id=89-116&t=jBzMcGUvaKzY9hy1-1",
        tipo: "figma",
      },
    ],
  },
  {
    id: "iara-games",
    nome: "Iara Games",
    descricaoCurta:
      "Projeto acadêmico focado em interfaces interativas, dados e acessibilidade.",
    descricaoCompleta:
      "A equipe criou a Iara Games como vitrine acadêmica para facilitar a descoberta de jogos brasileiros. A versão Web reúne catálogo, fichas com detalhes dos jogos e um cadastro demonstrativo validado no navegador com dados fictícios.",
    contribuicao: [
      "Trabalhei no front-end com foco na tipografia, nos estados de foco e na navegação por teclado. Também contribuí para o cadastro demonstrativo, com validação local e avisos sobre o uso de dados fictícios.",
      "Em um experimento separado, colaborei no protótipo de um fórum no Node-RED Dashboard, com listagem e busca de tópicos. A galeria reúne telas da vitrine e desse protótipo.",
    ],
    colaboradores: colaboradorasProjetos.filter(
      ({ nome }) => nome !== "Mirna Marinho",
    ),
    imagem: imagemIaraGames,
    textoAlternativo:
      "Personagem Iara sentada em uma floresta ao lado de capas de diferentes jogos",
    imagensModal: [
      {
        src: iara1,
        textoAlternativo:
          "Personagem Iara sentada na floresta ao lado de capas de jogos brasileiros",
      },
      {
        src: iara2,
        textoAlternativo:
          "Telas da Iara Games com página inicial, fórum e perfil da personagem",
      },
      {
        src: iara3,
        textoAlternativo:
          "Telas da Iara Games com detalhes de jogos, catálogo e página de compra",
      },
    ],
    tags: ["Front-end", "UX/UI", "JavaScript", "Bootstrap", "Node-RED"],
    links: [
      {
        rotulo: "Site",
        url: "https://guicunhasou.github.io/iara-games/index.html",
        tipo: "site",
      },
      {
        rotulo: "Repositório",
        url: "https://github.com/guicunhasou/iara-games",
        tipo: "repositorio",
      },
      {
        rotulo: "Figma",
        url: "https://www.figma.com/design/pMH6zTuYQDshExMhQQGLeK/Iara-Games?node-id=97-10&t=rxvJ9SQssHLTYwbs-1",
        tipo: "figma",
      },
    ],
  },
];
