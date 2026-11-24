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
    conjuncaoColaboradores: string;
    linkedinDe: string;
    imagensProjeto: string;
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
      conjuncaoColaboradores: ' e ',
      linkedinDe: 'LinkedIn de',
      imagensProjeto: 'Imagens do projeto',
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
      conjuncaoColaboradores: ' and ',
      linkedinDe: 'LinkedIn profile of',
      imagensProjeto: 'Images from project',
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
      conjuncaoColaboradores: ' y ',
      linkedinDe: 'LinkedIn de',
      imagensProjeto: 'Imágenes del proyecto',
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
      conjuncaoColaboradores: ' et ',
      linkedinDe: 'Profil LinkedIn de',
      imagensProjeto: 'Images du projet',
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
      conjuncaoColaboradores: ' und ',
      linkedinDe: 'LinkedIn-Profil von',
      imagensProjeto: 'Bilder des Projekts',
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
        'Mobile app developed as a team for FIAP Global Solution 2026, focused on the well-being of astronauts on long-duration missions. I took part in the concept development, visual identity and prototyping in Figma. Working with React Native and TypeScript, I contributed to improving the emotional check-in and interactive journey, and to standardizing reusable components and feedback.',
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
        'Web platform developed as a team to increase the visibility of lesser-known sports. I took part in development with a focus on JavaScript and documentation, contributing to the implementation of the testimonial carousel with circular navigation and to the organization of the project’s technical documentation. SportsX was selected for FIAP NEXT 2025, where it took 2nd place.',
      textoAlternativo:
        'Athlete rock climbing beside cards featuring different sports',
      textosAlternativosModal: [
        'Rock climber beside cards for trail running, hang gliding and climbing',
        'SportsX screens with sports categories, home page and athlete profile',
        'SportsX screens with sport details, sponsor area and contact form',
      ],
      tags: ['UX/UI', 'HTML', 'CSS', 'JavaScript', 'Accessibility'],
      rotulosLinks: ['Live page', 'Repository', 'Figma'],
    },
    jardimental: {
      descricaoCurta:
        'UX/UI case study for an app that helps track mental health habits.',
      descricaoCompleta:
        'UX/UI case study and prototype for tracking mental health habits. Completing habits earns flowers for a virtual garden, making progress visible through visual rewards.',
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
        'Academic project developed as a team to promote Brazilian games and make them easier to discover. I took part in front-end development, contributing to improvements in accessibility, keyboard navigation and typography. I also collaborated on prototyping a forum in Node-RED Dashboard, with topic listing and search features.',
      textoAlternativo:
        'Iara character sitting in a forest beside covers from different games',
      textosAlternativosModal: [
        'Iara character sitting in the forest beside covers of Brazilian games',
        'Iara Games screens with home page, forum and character profile',
        'Iara Games screens with game details, catalog and purchase page',
      ],
      tags: ['Front-end', 'UX/UI', 'JavaScript', 'Bootstrap', 'Node-RED'],
      rotulosLinks: ['Live page', 'Repository', 'Figma'],
    },
  },
  es: {
    estelar: {
      descricaoCurta:
        'App móvil de salud mental y bienestar para astronautas en misiones de larga duración.',
      descricaoCompleta:
        'Aplicación móvil desarrollada en equipo para la Global Solution FIAP 2026, orientada al bienestar de astronautas en misiones prolongadas. Participé en la concepción, la identidad visual y el prototipado en Figma. En el desarrollo con React Native y TypeScript, contribuí a mejorar el registro emocional y el recorrido interactivo, así como a estandarizar componentes reutilizables y mensajes de respuesta.',
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
        'Plataforma web desarrollada en equipo para ampliar la visibilidad de deportes poco difundidos. Participé en el desarrollo con un enfoque en JavaScript y documentación, contribuyendo a la implementación del carrusel de testimonios con navegación circular y a la organización de la documentación técnica del proyecto. SportsX fue seleccionado para FIAP NEXT 2025, donde obtuvo el 2.º puesto.',
      textoAlternativo:
        'Atleta practicando escalada junto a tarjetas que presentan distintas modalidades deportivas',
      textosAlternativosModal: [
        'Atleta practicando escalada junto a tarjetas de trail running, ala delta y escalada',
        'Pantallas de SportsX con modalidades deportivas, página inicial y perfil de deportista',
        'Pantallas de SportsX con detalles de modalidad, área para patrocinadores y formulario de contacto',
      ],
      tags: ['UX/UI', 'HTML', 'CSS', 'JavaScript', 'Accesibilidad'],
      rotulosLinks: ['Página publicada', 'Repositorio', 'Figma'],
    },
    jardimental: {
      descricaoCurta:
        'Caso de estudio UX/UI de una app para acompañar hábitos de salud mental.',
      descricaoCompleta:
        'Estudio de caso de UX/UI y prototipo para el seguimiento de hábitos de salud mental. Al completar hábitos, se obtienen flores para un jardín virtual que permite visualizar el progreso.',
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
        'Proyecto académico desarrollado en equipo para poner en valor y facilitar el descubrimiento de juegos brasileños. Participé en el desarrollo front-end, contribuyendo a mejoras de accesibilidad, navegación por teclado y tipografía. También colaboré en el prototipado de un foro en Node-RED Dashboard, con funcionalidades de listado y búsqueda de temas.',
      textoAlternativo:
        'Personaje Iara sentada en un bosque junto a portadas de distintos juegos',
      textosAlternativosModal: [
        'Personaje Iara sentada en el bosque junto a portadas de juegos brasileños',
        'Pantallas de Iara Games con página inicial, foro y perfil del personaje',
        'Pantallas de Iara Games con detalles de juegos, catálogo y página de compra',
      ],
      tags: ['Front-end', 'UX/UI', 'JavaScript', 'Bootstrap', 'Node-RED'],
      rotulosLinks: ['Página publicada', 'Repositorio', 'Figma'],
    },
  },
  fr: {
    estelar: {
      descricaoCurta:
        'Application mobile de santé mentale et de bien-être pour les astronautes en mission longue durée.',
      descricaoCompleta:
        'Application mobile développée en équipe pour la Global Solution FIAP 2026, consacrée au bien-être des astronautes en mission de longue durée. J’ai participé à la conception, à l’identité visuelle et au prototypage sur Figma. Dans le développement avec React Native et TypeScript, j’ai contribué à améliorer le bilan émotionnel et le parcours interactif, ainsi qu’à harmoniser les composants réutilisables et les messages de retour.',
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
        'Plateforme web développée en équipe pour accroître la visibilité des sports peu médiatisés. J’ai participé au développement en me concentrant sur JavaScript et la documentation, en contribuant à l’implémentation du carrousel de témoignages avec navigation circulaire et à l’organisation de la documentation technique du projet. SportsX a été sélectionné pour le FIAP NEXT 2025, où il a obtenu la 2e place.',
      textoAlternativo:
        'Athlète pratiquant l’escalade près de cartes présentant différentes disciplines sportives',
      textosAlternativosModal: [
        'Athlète pratiquant l’escalade près de cartes de trail, deltaplane et escalade',
        'Écrans de SportsX avec disciplines sportives, page d’accueil et profil de pratiquant',
        'Écrans de SportsX avec détails d’une discipline, espace sponsors et formulaire de contact',
      ],
      tags: ['UX/UI', 'HTML', 'CSS', 'JavaScript', 'Accessibilité'],
      rotulosLinks: ['Page en ligne', 'Dépôt', 'Figma'],
    },
    jardimental: {
      descricaoCurta:
        'Étude de cas UX/UI d’une application de suivi des habitudes de santé mentale.',
      descricaoCompleta:
        'Étude de cas UX/UI et prototype de suivi des habitudes liées à la santé mentale. Les habitudes accomplies rapportent des fleurs pour un jardin virtuel, ce qui permet de visualiser les progrès.',
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
        'Projet universitaire développé en équipe pour valoriser les jeux brésiliens et faciliter leur découverte. J’ai participé au développement front-end, en contribuant à améliorer l’accessibilité, la navigation au clavier et la typographie. J’ai également collaboré au prototypage d’un forum dans Node-RED Dashboard, avec des fonctionnalités de liste et de recherche de sujets.',
      textoAlternativo:
        'Personnage Iara assis dans une forêt près de jaquettes de différents jeux',
      textosAlternativosModal: [
        'Personnage Iara assis dans la forêt près de jaquettes de jeux brésiliens',
        'Écrans d’Iara Games avec page d’accueil, forum et profil du personnage',
        'Écrans d’Iara Games avec détails des jeux, catalogue et page d’achat',
      ],
      tags: ['Front-end', 'UX/UI', 'JavaScript', 'Bootstrap', 'Node-RED'],
      rotulosLinks: ['Page en ligne', 'Dépôt', 'Figma'],
    },
  },
  de: {
    estelar: {
      descricaoCurta:
        'Mobile App für mentale Gesundheit und Wohlbefinden von Astronauten auf Langzeitmissionen.',
      descricaoCompleta:
        'Mobile App, die im Team für die FIAP Global Solution 2026 entwickelt wurde und auf das Wohlbefinden von Astronauten auf Langzeitmissionen ausgerichtet ist. Ich beteiligte mich an der Konzeption, der visuellen Identität und dem Prototyping in Figma. Bei der Entwicklung mit React Native und TypeScript trug ich zur Verbesserung des emotionalen Check-ins und der interaktiven Reise sowie zur Vereinheitlichung wiederverwendbarer Komponenten und Rückmeldungen bei.',
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
        'Webplattform, die im Team entwickelt wurde, um wenig beachteten Sportarten mehr Sichtbarkeit zu geben. Ich beteiligte mich an der Entwicklung mit Schwerpunkt auf JavaScript und Dokumentation und trug zur Implementierung des Karussells für Erfahrungsberichte mit zyklischer Navigation sowie zur Strukturierung der technischen Projektdokumentation bei. SportsX wurde für die FIAP NEXT 2025 ausgewählt und belegte dort den 2. Platz.',
      textoAlternativo:
        'Kletternder Athlet neben Karten mit verschiedenen Sportarten',
      textosAlternativosModal: [
        'Kletternder Athlet neben Karten zu Trailrunning, Drachenfliegen und Klettern',
        'SportsX-Bildschirme mit Sportarten, Startseite und Profil eines Sportlers',
        'SportsX-Bildschirme mit Sportdetails, Sponsorenbereich und Kontaktformular',
      ],
      tags: ['UX/UI', 'HTML', 'CSS', 'JavaScript', 'Barrierefreiheit'],
      rotulosLinks: ['Veröffentlichte Seite', 'Repository', 'Figma'],
    },
    jardimental: {
      descricaoCurta:
        'UX/UI-Fallstudie zu einer App für die Begleitung von Gewohnheiten rund um mentale Gesundheit.',
      descricaoCompleta:
        'UX/UI-Fallstudie und Prototyp zur Begleitung von Gewohnheiten rund um die mentale Gesundheit. Wer Gewohnheiten erfüllt, erhält Blumen für einen virtuellen Garten und kann so seine Fortschritte sehen.',
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
        'Akademisches Projekt, das im Team entwickelt wurde, um brasilianische Spiele zu würdigen und ihre Entdeckung zu erleichtern. Ich beteiligte mich an der Frontend-Entwicklung und trug zu Verbesserungen der Barrierefreiheit, der Tastaturnavigation und der Typografie bei. Außerdem wirkte ich am Prototyp eines Forums in Node-RED Dashboard mit, das Funktionen zum Auflisten und Suchen von Themen bietet.',
      textoAlternativo:
        'Figur Iara sitzt in einem Wald neben Covern verschiedener Spiele',
      textosAlternativosModal: [
        'Figur Iara sitzt im Wald neben Covern brasilianischer Spiele',
        'Iara-Games-Bildschirme mit Startseite, Forum und Profil der Figur',
        'Iara-Games-Bildschirme mit Spieldetails, Katalog und Kaufseite',
      ],
      tags: ['Front-end', 'UX/UI', 'JavaScript', 'Bootstrap', 'Node-RED'],
      rotulosLinks: ['Veröffentlichte Seite', 'Repository', 'Figma'],
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
