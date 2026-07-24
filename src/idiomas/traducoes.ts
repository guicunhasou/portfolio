import type { Projeto } from '../types/projeto';
import type { Idioma } from './tipos';

type TipoControle = 'musica' | 'tema' | 'idioma' | 'acessibilidade';
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
    emBreve: string;
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
    detalhesProjeto: string;
    colaboracaoCom: string;
    conjuncaoColaboradores: string;
    linkedinDe: string;
    imagensProjeto: string;
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
        'Portfólio de Guilherme Cunha, estudante de Web Design na FIAP com foco em UX/UI, desenvolvimento web, React, React Native e Figma.',
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
        musica: 'Música',
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
      emBreve: 'Em breve',
    },
    perfil: {
      areas: ['Desenvolvedor Front-end', 'Designer de Interfaces'],
      bioInicio: 'Estudante de Web Design na',
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
      detalhesProjeto: 'Detalhes do projeto',
      colaboracaoCom: 'Em colaboração com',
      conjuncaoColaboradores: ' e ',
      linkedinDe: 'LinkedIn de',
      imagensProjeto: 'Imagens do projeto',
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
        'Portfolio of Guilherme Cunha, a Web Design student at FIAP focused on UX/UI, web development, React, React Native and Figma.',
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
        musica: 'Music',
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
      emBreve: 'Coming soon',
    },
    perfil: {
      areas: ['Front-end Developer', 'Interface Designer'],
      bioInicio: 'Web Design student at',
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
      detalhesProjeto: 'Project details',
      colaboracaoCom: 'In collaboration with',
      conjuncaoColaboradores: ' and ',
      linkedinDe: 'LinkedIn profile of',
      imagensProjeto: 'Images from project',
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
        'Portafolio de Guilherme Cunha, estudiante de Web Design en FIAP, enfocado en UX/UI, desarrollo web, React, React Native y Figma.',
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
        musica: 'Música',
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
      emBreve: 'Próximamente',
    },
    perfil: {
      areas: ['Desarrollador Front-end', 'Diseñador de Interfaces'],
      bioInicio: 'Estudiante de Web Design en',
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
      detalhesProjeto: 'Detalles del proyecto',
      colaboracaoCom: 'En colaboración con',
      conjuncaoColaboradores: ' y ',
      linkedinDe: 'LinkedIn de',
      imagensProjeto: 'Imágenes del proyecto',
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
        'Portfolio de Guilherme Cunha, étudiant en Web Design à la FIAP, spécialisé en UX/UI, développement web, React, React Native et Figma.',
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
        musica: 'Musique',
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
      emBreve: 'Bientôt disponible',
    },
    perfil: {
      areas: ['Développeur Front-end', 'Designer d’Interfaces'],
      bioInicio: 'Étudiant en Web Design à la',
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
      detalhesProjeto: 'Détails du projet',
      colaboracaoCom: 'En collaboration avec',
      conjuncaoColaboradores: ' et ',
      linkedinDe: 'Profil LinkedIn de',
      imagensProjeto: 'Images du projet',
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
        'Portfolio von Guilherme Cunha, Webdesign-Student an der FIAP mit Schwerpunkt auf UX/UI, Webentwicklung, React, React Native und Figma.',
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
        musica: 'Musik',
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
      emBreve: 'Demnächst',
    },
    perfil: {
      areas: ['Frontend-Entwickler', 'Interface-Designer'],
      bioInicio: 'Webdesign-Student an der',
      bioDepoisFiap: ',',
      bioLinhas: [
        'ich verwandle Ideen in sorgfältig gestaltete,',
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
      detalhesProjeto: 'Projektdetails',
      colaboracaoCom: 'In Zusammenarbeit mit',
      conjuncaoColaboradores: ' und ',
      linkedinDe: 'LinkedIn-Profil von',
      imagensProjeto: 'Bilder des Projekts',
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
        'Functional project developed for FIAP Global Solution 2026, focused on mental health in space, mobile experience, emotional support and an original visual identity.',
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
        'Academic team project created to increase the visibility of overlooked sports through a responsive and accessible web experience. The project was selected for FIAP NEXT 2025.',
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
        'UX/UI case study for a gamified app focused on tracking mental health habits, with an emphasis on prototyping and product storytelling.',
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
        'Educational project combining interactive interfaces, prototyping and data visualization in an experience built with web technologies and Node-RED.',
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
        'Proyecto funcional desarrollado para la Global Solution FIAP 2026, enfocado en salud mental en el espacio, experiencia móvil, acompañamiento emocional y una identidad visual propia.',
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
        'Proyecto académico desarrollado en equipo para ampliar la visibilidad de deportes menos valorados mediante una experiencia web responsiva y accesible. El proyecto fue seleccionado para FIAP NEXT 2025.',
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
        'Caso de estudio de UX/UI para una aplicación gamificada enfocada en el seguimiento de hábitos de salud mental, con énfasis en prototipado y narrativa de producto.',
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
        'Proyecto educativo que reúne interfaces interactivas, prototipado y visualización de datos en una experiencia construida con tecnologías web y Node-RED.',
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
        'Projet fonctionnel développé pour la Global Solution FIAP 2026, axé sur la santé mentale dans l’espace, l’expérience mobile, l’accompagnement émotionnel et une identité visuelle originale.',
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
        'Projet universitaire réalisé en équipe pour accroître la visibilité des sports moins médiatisés grâce à une expérience web responsive et accessible. Le projet a été sélectionné pour le FIAP NEXT 2025.',
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
        'Étude de cas UX/UI pour une application gamifiée dédiée au suivi des habitudes de santé mentale, avec un accent sur le prototypage et la narration produit.',
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
        'Projet pédagogique réunissant interfaces interactives, prototypage et visualisation de données dans une expérience créée avec des technologies web et Node-RED.',
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
        'Funktionsfähiges Projekt für die FIAP Global Solution 2026 mit Fokus auf mentale Gesundheit im All, mobile Nutzererfahrung, emotionale Begleitung und eine eigenständige visuelle Identität.',
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
        'Akademisches Teamprojekt, das weniger beachteten Sportarten durch eine responsive und barrierefreie Web-Erfahrung mehr Sichtbarkeit verschafft. Das Projekt wurde für die FIAP NEXT 2025 ausgewählt.',
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
        'UX/UI-Fallstudie für eine gamifizierte App zur Begleitung von Gewohnheiten rund um mentale Gesundheit, mit Schwerpunkt auf Prototyping und Produkt-Storytelling.',
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
        'Bildungsprojekt, das interaktive Interfaces, Prototyping und Datenvisualisierung in einer mit Webtechnologien und Node-RED entwickelten Erfahrung verbindet.',
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
