export interface NavItem {
  id: string;
  label: string;
}

export interface FactItem {
  key: string;
  value: string;
}

export interface ProjectLink {
  type: 'github' | 'demo' | 'private';
  url?: string;
  label: string;
}

export interface ProjectItem {
  context: string;
  title: string;
  description: string;
  metric: string;
  tech: string[];
  links: ProjectLink[];
}

export interface ProjectGroup {
  label: string;
  items: ProjectItem[];
}

export interface ExperienceItem {
  role: string;
  org: string;
  date: string;
  description: string;
  tags: string[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface CommunityCard {
  title: string;
  years: string;
  role: string;
  description: string;
  category: string;
}

export interface CertificationItem {
  badge: string;
  title: string;
  role: string;
  date: string;
  description: string;
  url?: string;
}

export interface ContactLink {
  type: 'email' | 'linkedin' | 'github' | 'cv';
  label: string;
  url: string;
}

export interface ChatConfig {
  fabLabel: string;
  monogram: string;
  headerTitle: string;
  headerSub: string;
  disclaimer: string;
  placeholder: string;
  welcome: string;
  suggestions: string[];
}

export interface PortfolioContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brand: { first: string; last: string };
    links: NavItem[];
    cvLabel: string;
    cvUrl: string;
  };
  hero: {
    eyebrow: string;
    name: { first: string; last: string };
    tagline: string;
    paragraph: string;
    facts: FactItem[];
    ctaPrimary: string;
    ctaSecondary: string;
    photoAlt: string;
    monogram: string;
    photoFallback: string;
  };
  projects: {
    eyebrow: string;
    secnum: string;
    title: string;
    subtitle: string;
    groups: ProjectGroup[];
  };
  experience: {
    eyebrow: string;
    secnum: string;
    title: string;
    items: ExperienceItem[];
  };
  skills: {
    eyebrow: string;
    secnum: string;
    title: string;
    groups: SkillGroup[];
    languages: string;
  };
  beyond: {
    eyebrow: string;
    secnum: string;
    title: string;
    paragraphs: string[];
    leadershipLabel: string;
    leadershipItems: CommunityCard[];
    certificationsLabel: string;
    certificationsItems: CertificationItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    paragraph: string;
    links: ContactLink[];
  };
  footer: {
    text: string;
    backToTop: string;
  };
  chat: ChatConfig;
}

export const content: Record<'fr' | 'en', PortfolioContent> = {
  fr: {
    meta: {
      title: 'Amir Rezgui · Ingénieur Full-Stack & IA',
      description: "Élève ingénieur à l'ISI (UTM). Je conçois des applications web, mobiles et IA de l'idée à la production. Projets, expérience et contact.",
    },
    nav: {
      brand: { first: 'amir', last: '.rezgui' },
      links: [
        { id: 'projects', label: 'projets' },
        { id: 'experience', label: 'expérience' },
        { id: 'skills', label: 'compétences' },
        { id: 'beyond', label: 'au-delà' },
        { id: 'contact', label: 'contact' },
      ],
      cvLabel: 'CV',
      cvUrl: '/assets/Rezgui_Amir_ING.pdf',
    },
    hero: {
      eyebrow: 'Élève ingénieur · Ariana, Tunisie',
      name: { first: 'Amir', last: 'Rezgui' },
      tagline: "Élève ingénieur en développement logiciel, à la recherche d'un stage de fin d'études (PFE).",
      paragraph: "Je conçois des applications web, mobiles et IA avec React, TypeScript, Node.js, Spring Boot et Flutter.",
      facts: [
        { key: 'domaine', value: 'IA Générative · Full-Stack' },
        { key: 'études', value: 'Cycle Ingénieur, ISI Ariana (2024 – 2027)' },
        { key: 'statut', value: "Ouvert à un stage PFE & poste junior" },
      ],
      ctaPrimary: 'Voir les projets',
      ctaSecondary: 'Me contacter',
      photoAlt: 'Amir Rezgui, portrait',
      monogram: 'AR',
      photoFallback: 'photo à venir',
    },
    projects: {
      eyebrow: '01 Travaux sélectionnés',
      secnum: '01',
      title: 'Projets',
      subtitle: "Projets réels et applications développées de l'idée à la production.",
      groups: [
        {
          label: 'Production & architectures full-stack',
          items: [
            {
              context: 'Linkup Solutions · SaaS IA Générative',
              title: 'LinkUp Recruiting',
              description: "Plateforme SaaS de recrutement avec analyse intelligente de CV par LLM, évaluation des candidats et assistant conversationnel IA pour les recruteurs.",
              metric: '',
              tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Mistral AI', 'Ollama'],
              links: [
                { type: 'private', label: 'Privé (Entreprise)' },
              ],
            },
            {
              context: "Nextira · Stage d'été",
              title: "Gestion de Centre d'Appels",
              description: "Application web connectée à VICIdial pour la gestion en temps réel des flux d'appels, des campagnes et des interfaces agents.",
              metric: '',
              tech: ['PHP', 'MySQL', 'REST API', 'jQuery', 'VICIdial'],
              links: [
                { type: 'private', label: 'Privé (Entreprise)' },
              ],
            },
            {
              context: 'Kromberg & Schubert · Stage Mobile',
              title: 'Suivi de Workflow Industriel',
              description: "Application mobile multiplateforme pour le suivi et la gestion en temps réel des workflows sur la chaîne de fabrication.",
              metric: '',
              tech: ['Flutter', 'Dart', 'Firebase'],
              links: [
                { type: 'private', label: 'Privé (Industriel)' },
              ],
            },
          ],
        },
        {
          label: 'Académique & IA appliquée',
          items: [
            {
              context: 'Académique · ISI Génie Logiciel',
              title: 'Gestion des Urgences Hospitalières',
              description: "Plateforme web et mobile de régulation médicale : classification automatique des incidents, dispatching intelligent des ambulances et chatbot de premiers secours.",
              metric: '',
              tech: ['Spring Boot', 'Angular', 'Flutter', 'Camunda', 'Keycloak', 'Dialogflow', 'PostgreSQL'],
              links: [
                { type: 'github', url: 'https://github.com/Amir-Rezgui/AI-Incident-Reporter', label: 'Code' },
              ],
            },
            {
              context: 'Académique · Mobile Temps Réel',
              title: 'Quiz Multijoueur en Temps Réel',
              description: "Application mobile de quiz en direct avec génération de questions par IA, accès par PIN/QR code et classement dynamique en streaming.",
              metric: '',
              tech: ['Flutter', 'Supabase', 'PostgreSQL'],
              links: [
                { type: 'github', url: 'https://github.com/Amir-Rezgui/Realtime-AI-Quiz-App', label: 'Code' },
              ],
            },
            {
              context: 'Académique · Edge AI & IoT',
              title: 'Profilage Démographique IoT Edge AI',
              description: "Dispositif IoT sur Raspberry Pi pour la détection de visages et l'analyse démographique en temps réel avec synchronisation cloud et dashboard.",
              metric: '',
              tech: ['Python', 'Transformers', 'MTCNN', 'OpenCV', 'Firebase', 'Raspberry Pi'],
              links: [
                { type: 'github', url: 'https://github.com/Amir-Rezgui/iot_connected', label: 'Code' },
              ],
            },
          ],
        },
      ],
    },
    experience: {
      eyebrow: '02 Parcours',
      secnum: '02',
      title: 'Expérience & Formation',
      items: [
        {
          role: "Stage de fin d'année en IA générative & développement web",
          org: 'Linkup Solutions',
          date: '07/2026 – 08/2026',
          description: "Conception et développement de Linkup Recruiting, plateforme SaaS de recrutement intégrant l'analyse intelligente de CV par LLM, l'évaluation des candidats et un assistant conversationnel IA.",
          tags: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Mistral AI', 'Ollama'],
        },
        {
          role: "Stage d'été en développement web",
          org: 'Nextira',
          date: '06/2025 – 08/2025',
          description: "Développement et personnalisation d'une application web de centre d'appel couplée à VICIdial pour la gestion des flux d'appels, des campagnes et des interfaces agents.",
          tags: ['PHP', 'MySQL', 'REST API', 'jQuery', 'VICIdial'],
        },
        {
          role: "Stage de fin d'études en développement mobile",
          org: 'Kromberg & Schubert (Kroschu)',
          date: '02/2024 – 06/2024',
          description: "Conception et développement d'une application mobile multiplateforme de gestion des workflows industriels internes.",
          tags: ['Flutter', 'Dart', 'Firebase'],
        },
        {
          role: 'Cycle Ingénieur en Développement Logiciel',
          org: "Institut Supérieur d'Informatique (ISI) Ariana",
          date: '09/2024 – Présent',
          description: "Formation d'ingénieur en cours (diplôme prévu en 2027).",
          tags: ['Java', 'Spring Boot', 'Python', 'Docker', 'Camunda'],
        },
        {
          role: 'Licence en Génie Logiciel — Mention Bien',
          org: "Institut Supérieur d'Informatique (ISI) Ariana",
          date: '10/2021 – 06/2024',
          description: "Diplôme de Licence validé avec mention Bien.",
          tags: ['Génie Logiciel', 'Algorithmique', 'Bases de données'],
        },
        {
          role: 'Baccalauréat Sciences Informatiques — Mention Très Bien',
          org: 'Lycée Khayreddine Ariana',
          date: '09/2020 – 06/2021',
          description: "Baccalauréat obtenu avec mention Très Bien.",
          tags: [],
        },
      ],
    },
    skills: {
      eyebrow: '03 Compétences',
      secnum: '03',
      title: 'Compétences & Technologies',
      groups: [
        {
          name: 'Langages',
          items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'C++', 'Dart', 'PHP'],
        },
        {
          name: 'Backend & Architecture',
          items: ['Node.js', 'Express.js', 'Spring Boot', 'Microservices', 'APIs REST', 'Prisma', 'Redis', 'BullMQ', 'Keycloak'],
        },
        {
          name: 'Frontend',
          items: ['React.js', 'TypeScript', 'Angular', 'Flutter', 'Tailwind CSS', 'JavaScript'],
        },
        {
          name: 'IA & Machine Learning',
          items: ['Mistral AI', 'Ollama', 'Prompt Engineering', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'OpenCV'],
        },
        {
          name: 'Bases de Données',
          items: ['Supabase', 'PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Firebase'],
        },
        {
          name: 'DevOps & Outils',
          items: ['Git', 'GitHub', 'Docker', 'Jira', 'Postman', 'Camunda'],
        },
      ],
      languages: 'Langues parlées : Arabe (natif), Français (courant), Anglais (professionnel)',
    },
    beyond: {
      eyebrow: '04 Au-delà du code',
      secnum: '04',
      title: 'Ce qui me motive',
      paragraphs: [
        "J’aime concevoir des outils utiles, rapides et intuitifs, en partant des besoins réels des utilisateurs.",
        "À l’ISI, je m’implique dans les clubs étudiants, partage mes connaissances en développement web et mobile, et explore les LLM open-source en local.",
      ],
      leadershipLabel: 'Engagement & communauté',
      leadershipItems: [
        {
          title: 'Clubs Étudiants ISI',
          years: '2024 – Présent',
          role: 'Membre Actif',
          description: "Membre actif du club <strong>Freeways</strong> (problem solving & algorithmique) et du club <strong>Chess Enthusiasts</strong> à l'ISI.",
          category: 'Communauté',
        },
        {
          title: 'Hack The Harvest — Codex',
          years: 'Mai 2026',
          role: "Chef d'équipe · Finaliste",
          description: "<strong>Ezzayra</strong> — Conception et développement d'une plateforme d'aide à la décision agricole intégrant l'analyse d'imagerie satellite (Sentinel-2), un assistant vocal intelligent en dialecte tunisien et la détection des maladies des plantes par vision par ordinateur.",
          category: 'Hackathon',
        },
      ],
      certificationsLabel: 'Certifications & Formations',
      certificationsItems: [
        {
          badge: 'GO',
          title: 'Foundations of Project Management',
          role: 'Google',
          date: 'Fév 2026',
          description: 'Méthodes Agile/Scrum, gouvernance et pilotage de projets logiciels.',
          url: 'https://www.coursera.org/account/accomplishments/verify/PEILFPWADR8I',
        },
        {
          badge: 'AI',
          title: 'AI & Machine Learning Fundamentals',
          role: 'CDOSS',
          date: 'Déc 2025',
          description: 'Fondamentaux du machine learning, algorithmes de classification et réseaux de neurones.',
          url: 'https://cdoss.org/ben-rezgui-amir/',
        },
        {
          badge: 'CI',
          title: 'Data Analytics Essentials',
          role: 'Cisco',
          date: 'Nov 2025',
          description: 'Analyse statistique, exploration de jeux de données et tableaux de bord décisionnels.',
          url: 'https://www.credly.com/badges/5addc4f2-2f88-4d3b-8b9a-a5421da76650/linked_in_profile',
        },
        {
          badge: 'PY',
          title: 'Python for Data Science',
          role: 'CDOSS',
          date: 'Mai 2025',
          description: 'Écosystème Python scientifique : Pandas, NumPy, Scikit-learn et pipelines de données.',
          url: 'https://cdoss.org/amir-ben-rezgui/',
        },
      ],
    },
    contact: {
      eyebrow: 'Ouvert aux opportunités',
      title: 'Construisons ensemble.',
      paragraph: "Je cherche un stage de fin d'études (PFE) ou un premier poste en développement full-stack & IA. L'email est le moyen le plus rapide de me joindre, mon CV est à un clic.",
      links: [
        { type: 'email', label: 'Email', url: 'mailto:amir.rezgui.pro@gmail.com' },
        { type: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/amir-rezgui' },
        { type: 'github', label: 'GitHub', url: 'https://github.com/Amir-Rezgui' },
        { type: 'cv', label: 'Télécharger CV', url: '/assets/Rezgui_Amir_ING.pdf' },
      ],
    },
    footer: {
      text: '© 2026 Amir Rezgui · Conçu à Ariana, Tunisie',
      backToTop: 'Retour en haut',
    },
    chat: {
      fabLabel: 'Me poser une question',
      monogram: 'AR',
      headerTitle: "Demandez à propos d'Amir",
      headerSub: 'Assistant IA',
      disclaimer: "Assistant IA basé sur le parcours réel d'Amir. Il peut parfois se tromper.",
      placeholder: 'Posez une question...',
      welcome: "Bonjour ! Je suis l'assistant virtuel d'Amir Rezgui, entraîné sur son parcours réel et ses projets. Que souhaitez-vous savoir ?",
      suggestions: [
        'Quels sont tes projets les plus marquants ?',
        'Quelle est ta stack technique ?',
        "Qu'as-tu fait chez Linkup Solutions ?",
        'Es-tu disponible pour un stage PFE ?',
      ],
    },
  },
  en: {
    meta: {
      title: 'Amir Rezgui · Full-Stack & AI Engineer',
      description: 'Software engineering student at ISI (UTM). I build web, mobile, and AI applications from idea to production. Projects, experience, and contact.',
    },
    nav: {
      brand: { first: 'amir', last: '.rezgui' },
      links: [
        { id: 'projects', label: 'projects' },
        { id: 'experience', label: 'experience' },
        { id: 'skills', label: 'skills' },
        { id: 'beyond', label: 'beyond' },
        { id: 'contact', label: 'contact' },
      ],
      cvLabel: 'CV',
      cvUrl: '/assets/Amir_Rezgui_ENG.pdf',
    },
    hero: {
      eyebrow: 'Software Engineer · Ariana, Tunisia',
      name: { first: 'Amir', last: 'Rezgui' },
      tagline: 'Software engineering student, seeking a final-year internship (PFE).',
      paragraph: 'I build web, mobile, and AI applications with React, TypeScript, Node.js, Spring Boot, and Flutter.',
      facts: [
        { key: 'focus', value: 'Generative AI · Full-Stack' },
        { key: 'studies', value: 'Engineering Cycle, ISI Ariana (2024 – 2027)' },
        { key: 'status', value: 'Open to final-year internship & junior roles' },
      ],
      ctaPrimary: 'View projects',
      ctaSecondary: 'Get in touch',
      photoAlt: 'Amir Rezgui, portrait',
      monogram: 'AR',
      photoFallback: 'photo coming soon',
    },
    projects: {
      eyebrow: '01 Selected work',
      secnum: '01',
      title: 'Projects',
      subtitle: 'Real-world software and applications taken from idea to production.',
      groups: [
        {
          label: 'Production & full-stack',
          items: [
            {
              context: 'Linkup Solutions · Generative AI SaaS',
              title: 'LinkUp Recruiting',
              description: 'SaaS recruitment platform featuring intelligent LLM-based CV analysis, candidate evaluation, and an AI conversational assistant for recruiters.',
              metric: '',
              tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Mistral AI', 'Ollama'],
              links: [
                { type: 'private', label: 'Private (Enterprise)' },
              ],
            },
            {
              context: 'Nextira · Summer Internship',
              title: 'Call Center Management',
              description: 'Web application integrated with VICIdial to manage real-time call flows, campaigns, and agent workstations.',
              metric: '',
              tech: ['PHP', 'MySQL', 'REST API', 'jQuery', 'VICIdial'],
              links: [
                { type: 'private', label: 'Private (Enterprise)' },
              ],
            },
            {
              context: 'Kromberg & Schubert · Mobile Internship',
              title: 'Industrial Workflow Tracker',
              description: 'Cross-platform mobile application for real-time monitoring and coordination of manufacturing workflows on the production floor.',
              metric: '',
              tech: ['Flutter', 'Dart', 'Firebase'],
              links: [
                { type: 'private', label: 'Private (Industrial)' },
              ],
            },
          ],
        },
        {
          label: 'Academic & applied AI',
          items: [
            {
              context: 'Academic · ISI Software Engineering',
              title: 'Hospital Emergency Coordination',
              description: 'Emergency dispatch platform: automated incident triage, smart ambulance routing, hospital recommendation, and a first-aid assistance chatbot.',
              metric: '',
              tech: ['Spring Boot', 'Angular', 'Flutter', 'Camunda', 'Keycloak', 'Dialogflow', 'PostgreSQL'],
              links: [
                { type: 'github', url: 'https://github.com/Amir-Rezgui/AI-Incident-Reporter', label: 'Code' },
              ],
            },
            {
              context: 'Academic · Real-Time Mobile',
              title: 'Real-Time Multiplayer Quiz',
              description: 'Live mobile quiz application with AI-based question generation, PIN/QR code room access, and real-time streaming leaderboards.',
              metric: '',
              tech: ['Flutter', 'Supabase', 'PostgreSQL'],
              links: [
                { type: 'github', url: 'https://github.com/Amir-Rezgui/Realtime-AI-Quiz-App', label: 'Code' },
              ],
            },
            {
              context: 'Academic · Edge AI & IoT',
              title: 'Edge AI Demographic Profiling',
              description: 'IoT device on Raspberry Pi for real-time face detection and demographic analysis, with cloud telemetry and an interactive dashboard.',
              metric: '',
              tech: ['Python', 'Transformers', 'MTCNN', 'OpenCV', 'Firebase', 'Raspberry Pi'],
              links: [
                { type: 'github', url: 'https://github.com/Amir-Rezgui/iot_connected', label: 'Code' },
              ],
            },
          ],
        },
      ],
    },
    experience: {
      eyebrow: '02 Career',
      secnum: '02',
      title: 'Experience & Education',
      items: [
        {
          role: 'Generative AI & Web Development Internship',
          org: 'Linkup Solutions',
          date: '07/2026 – 08/2026',
          description: 'Designed and developed Linkup Recruiting, a SaaS recruitment platform featuring intelligent LLM-based CV analysis, candidate evaluation, and an AI conversational assistant for recruiters.',
          tags: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Mistral AI', 'Ollama'],
        },
        {
          role: 'Summer Web Development Internship',
          org: 'Nextira',
          date: '06/2025 – 08/2025',
          description: 'Developed and customized a call center web application integrated with VICIdial to manage call flows, campaigns, and agent interfaces.',
          tags: ['PHP', 'MySQL', 'REST API', 'jQuery', 'VICIdial'],
        },
        {
          role: 'Final-Year Mobile Development Internship',
          org: 'Kromberg & Schubert (Kroschu)',
          date: '02/2024 – 06/2024',
          description: 'Designed and developed a cross-platform mobile application for managing internal manufacturing workflows.',
          tags: ['Flutter', 'Dart', 'Firebase'],
        },
        {
          role: 'Software Engineering Degree (Cycle Ingénieur)',
          org: 'Higher Institute of Computer Science (ISI, UTM)',
          date: '09/2024 – Present',
          description: 'Software engineering degree program in progress (graduating 2027).',
          tags: ['Java', 'Spring Boot', 'Python', 'Docker', 'Camunda'],
        },
        {
          role: "Bachelor's Degree in Software Engineering — Honors (Bien)",
          org: 'Higher Institute of Computer Science (ISI, UTM)',
          date: '10/2021 – 06/2024',
          description: "Graduated with Honors (Mention Bien).",
          tags: ['Software Engineering', 'Algorithms', 'Databases'],
        },
        {
          role: 'Baccalaureate in Computer Science — High Honors (Très Bien)',
          org: 'Lycée Khayreddine Ariana',
          date: '09/2020 – 06/2021',
          description: 'Graduated with High Honors (Mention Très Bien).',
          tags: [],
        },
      ],
    },
    skills: {
      eyebrow: '03 Toolkit',
      secnum: '03',
      title: 'Skills & Technologies',
      groups: [
        {
          name: 'Languages',
          items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'C++', 'Dart', 'PHP'],
        },
        {
          name: 'Backend & Architecture',
          items: ['Node.js', 'Express.js', 'Spring Boot', 'Microservices', 'REST APIs', 'Prisma', 'Redis', 'BullMQ', 'Keycloak'],
        },
        {
          name: 'Frontend',
          items: ['React.js', 'TypeScript', 'Angular', 'Flutter', 'Tailwind CSS', 'JavaScript'],
        },
        {
          name: 'AI & Machine Learning',
          items: ['Mistral AI', 'Ollama', 'Prompt Engineering', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'OpenCV'],
        },
        {
          name: 'Databases',
          items: ['Supabase', 'PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Firebase'],
        },
        {
          name: 'DevOps & Tools',
          items: ['Git', 'GitHub', 'Docker', 'Jira', 'Postman', 'Camunda'],
        },
      ],
      languages: 'Languages spoken: Arabic (native), French (fluent), English (professional)',
    },
    beyond: {
      eyebrow: '04 Beyond the code',
      secnum: '04',
      title: 'What drives me',
      paragraphs: [
        'I enjoy building useful, fast, and intuitive tools, always starting from real user needs.',
        'At ISI, I actively contribute to student tech clubs, share knowledge in web and mobile development, and experiment with local open-source LLMs.',
      ],
      leadershipLabel: 'Leadership & community',
      leadershipItems: [
        {
          title: 'ISI Student Clubs',
          years: '2024 – Present',
          role: 'Active Member',
          description: 'Active member of <strong>Freeways</strong> (problem solving club) and <strong>Chess Enthusiasts</strong> club at ISI.',
          category: 'Community',
        },
        {
          title: 'Hack The Harvest — Codex',
          years: 'May 2026',
          role: 'Team Lead · Finalist',
          description: "<strong>Ezzayra</strong> — Design and development of an AgriTech decision-support platform integrating Sentinel-2 satellite imagery analysis, a Tunisian-dialect intelligent voice assistant, and computer vision plant disease detection.",
          category: 'Hackathon',
        },
      ],
      certificationsLabel: 'Certifications & Training',
      certificationsItems: [
        {
          badge: 'GO',
          title: 'Foundations of Project Management',
          role: 'Google',
          date: 'Feb 2026',
          description: 'Agile/Scrum methodologies, governance, and software project management.',
          url: 'https://www.coursera.org/account/accomplishments/verify/PEILFPWADR8I',
        },
        {
          badge: 'AI',
          title: 'AI & Machine Learning Fundamentals',
          role: 'CDOSS',
          date: 'Dec 2025',
          description: 'Machine learning fundamentals, classification algorithms, and neural networks.',
          url: 'https://cdoss.org/ben-rezgui-amir/',
        },
        {
          badge: 'CI',
          title: 'Data Analytics Essentials',
          role: 'Cisco',
          date: 'Nov 2025',
          description: 'Statistical analysis, dataset exploration, and decision dashboards.',
          url: 'https://www.credly.com/badges/5addc4f2-2f88-4d3b-8b9a-a5421da76650/linked_in_profile',
        },
        {
          badge: 'PY',
          title: 'Python for Data Science',
          role: 'CDOSS',
          date: 'May 2025',
          description: 'Scientific Python ecosystem: Pandas, NumPy, Scikit-learn, and data pipelines.',
          url: 'https://cdoss.org/amir-ben-rezgui/',
        },
      ],
    },
    contact: {
      eyebrow: 'Open to opportunities',
      title: "Let's build something together.",
      paragraph: "I am looking for an end-of-studies internship (PFE) or a junior full-stack & AI engineering role. Email is the fastest way to reach me, and my CV is just one click away.",
      links: [
        { type: 'email', label: 'Email', url: 'mailto:amir.rezgui.pro@gmail.com' },
        { type: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/amir-rezgui' },
        { type: 'github', label: 'GitHub', url: 'https://github.com/Amir-Rezgui' },
        { type: 'cv', label: 'Download CV', url: '/assets/Amir_Rezgui_ENG.pdf' },
      ],
    },
    footer: {
      text: '© 2026 Amir Rezgui · Built in Ariana, Tunisia',
      backToTop: 'Back to top',
    },
    chat: {
      fabLabel: 'Ask about me',
      monogram: 'AR',
      headerTitle: 'Ask about Amir',
      headerSub: 'AI assistant',
      disclaimer: 'AI assistant grounded on Amir’s verified background. It can occasionally make mistakes.',
      placeholder: 'Ask a question...',
      welcome: "Hello! I am Amir Rezgui's AI assistant, trained on his real projects and engineering background. What would you like to know?",
      suggestions: [
        'What are your most notable projects?',
        'What is your technical stack?',
        'What did you build at Linkup Solutions?',
        'Are you available for an internship?',
      ],
    },
  },
};
