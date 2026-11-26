import type { Projeto } from '../types/projeto';
import type { Idioma } from './tipos';

type TipoControle = 'tema' | 'idioma' | 'acessibilidade';
type TemaPreferido = 'claro' | 'escuro' | 'sistema';
type TemaAtivo = Exclude<TemaPreferido, 'sistema'>;

type TraducaoInterface = {
  metadados: {
    titulo: string;
    descricao: string;
    descricaoSocial: string;
    imagemSocialAlt: string;
    localeSocial: string;
  };
  geral: {
    abreNovaAba: string;
    linkEmBreve: string;
  };
  controles: {
    ariaGrupo: string;
    rotulos: Record<TipoControle, string>;
    temaAtivo: Record<TemaAtivo, string>;
    idiomaAtivo: string;
    fecharOpcoes: string;
    escolherTema: string;
    escolherIdioma: string;
    escolherAcessibilidade: string;
    preferenciasAcessibilidade: {
      reduzirMovimento: string;
      pausarAnimacoes: string;
      contrasteReforcado: string;
      destacarLinks: string;
    };
    temas: Record<TemaPreferido, string>;
  };
  perfil: {
    areas: [string, string];
    bioInicio: string;
    bioDepoisFiap: string;
    bioLinhas: [string, string, string];
    fotoAlt: string;
  };
  sociais: {
    ariaLista: string;
  };
  projetos: {
    tituloSecao: string;
    verDetalhes: string;
    fechar: string;
    colaboracaoCom: string;
    colaboracaoCurta: string;
    conjuncaoColaboradores: string;
    linkedinDe: string;
    imagensProjeto: string;
    conteudoProjeto: string;
    imagemAnterior: string;
    proximaImagem: string;
    posicaoImagem: string;
    previaAtualizacao: string;
    tecnologiasCompetencias: string;
    linksProjeto: string;
  };
  rodape: {
    feitoEm: string;
    ariaRepositorio: string;
    versaoAtual: string;
  };
};

export const traducoes: Record<Idioma, TraducaoInterface> = {
  pt: {
    metadados: {
      titulo: 'Guilherme Cunha | Portfólio',
      descricao:
        'Portfólio de Guilherme Cunha, formado em Web Design pela FIAP com foco em UX/UI, desenvolvimento web, React, React Native e Figma.',
      descricaoSocial:
        'Interfaces digitais e desenvolvimento web, com carinho em cada pixel.',
      imagemSocialAlt:
        'Portfólio de Guilherme Cunha, com apresentação pessoal e projetos selecionados',
      localeSocial: 'pt_BR',
    },
    geral: {
      abreNovaAba: 'abre em nova aba',
      linkEmBreve: 'link em breve',
    },
    controles: {
      ariaGrupo: 'Controles de experiência',
      rotulos: {
        tema: 'Tema',
        idioma: 'Idioma',
        acessibilidade: 'Acessibilidade',
      },
      temaAtivo: {
        claro: 'tema claro',
        escuro: 'tema escuro',
      },
      idiomaAtivo: 'idioma',
      fecharOpcoes: 'Fechar opções de',
      escolherTema: 'Escolha o tema do portfólio',
      escolherIdioma: 'Escolha o idioma do portfólio',
      escolherAcessibilidade: 'Preferências adicionais de acessibilidade',
      preferenciasAcessibilidade: {
        reduzirMovimento: 'Reduzir movimento',
        pausarAnimacoes: 'Pausar animações automáticas',
        contrasteReforcado: 'Reforçar contraste',
        destacarLinks: 'Destacar links',
      },
      temas: {
        claro: 'Claro',
        escuro: 'Escuro',
        sistema: 'Sistema',
      },
    },
    perfil: {
      areas: ['Desenvolvedor Front-end', 'Designer de Interfaces'],
      bioInicio: 'Formado em Web Design pela',
      bioDepoisFiap: ',',
      bioLinhas: [
        'transformo ideias em interfaces',
        'caprichadas, responsivas e acessíveis,',
        'com carinho em cada pixel.',
      ],
      fotoAlt: 'Retrato de Guilherme Cunha sorrindo',
    },
    sociais: {
      ariaLista: 'Links sociais',
    },
    projetos: {
      tituloSecao: 'Projetos selecionados',
      verDetalhes: 'Ver detalhes de',
      fechar: 'Fechar',
      colaboracaoCom: 'em colaboração com',
      colaboracaoCurta: 'Colaboração:',
      conjuncaoColaboradores: ' e ',
      linkedinDe: 'LinkedIn de',
      imagensProjeto: 'Imagens do projeto',
      conteudoProjeto: 'Conteúdo do projeto',
      imagemAnterior: 'Imagem anterior',
      proximaImagem: 'Próxima imagem',
      posicaoImagem: 'Imagem {atual} de {total}',
      previaAtualizacao: 'Prévia visual em atualização',
      tecnologiasCompetencias: 'Tecnologias e competências',
      linksProjeto: 'Links do projeto',
    },
    rodape: {
      feitoEm: 'Feito em Pernambuco',
      ariaRepositorio: 'Abrir o repositório do portfólio em uma nova aba',
      versaoAtual: 'Versão atual',
    },
  },
  en: {
    metadados: {
      titulo: 'Guilherme Cunha | Portfolio',
      descricao:
        'Portfolio of Guilherme Cunha, a Web Design graduate from FIAP focused on UX/UI, web development, React, React Native and Figma.',
      descricaoSocial:
        'Digital interfaces and web development, with care in every pixel.',
      imagemSocialAlt:
        'Guilherme Cunha portfolio, featuring a personal introduction and selected projects',
      localeSocial: 'en_US',
    },
    geral: {
      abreNovaAba: 'opens in a new tab',
      linkEmBreve: 'link coming soon',
    },
    controles: {
      ariaGrupo: 'Experience controls',
      rotulos: {
        tema: 'Theme',
        idioma: 'Language',
        acessibilidade: 'Accessibility',
      },
      temaAtivo: {
        claro: 'light theme',
        escuro: 'dark theme',
      },
      idiomaAtivo: 'language',
      fecharOpcoes: 'Close options for',
      escolherTema: 'Choose the portfolio theme',
      escolherIdioma: 'Choose the portfolio language',
      escolherAcessibilidade: 'Additional accessibility preferences',
      preferenciasAcessibilidade: {
        reduzirMovimento: 'Reduce motion',
        pausarAnimacoes: 'Pause automatic animations',
        contrasteReforcado: 'Increase contrast',
        destacarLinks: 'Highlight links',
      },
      temas: {
        claro: 'Light',
        escuro: 'Dark',
        sistema: 'System',
      },
    },
    perfil: {
      areas: ['Front-end Developer', 'Interface Designer'],
      bioInicio: 'Web Design graduate from',
      bioDepoisFiap: ',',
      bioLinhas: [
        'I turn ideas into polished, responsive',
        'and accessible interfaces,',
        'with care in every pixel.',
      ],
      fotoAlt: 'Portrait of Guilherme Cunha smiling',
    },
    sociais: {
      ariaLista: 'Social links',
    },
    projetos: {
      tituloSecao: 'Selected projects',
      verDetalhes: 'View details for',
      fechar: 'Close',
      colaboracaoCom: 'in collaboration with',
      colaboracaoCurta: 'Collaboration:',
      conjuncaoColaboradores: ' and ',
      linkedinDe: 'LinkedIn profile of',
      imagensProjeto: 'Images from project',
      conteudoProjeto: 'Project content',
      imagemAnterior: 'Previous image',
      proximaImagem: 'Next image',
      posicaoImagem: 'Image {atual} of {total}',
      previaAtualizacao: 'Visual preview being updated',
      tecnologiasCompetencias: 'Technologies and skills',
      linksProjeto: 'Project links',
    },
    rodape: {
      feitoEm: 'Made in Pernambuco',
      ariaRepositorio: 'Open the portfolio repository in a new tab',
      versaoAtual: 'Current version',
    },
  },
  es: {
    metadados: {
      titulo: 'Guilherme Cunha | Portafolio',
      descricao:
        'Portafolio de Guilherme Cunha, graduado en Web Design por FIAP, enfocado en UX/UI, desarrollo web, React, React Native y Figma.',
      descricaoSocial:
        'Interfaces digitales y desarrollo web, con cuidado en cada píxel.',
      imagemSocialAlt:
        'Portafolio de Guilherme Cunha, con presentación personal y proyectos seleccionados',
      localeSocial: 'es_ES',
    },
    geral: {
      abreNovaAba: 'se abre en una pestaña nueva',
      linkEmBreve: 'enlace próximamente',
    },
    controles: {
      ariaGrupo: 'Controles de experiencia',
      rotulos: {
        tema: 'Tema',
        idioma: 'Idioma',
        acessibilidade: 'Accesibilidad',
      },
      temaAtivo: {
        claro: 'tema claro',
        escuro: 'tema oscuro',
      },
      idiomaAtivo: 'idioma',
      fecharOpcoes: 'Cerrar opciones de',
      escolherTema: 'Elige el tema del portafolio',
      escolherIdioma: 'Elige el idioma del portafolio',
      escolherAcessibilidade: 'Preferencias adicionales de accesibilidad',
      preferenciasAcessibilidade: {
        reduzirMovimento: 'Reducir movimiento',
        pausarAnimacoes: 'Pausar animaciones automáticas',
        contrasteReforcado: 'Reforzar contraste',
        destacarLinks: 'Destacar enlaces',
      },
      temas: {
        claro: 'Claro',
        escuro: 'Oscuro',
        sistema: 'Sistema',
      },
    },
    perfil: {
      areas: ['Desarrollador Front-end', 'Diseñador de Interfaces'],
      bioInicio: 'Graduado en Web Design por',
      bioDepoisFiap: ',',
      bioLinhas: [
        'transformo ideas en interfaces cuidadas,',
        'responsivas y accesibles,',
        'con cariño en cada píxel.',
      ],
      fotoAlt: 'Retrato de Guilherme Cunha sonriendo',
    },
    sociais: {
      ariaLista: 'Enlaces sociales',
    },
    projetos: {
      tituloSecao: 'Proyectos seleccionados',
      verDetalhes: 'Ver detalles de',
      fechar: 'Cerrar',
      colaboracaoCom: 'en colaboración con',
      colaboracaoCurta: 'Colaboración:',
      conjuncaoColaboradores: ' y ',
      linkedinDe: 'LinkedIn de',
      imagensProjeto: 'Imágenes del proyecto',
      conteudoProjeto: 'Contenido del proyecto',
      imagemAnterior: 'Imagen anterior',
      proximaImagem: 'Imagen siguiente',
      posicaoImagem: 'Imagen {atual} de {total}',
      previaAtualizacao: 'Vista previa visual en actualización',
      tecnologiasCompetencias: 'Tecnologías y competencias',
      linksProjeto: 'Enlaces del proyecto',
    },
    rodape: {
      feitoEm: 'Hecho en Pernambuco',
      ariaRepositorio: 'Abrir el repositorio del portafolio en una pestaña nueva',
      versaoAtual: 'Versión actual',
    },
  },
  fr: {
    metadados: {
      titulo: 'Guilherme Cunha | Portfolio',
      descricao:
        'Portfolio de Guilherme Cunha, diplômé en Web Design de la FIAP, spécialisé en UX/UI, développement web, React, React Native et Figma.',
      descricaoSocial:
        'Interfaces numériques et développement web, avec soin dans chaque pixel.',
      imagemSocialAlt:
        'Portfolio de Guilherme Cunha, avec une présentation personnelle et des projets sélectionnés',
      localeSocial: 'fr_FR',
    },
    geral: {
      abreNovaAba: 's’ouvre dans un nouvel onglet',
      linkEmBreve: 'lien bientôt disponible',
    },
    controles: {
      ariaGrupo: 'Contrôles de l’expérience',
      rotulos: {
        tema: 'Thème',
        idioma: 'Langue',
        acessibilidade: 'Accessibilité',
      },
      temaAtivo: {
        claro: 'thème clair',
        escuro: 'thème sombre',
      },
      idiomaAtivo: 'langue',
      fecharOpcoes: 'Fermer les options de',
      escolherTema: 'Choisissez le thème du portfolio',
      escolherIdioma: 'Choisissez la langue du portfolio',
      escolherAcessibilidade: 'Préférences d’accessibilité supplémentaires',
      preferenciasAcessibilidade: {
        reduzirMovimento: 'Réduire les mouvements',
        pausarAnimacoes: 'Mettre en pause les animations',
        contrasteReforcado: 'Renforcer le contraste',
        destacarLinks: 'Mettre les liens en évidence',
      },
      temas: {
        claro: 'Clair',
        escuro: 'Sombre',
        sistema: 'Système',
      },
    },
    perfil: {
      areas: ['Développeur Front-end', 'Designer d’Interfaces'],
      bioInicio: 'Diplômé en Web Design de la',
      bioDepoisFiap: ',',
      bioLinhas: [
        'je transforme les idées en interfaces soignées,',
        'responsives et accessibles,',
        'avec soin dans chaque pixel.',
      ],
      fotoAlt: 'Portrait de Guilherme Cunha souriant',
    },
    sociais: {
      ariaLista: 'Liens sociaux',
    },
    projetos: {
      tituloSecao: 'Projets sélectionnés',
      verDetalhes: 'Voir les détails de',
      fechar: 'Fermer',
      colaboracaoCom: 'en collaboration avec',
      colaboracaoCurta: 'Collaboration\u00a0:',
      conjuncaoColaboradores: ' et ',
      linkedinDe: 'Profil LinkedIn de',
      imagensProjeto: 'Images du projet',
      conteudoProjeto: 'Contenu du projet',
      imagemAnterior: 'Image précédente',
      proximaImagem: 'Image suivante',
      posicaoImagem: 'Image {atual} sur {total}',
      previaAtualizacao: 'Aperçu visuel en cours de mise à jour',
      tecnologiasCompetencias: 'Technologies et compétences',
      linksProjeto: 'Liens du projet',
    },
    rodape: {
      feitoEm: 'Créé au Pernambuco',
      ariaRepositorio: 'Ouvrir le dépôt du portfolio dans un nouvel onglet',
      versaoAtual: 'Version actuelle',
    },
  },
  de: {
    metadados: {
      titulo: 'Guilherme Cunha | Portfolio',
      descricao:
        'Portfolio von Guilherme Cunha, Webdesign-Absolvent der FIAP mit Schwerpunkt auf UX/UI, Webentwicklung, React, React Native und Figma.',
      descricaoSocial:
        'Digitale Interfaces und Webentwicklung, mit Sorgfalt in jedem Pixel.',
      imagemSocialAlt:
        'Portfolio von Guilherme Cunha mit persönlicher Vorstellung und ausgewählten Projekten',
      localeSocial: 'de_DE',
    },
    geral: {
      abreNovaAba: 'öffnet sich in einem neuen Tab',
      linkEmBreve: 'Link folgt in Kürze',
    },
    controles: {
      ariaGrupo: 'Einstellungen für das Erlebnis',
      rotulos: {
        tema: 'Design',
        idioma: 'Sprache',
        acessibilidade: 'Barrierefrei',
      },
      temaAtivo: {
        claro: 'helles Design',
        escuro: 'dunkles Design',
      },
      idiomaAtivo: 'Sprache',
      fecharOpcoes: 'Optionen schließen:',
      escolherTema: 'Design des Portfolios auswählen',
      escolherIdioma: 'Sprache des Portfolios auswählen',
      escolherAcessibilidade: 'Zusätzliche Einstellungen zur Barrierefreiheit',
      preferenciasAcessibilidade: {
        reduzirMovimento: 'Bewegung reduzieren',
        pausarAnimacoes: 'Automatische Animationen pausieren',
        contrasteReforcado: 'Kontrast verstärken',
        destacarLinks: 'Links hervorheben',
      },
      temas: {
        claro: 'Hell',
        escuro: 'Dunkel',
        sistema: 'System',
      },
    },
    perfil: {
      areas: ['Frontend-Entwickler', 'Interface-Designer'],
      bioInicio: 'Ich habe einen Abschluss in Webdesign von der',
      bioDepoisFiap: '.',
      bioLinhas: [
        'Ich verwandle Ideen in sorgfältig gestaltete,',
        'responsive und barrierefreie Interfaces,',
        'mit Sorgfalt in jedem Pixel.',
      ],
      fotoAlt: 'Porträt von Guilherme Cunha lächelnd',
    },
    sociais: {
      ariaLista: 'Links zu sozialen Netzwerken',
    },
    projetos: {
      tituloSecao: 'Ausgewählte Projekte',
      verDetalhes: 'Details anzeigen für',
      fechar: 'Schließen',
      colaboracaoCom: 'in Zusammenarbeit mit',
      colaboracaoCurta: 'Mitwirkung:',
      conjuncaoColaboradores: ' und ',
      linkedinDe: 'LinkedIn-Profil von',
      imagensProjeto: 'Bilder des Projekts',
      conteudoProjeto: 'Projektinhalte',
      imagemAnterior: 'Vorheriges Bild',
      proximaImagem: 'Nächstes Bild',
      posicaoImagem: 'Bild {atual} von {total}',
      previaAtualizacao: 'Visuelle Vorschau wird aktualisiert',
      tecnologiasCompetencias: 'Technologien und Kompetenzen',
      linksProjeto: 'Projektlinks',
    },
    rodape: {
      feitoEm: 'Entstanden in Pernambuco',
      ariaRepositorio: 'Portfolio-Repository in einem neuen Tab öffnen',
      versaoAtual: 'Aktuelle Version',
    },
  },
};

type TraducaoProjeto = {
  descricaoCurta: string;
  descricaoCompleta: string;
  contribuicao: string[];
  textoAlternativo: string;
  textosAlternativosModal: string[];
  tags: string[];
  rotulosLinks: string[];
};

type IdiomaTraduzido = Exclude<Idioma, 'pt'>;

const traducoesProjetos: Record<
  IdiomaTraduzido,
  Record<string, TraducaoProjeto>
> = {
  en: {
    estelar: {
      descricaoCurta:
        'Mobile mental health and well-being app for astronauts on long-duration missions.',
      descricaoCompleta:
        'We created Estelar for FIAP’s 2026 Global Solution Space Connect. The mobile app proposes a routine for emotional care during long space missions. Astronauts log mood, energy, stress and sleep. Over time, those entries form a constellation that shows how their well-being has changed.',
      contribuicao: [
        'I helped develop the concept, visual identity and Figma prototype. In React Native and TypeScript, I helped refine the emotional check-in and constellation journey, and standardized components and feedback across screens.',
        'Our team brought together on-device logging, guided breathing and a support radar within the mission flow. The gallery shows how daily entries feed the journey and how the app provides access to immediate care.',
      ],
      textoAlternativo:
        'Astronaut holding a glowing heart beside emotional tracking interfaces and a colorful constellation',
      textosAlternativosModal: [
        'Astronaut holding a glowing heart beside the emotional journey constellation and Estelar well-being indicators',
        'Estelar screens for immediate care, emotional journey, event logging and mission tracking',
        'Estelar screens featuring the support radar, mission dashboard and Earth connection area',
      ],
      tags: ['React Native', 'Expo Router', 'TypeScript', 'UX/UI', 'Figma'],
      rotulosLinks: ['Repository', 'Figma'],
    },
    sportsx: {
      descricaoCurta:
        'Responsive web platform designed to bring visibility to overlooked sports.',
      descricaoCompleta:
        'We built SportsX for FIAP’s Enterprise Challenge with Concentrix and Google to give lesser-known sports more visibility. On the site, visitors can explore sports, browse profiles and use the search and map to find places to practice.',
      contribuicao: [
        'I worked on JavaScript and documentation. I contributed to the looping testimonial carousel, where visitors can move in either direction without hitting an abrupt end, and organized the technical documentation so the team could maintain the project.',
        'I also contributed navigation and search refinements in the web revision. SportsX was selected for NEXT FIAP 2025 and placed second, according to my record of our participation.',
      ],
      textoAlternativo:
        'Athlete rock climbing beside cards featuring different sports',
      textosAlternativosModal: [
        'Rock climber beside cards for trail running, hang gliding and climbing',
        'SportsX screens with sports categories, home page and athlete profile',
        'SportsX screens with sport details, sponsor area and contact form',
      ],
      tags: ['UX/UI', 'HTML', 'CSS', 'JavaScript', 'Accessibility'],
      rotulosLinks: ['Website', 'Repository', 'Figma'],
    },
    jardimental: {
      descricaoCurta:
        'UX/UI case study for an app that helps track mental health habits.',
      descricaoCompleta:
        'I created Jardimental as a UX/UI case study to explore how a journal could encourage well-being habits. In the prototype, people log their mood, review past entries and earn flowers for a virtual garden when they complete habits.',
      contribuicao: [
        'I designed the garden as a visual record of daily routines. In Figma, I organized the app’s information architecture and designed the flows linking the daily check-in, mood summary and garden so people can track progress in complementary ways.',
        'I developed the botanical identity and prototyped screens for relaxation content and community. The case study shows how those choices appear in the interface and how the visual reward fits into daily tracking.',
      ],
      textoAlternativo:
        'App screens featuring mood logging, a blooming virtual garden and emotional history',
      textosAlternativosModal: [
        'Jardimental screens with mood logging, virtual garden and emotional history',
        'Jardimental screens with emotional progress, daily check-in and mood summary',
        'Jardimental screens with community, virtual garden and relaxation content',
      ],
      tags: [
        'UX Research',
        'Figma',
        'Prototyping',
        'Information Architecture',
        'Gamification',
      ],
      rotulosLinks: ['Case study', 'Figma'],
    },
    'iara-games': {
      descricaoCurta:
        'Academic project focused on interactive interfaces, data and accessibility.',
      descricaoCompleta:
        'Our team created Iara Games as an academic showcase for discovering Brazilian games. The website includes a catalog, game detail pages and a sample sign-up form validated in the browser using fictional data.',
      contribuicao: [
        'I worked on the front end, focusing on typography, focus states and keyboard navigation. I also contributed to the sample sign-up, including local validation and notices about fictional data.',
        'In a separate experiment, I helped prototype a forum in Node-RED Dashboard that lists topics and lets users search them. The gallery includes screens from the showcase and the forum prototype.',
      ],
      textoAlternativo:
        'Iara character sitting in a forest beside covers from different games',
      textosAlternativosModal: [
        'Iara character sitting in the forest beside covers of Brazilian games',
        'Iara Games screens with home page, forum and character profile',
        'Iara Games screens with game details, catalog and purchase page',
      ],
      tags: ['Front-end', 'UX/UI', 'JavaScript', 'Bootstrap', 'Node-RED'],
      rotulosLinks: ['Website', 'Repository', 'Figma'],
    },
  },
  es: {
    estelar: {
      descricaoCurta:
        'App móvil de salud mental y bienestar para astronautas en misiones de larga duración.',
      descricaoCompleta:
        'Creamos Estelar para la Global Solution Space Connect 2026 de la FIAP. La aplicación móvil propone una rutina de cuidado emocional para astronautas en misiones largas. El registro recoge el estado de ánimo, la energía, el estrés y el sueño. Con el tiempo, las entradas forman una constelación que muestra la evolución del bienestar.',
      contribuicao: [
        'Participé en la concepción, la identidad visual y el prototipado en Figma. En React Native y TypeScript, contribuí a mejorar el registro emocional y el recorrido en forma de constelación, además de unificar componentes y mensajes de respuesta entre pantallas.',
        'El equipo reunió el registro local, la respiración guiada y un radar de apoyo en el flujo de la misión. La galería muestra cómo los registros diarios alimentan el recorrido y cómo se accede a recursos de cuidado inmediato.',
      ],
      textoAlternativo:
        'Astronauta sosteniendo un corazón luminoso junto a interfaces de seguimiento emocional y una constelación colorida',
      textosAlternativosModal: [
        'Astronauta sosteniendo un corazón luminoso junto a la constelación del recorrido emocional y los indicadores de bienestar de Estelar',
        'Pantallas de Estelar para cuidado inmediato, recorrido emocional, registro de eventos y seguimiento de la misión',
        'Pantallas de Estelar con radar de apoyo, panel de la misión y área de conexión con la Tierra',
      ],
      tags: ['React Native', 'Expo Router', 'TypeScript', 'UX/UI', 'Figma'],
      rotulosLinks: ['Repositorio', 'Figma'],
    },
    sportsx: {
      descricaoCurta:
        'Plataforma web responsiva creada para dar visibilidad a deportes menos valorados.',
      descricaoCompleta:
        'Creamos SportsX en el Enterprise Challenge de la FIAP con Concentrix y Google para dar visibilidad a deportes poco difundidos. En el sitio se pueden explorar modalidades, consultar perfiles y usar el buscador y el mapa para encontrar lugares de práctica.',
      contribuicao: [
        'Trabajé con JavaScript y en la documentación. Contribuí al carrusel circular de testimonios, que permite avanzar y retroceder de forma continua, y organicé la documentación técnica para facilitar el mantenimiento en equipo.',
        'También contribuí a mejorar la navegación y la búsqueda en la revisión del sitio. SportsX fue seleccionado para NEXT FIAP 2025 y obtuvo el segundo puesto, según mi registro de nuestra participación.',
      ],
      textoAlternativo:
        'Atleta practicando escalada junto a tarjetas que presentan distintas modalidades deportivas',
      textosAlternativosModal: [
        'Atleta practicando escalada junto a tarjetas de trail running, ala delta y escalada',
        'Pantallas de SportsX con modalidades deportivas, página inicial y perfil de deportista',
        'Pantallas de SportsX con detalles de modalidad, área para patrocinadores y formulario de contacto',
      ],
      tags: ['UX/UI', 'HTML', 'CSS', 'JavaScript', 'Accesibilidad'],
      rotulosLinks: ['Sitio web', 'Repositorio', 'Figma'],
    },
    jardimental: {
      descricaoCurta:
        'Caso de estudio UX/UI de una app para acompañar hábitos de salud mental.',
      descricaoCompleta:
        'Creé Jardimental como caso de estudio de UX/UI para explorar cómo un diario puede fomentar hábitos de bienestar. En el prototipo, las personas registran su estado de ánimo, consultan el historial y consiguen flores para un jardín virtual al completar hábitos.',
      contribuicao: [
        'Concebí el jardín como representación visual de la rutina. Organicé la arquitectura de la aplicación en Figma y diseñé los flujos que conectan el registro diario, el resumen del estado de ánimo y el jardín, para ofrecer distintas formas de seguir el progreso.',
        'Desarrollé la identidad botánica y prototipé pantallas de contenidos de relajación y comunidad. El caso de estudio muestra cómo estas decisiones se reflejan en la interfaz y cómo la recompensa visual se integra en el seguimiento diario.',
      ],
      textoAlternativo:
        'Pantallas de la aplicación con registro de ánimo, jardín virtual florecido e historial emocional',
      textosAlternativosModal: [
        'Pantallas de Jardimental con registro de ánimo, jardín virtual e historial emocional',
        'Pantallas de Jardimental con evolución emocional, check-in diario y resumen del ánimo',
        'Pantallas de Jardimental con comunidad, jardín virtual y contenido de relajación',
      ],
      tags: [
        'Investigación UX',
        'Figma',
        'Prototipado',
        'Arquitectura de la Información',
        'Gamificación',
      ],
      rotulosLinks: ['Caso de estudio', 'Figma'],
    },
    'iara-games': {
      descricaoCurta:
        'Proyecto académico enfocado en interfaces interactivas, datos y accesibilidad.',
      descricaoCompleta:
        'Creamos Iara Games como escaparate académico para facilitar el descubrimiento de videojuegos brasileños. El sitio web reúne un catálogo, fichas de juegos y un registro de demostración que se valida en el navegador con datos ficticios.',
      contribuicao: [
        'Trabajé en el front-end, con especial atención a la tipografía, los estados de foco y la navegación por teclado. También contribuí al registro de demostración mediante la validación local y los avisos sobre el uso de datos ficticios.',
        'En un experimento separado, colaboré en el prototipo de un foro en Node-RED Dashboard con listado y búsqueda de temas. La galería muestra pantallas del escaparate y del prototipo.',
      ],
      textoAlternativo:
        'Personaje Iara sentada en un bosque junto a portadas de distintos juegos',
      textosAlternativosModal: [
        'Personaje Iara sentada en el bosque junto a portadas de juegos brasileños',
        'Pantallas de Iara Games con página inicial, foro y perfil del personaje',
        'Pantallas de Iara Games con detalles de juegos, catálogo y página de compra',
      ],
      tags: ['Front-end', 'UX/UI', 'JavaScript', 'Bootstrap', 'Node-RED'],
      rotulosLinks: ['Sitio web', 'Repositorio', 'Figma'],
    },
  },
  fr: {
    estelar: {
      descricaoCurta:
        'Application mobile de santé mentale et de bien-être pour les astronautes en mission longue durée.',
      descricaoCompleta:
        'Nous avons créé Estelar pour la Global Solution Space Connect 2026 de la FIAP. L’application mobile propose aux astronautes une routine de bien-être émotionnel pendant les missions de longue durée. Ils consignent leur humeur, leur énergie, leur stress et leur sommeil. Au fil de la mission, ces entrées forment une constellation qui rend visible l’évolution de leur bien-être.',
      contribuicao: [
        'J’ai participé à la conception, à l’identité visuelle et au prototypage sur Figma. Avec React Native et TypeScript, j’ai contribué à affiner le bilan émotionnel et le parcours en constellation, ainsi qu’à harmoniser les composants et les messages entre les écrans.',
        'L’équipe a intégré la sauvegarde locale, la respiration guidée et un radar de soutien au parcours de mission. La galerie montre comment les entrées quotidiennes alimentent ce parcours et comment accéder aux ressources de soutien immédiat.',
      ],
      textoAlternativo:
        'Astronaute tenant un cœur lumineux près d’interfaces de suivi émotionnel et d’une constellation colorée',
      textosAlternativosModal: [
        'Astronaute tenant un cœur lumineux près de la constellation du parcours émotionnel et des indicateurs de bien-être d’Estelar',
        'Écrans d’Estelar consacrés aux soins immédiats, au parcours émotionnel, au journal des événements et au suivi de mission',
        'Écrans d’Estelar avec radar de soutien, tableau de bord de mission et espace de connexion avec la Terre',
      ],
      tags: ['React Native', 'Expo Router', 'TypeScript', 'UX/UI', 'Figma'],
      rotulosLinks: ['Dépôt', 'Figma'],
    },
    sportsx: {
      descricaoCurta:
        'Plateforme web responsive conçue pour donner de la visibilité aux sports moins médiatisés.',
      descricaoCompleta:
        'Nous avons créé SportsX dans le cadre de l’Enterprise Challenge de la FIAP, avec Concentrix et Google, pour donner de la visibilité aux sports peu médiatisés. Le site permet de découvrir des disciplines, de consulter des profils et de trouver des lieux de pratique grâce à la recherche et à la carte.',
      contribuicao: [
        'J’ai travaillé sur le JavaScript et la documentation. J’ai contribué au carrousel de témoignages, qui défile en boucle dans les deux sens, et organisé la documentation technique pour faciliter la maintenance en équipe.',
        'J’ai aussi contribué à améliorer la navigation et la recherche lors de la révision du site. SportsX a été sélectionné pour le NEXT FIAP 2025 et y a obtenu la deuxième place, d’après mes notes sur notre participation.',
      ],
      textoAlternativo:
        'Athlète pratiquant l’escalade près de cartes présentant différentes disciplines sportives',
      textosAlternativosModal: [
        'Athlète pratiquant l’escalade près de cartes de trail, deltaplane et escalade',
        'Écrans de SportsX avec disciplines sportives, page d’accueil et profil de pratiquant',
        'Écrans de SportsX avec détails d’une discipline, espace sponsors et formulaire de contact',
      ],
      tags: ['UX/UI', 'HTML', 'CSS', 'JavaScript', 'Accessibilité'],
      rotulosLinks: ['Site', 'Dépôt', 'Figma'],
    },
    jardimental: {
      descricaoCurta:
        'Étude de cas UX/UI d’une application de suivi des habitudes de santé mentale.',
      descricaoCompleta:
        'J’ai créé Jardimental comme étude de cas UX/UI pour explorer comment un journal peut encourager des habitudes de bien-être. Le prototype permet de noter son humeur, de consulter son historique et de gagner des fleurs pour un jardin virtuel en accomplissant ses habitudes.',
      contribuicao: [
        'J’ai pensé le jardin comme une représentation visuelle de la routine. Sur Figma, j’ai organisé l’architecture de l’application et conçu les parcours qui relient le bilan quotidien, le résumé de l’humeur et le jardin, afin de proposer plusieurs façons de suivre ses progrès.',
        'J’ai développé l’identité botanique et prototypé les écrans de relaxation et de communauté. L’étude de cas montre comment ces choix se traduisent à l’écran et comment la récompense visuelle s’inscrit dans le suivi quotidien.',
      ],
      textoAlternativo:
        'Écrans de l’application avec suivi de l’humeur, jardin virtuel fleuri et historique émotionnel',
      textosAlternativosModal: [
        'Écrans de Jardimental avec suivi de l’humeur, jardin virtuel et historique émotionnel',
        'Écrans de Jardimental avec progression émotionnelle, check-in quotidien et résumé de l’humeur',
        'Écrans de Jardimental avec communauté, jardin virtuel et contenus de relaxation',
      ],
      tags: [
        'Recherche UX',
        'Figma',
        'Prototypage',
        'Architecture de l’information',
        'Gamification',
      ],
      rotulosLinks: ['Étude de cas', 'Figma'],
    },
    'iara-games': {
      descricaoCurta:
        'Projet universitaire axé sur les interfaces interactives, les données et l’accessibilité.',
      descricaoCompleta:
        'Notre équipe a créé Iara Games comme vitrine universitaire pour faciliter la découverte de jeux brésiliens. Le site réunit un catalogue, des fiches de jeux et un formulaire d’inscription de démonstration validé dans le navigateur avec des données fictives.',
      contribuicao: [
        'J’ai travaillé sur le front-end, notamment sur la typographie, les indicateurs de focus et la navigation au clavier. J’ai aussi contribué au formulaire de démonstration, avec la validation locale et les indications sur les données fictives.',
        'Dans un projet expérimental séparé, j’ai participé au prototype d’un forum dans Node-RED Dashboard, avec liste et recherche de sujets. La galerie présente des écrans de la vitrine et du prototype.',
      ],
      textoAlternativo:
        'Personnage Iara assis dans une forêt près de jaquettes de différents jeux',
      textosAlternativosModal: [
        'Personnage Iara assis dans la forêt près de jaquettes de jeux brésiliens',
        'Écrans d’Iara Games avec page d’accueil, forum et profil du personnage',
        'Écrans d’Iara Games avec détails des jeux, catalogue et page d’achat',
      ],
      tags: ['Front-end', 'UX/UI', 'JavaScript', 'Bootstrap', 'Node-RED'],
      rotulosLinks: ['Site', 'Dépôt', 'Figma'],
    },
  },
  de: {
    estelar: {
      descricaoCurta:
        'Mobile App für mentale Gesundheit und Wohlbefinden von Astronauten auf Langzeitmissionen.',
      descricaoCompleta:
        'Wir haben Estelar für die Global Solution Space Connect 2026 der FIAP entwickelt. Die mobile App schlägt eine Routine für das emotionale Wohlbefinden auf langen Raumfahrtmissionen vor. Astronauten erfassen Stimmung, Energie, Stress und Schlaf. Im Laufe der Mission bilden die Einträge ein Sternbild, das die Entwicklung ihres Wohlbefindens zeigt.',
      contribuicao: [
        'Ich wirkte an der Konzeption, der visuellen Identität und dem Figma-Prototyp mit. Mit React Native und TypeScript half ich, den emotionalen Check-in und den Verlauf als Sternbild weiterzuentwickeln und Komponenten sowie Rückmeldungen zu vereinheitlichen.',
        'Das Team verband lokale Einträge, geführte Atemübungen und ein Unterstützungsradar mit dem Missionsablauf. Die Galerie zeigt, wie tägliche Einträge den Verlauf ergänzen und wie man auf Angebote zur unmittelbaren Unterstützung zugreift.',
      ],
      textoAlternativo:
        'Astronaut mit leuchtendem Herzen neben Interfaces zur emotionalen Begleitung und einer farbigen Konstellation',
      textosAlternativosModal: [
        'Astronaut mit leuchtendem Herzen neben der Konstellation der emotionalen Reise und den Wohlbefindensindikatoren von Estelar',
        'Estelar-Bildschirme für Soforthilfe, emotionale Reise, Ereignisprotokoll und Missionsbegleitung',
        'Estelar-Bildschirme mit Unterstützungsradar, Missionsübersicht und Bereich zur Verbindung mit der Erde',
      ],
      tags: ['React Native', 'Expo Router', 'TypeScript', 'UX/UI', 'Figma'],
      rotulosLinks: ['Repository', 'Figma'],
    },
    sportsx: {
      descricaoCurta:
        'Responsive Webplattform, die weniger beachteten Sportarten mehr Sichtbarkeit gibt.',
      descricaoCompleta:
        'Wir entwickelten SportsX im Enterprise Challenge der FIAP mit Concentrix und Google, um wenig beachteten Sportarten mehr Sichtbarkeit zu geben. Auf der Website kann man Sportarten entdecken, Profile ansehen und mit Suche und Karte Orte zum Trainieren finden.',
      contribuicao: [
        'Ich arbeitete an JavaScript und der Dokumentation. Ich half beim Karussell für Erfahrungsberichte, das sich in beide Richtungen endlos durchblättern lässt, und strukturierte die technische Dokumentation für die gemeinsame Pflege.',
        'Bei der Überarbeitung der Website trug ich auch zu Verbesserungen an Navigation und Suche bei. SportsX wurde für die NEXT FIAP 2025 ausgewählt und erreichte laut meinen Aufzeichnungen zur Teilnahme den zweiten Platz.',
      ],
      textoAlternativo:
        'Kletternder Athlet neben Karten mit verschiedenen Sportarten',
      textosAlternativosModal: [
        'Kletternder Athlet neben Karten zu Trailrunning, Drachenfliegen und Klettern',
        'SportsX-Bildschirme mit Sportarten, Startseite und Profil eines Sportlers',
        'SportsX-Bildschirme mit Sportdetails, Sponsorenbereich und Kontaktformular',
      ],
      tags: ['UX/UI', 'HTML', 'CSS', 'JavaScript', 'Barrierefreiheit'],
      rotulosLinks: ['Website', 'Repository', 'Figma'],
    },
    jardimental: {
      descricaoCurta:
        'UX/UI-Fallstudie zu einer App für die Begleitung von Gewohnheiten rund um mentale Gesundheit.',
      descricaoCompleta:
        'Ich entwickelte Jardimental als UX/UI-Fallstudie, um zu erkunden, wie ein Tagebuch Gewohnheiten für das eigene Wohlbefinden fördern kann. Im Prototyp halten Nutzer ihre Stimmung fest, sehen frühere Einträge ein und erhalten Blumen für einen virtuellen Garten, wenn sie Gewohnheiten umsetzen.',
      contribuicao: [
        'Ich konzipierte den Garten als visuelle Darstellung der Routine. In Figma strukturierte ich die App und entwarf Abläufe, die den täglichen Check-in, die Stimmungsübersicht und den Garten verbinden. So lässt sich die Entwicklung auf verschiedene Arten verfolgen.',
        'Ich entwickelte die botanische Gestaltung und entwarf Prototypen für Entspannungsinhalte und den Community-Bereich. Die Fallstudie zeigt, wie diese Entscheidungen in der Oberfläche sichtbar werden und wie die Belohnung in den Alltag eingebunden ist.',
      ],
      textoAlternativo:
        'App-Bildschirme mit Stimmungserfassung, blühendem virtuellem Garten und emotionalem Verlauf',
      textosAlternativosModal: [
        'Jardimental-Bildschirme mit Stimmungserfassung, virtuellem Garten und emotionalem Verlauf',
        'Jardimental-Bildschirme mit emotionaler Entwicklung, täglichem Check-in und Stimmungsübersicht',
        'Jardimental-Bildschirme mit Community, virtuellem Garten und Entspannungsinhalten',
      ],
      tags: [
        'UX Research',
        'Figma',
        'Prototyping',
        'Informationsarchitektur',
        'Gamification',
      ],
      rotulosLinks: ['Fallstudie', 'Figma'],
    },
    'iara-games': {
      descricaoCurta:
        'Akademisches Projekt mit Fokus auf interaktive Interfaces, Daten und Barrierefreiheit.',
      descricaoCompleta:
        'Unser Team entwickelte Iara Games als Hochschulprojekt, um brasilianische Spiele leichter auffindbar zu machen. Die Website bietet einen Katalog, Detailseiten und ein Anmeldeformular, das im Browser mit fiktiven Daten getestet werden kann.',
      contribuicao: [
        'Ich arbeitete am Frontend, insbesondere an Typografie, Fokusmarkierungen und Tastaturnavigation. Außerdem wirkte ich am Demo-Formular mit, das Eingaben lokal prüft und auf die Verwendung fiktiver Daten hinweist.',
        'In einem separaten Experiment arbeitete ich an einem Forumsprototyp in Node-RED Dashboard mit Themenliste und Suche mit. Die Galerie zeigt Ansichten der Website und des Prototyps.',
      ],
      textoAlternativo:
        'Figur Iara sitzt in einem Wald neben Covern verschiedener Spiele',
      textosAlternativosModal: [
        'Figur Iara sitzt im Wald neben Covern brasilianischer Spiele',
        'Iara-Games-Bildschirme mit Startseite, Forum und Profil der Figur',
        'Iara-Games-Bildschirme mit Spieldetails, Katalog und Kaufseite',
      ],
      tags: ['Front-end', 'UX/UI', 'JavaScript', 'Bootstrap', 'Node-RED'],
      rotulosLinks: ['Website', 'Repository', 'Figma'],
    },
  },
};

export function traduzirProjeto(projeto: Projeto, idioma: Idioma): Projeto {
  if (idioma === 'pt') {
    return projeto;
  }

  const traducao = traducoesProjetos[idioma][projeto.id];

  if (!traducao) {
    return projeto;
  }

  return {
    ...projeto,
    descricaoCurta: traducao.descricaoCurta,
    descricaoCompleta: traducao.descricaoCompleta,
    contribuicao: traducao.contribuicao,
    textoAlternativo: traducao.textoAlternativo,
    imagensModal: projeto.imagensModal?.map((imagem, indice) => ({
      ...imagem,
      textoAlternativo:
        traducao.textosAlternativosModal[indice] ?? imagem.textoAlternativo,
    })),
    tags: traducao.tags,
    links: projeto.links.map((link, indice) => ({
      ...link,
      rotulo: traducao.rotulosLinks[indice] ?? link.rotulo,
    })),
  };
}
