export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  sections: {
    subtitle: string;
    body: string | string[]; // strings y array de strings
  }[];
  modules: {
    id: number;
    title: string;
    description: string;
    lessons: string[];
    duration: string;
  }[];
  pricing: {
    plan: string;
    price: number;
  }[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Marketing Digital Avanzado",
    description: "Aprendé diseño centrado en el usuario",
    image: "/images/ux.png",
    sections: [
      {
        subtitle: "Qué vas a aprender",
        body: "En este curso, aprenderás a diseñar y ejecutar campañas de marketing digital efectivas. Dominarás herramientas como Google Ads y Facebook Ads, además de desarrollar habilidades en SEO y análisis de datos para maximizar el impacto de tus campañas.",
      },
      {
        subtitle: "Requisitos previos",
        body: [
          "Una computadora con acceso a internet",
          "Conexión estable a internet",
          "Conocimientos básicos de marketing (para cursos como Marketing Digital)",
          "Software necesario instalado (como un navegador web)",
        ],
      },
    ],
    modules: [
      {
        id: 1,
        title: "Fundamentos de Marketing Digital Avanzado",
        description:
          "Domina las bases del marketing digital actual, desde la estrategia hasta la optimización de funnels, aplicando un enfoque data-driven.",
        lessons: [
          "Análisis de datos y métricas clave (KPIs)",
          "Creación de buyer personas y customer journeys",
          "Estrategias de segmentación y targeting avanzado",
          "Optimización de la experiencia de usuario (UX) para conversión",
        ],
        duration: "Duración: 2 horas",
      },
      {
        id: 2,
        title: "Publicidad Programática y Paid Media",
        description:
          "Profundiza en la compra de medios automatizada, gestionando campañas en plataformas de alto rendimiento para maximizar el ROI.",
        lessons: [
          "Google Ads y Microsoft Advertising (Search, Display, Video)",
          "Publicidad en redes sociales (Meta Ads, TikTok Ads, LinkedIn Ads)",
          "Uso de Píxeles y APIs de conversión para tracking preciso",
          "Testing A/B y optimización de creativos y audiencias",
        ],
        duration: "Duración: 3 horas",
      },
      {
        id: 3,
        title: "Estrategias de SEO Técnico y Avanzado",
        description:
          "Lleva tu sitio web a la cima de los resultados de búsqueda, optimizando aspectos técnicos y de contenido para una visibilidad sostenible.",
        lessons: [
          "Auditoría SEO on-page y off-page",
          "Optimización de la velocidad del sitio (Core Web Vitals)",
          "Estrategias de link building y PR digital",
          "SEO para contenido (keywords, intención de búsqueda, E-E-A-T)",
        ],
        duration: "Duración: 2.5 horas",
      },
      {
        id: 4,
        title: "Marketing de Contenidos y Estrategia Inbound",
        description:
          "Construye una máquina de atracción de leads, creando contenido de valor que posicione a tu marca como una autoridad en la industria.",
        lessons: [
          "Planificación editorial y calendarios de contenido",
          "Marketing de contenidos en video y podcasting",
          "Email marketing automatizado y secuencias de nutrición",
          "Creación de lead magnets y funnels de conversión",
        ],
        duration: "Duración: 2 horas",
      },
      {
        id: 5,
        title: "Automatización y CRM en Marketing",
        description:
          "Aprende a escalar tus esfuerzos de marketing y ventas, utilizando herramientas de automatización y sistemas de gestión de relaciones con clientes.",
        lessons: [
          "Implementación y gestión de Hubspot, Salesforce o similar",
          "Creación de flujos de trabajo (workflows) automatizados",
          "Segmentación avanzada de bases de datos de clientes",
          "Reportes de rendimiento y atribución de marketing",
        ],
        duration: "Duración: 3 horas",
      },
      {
        id: 6,
        title: "Growth Hacking y Experimentación",
        description:
          "Adopta una mentalidad de crecimiento acelerado, aplicando ciclos de experimentación rápidos para encontrar nuevas oportunidades de escalabilidad.",
        lessons: [
          "Metodología de 'build-measure-learn' en marketing",
          "Análisis de cohortes y retención de usuarios",
          "Hackeos de crecimiento para adquisición y activación",
          "Modelos de atribución y lifetime value (LTV)",
        ],
        duration: "Duración: 2.5 horas",
      },
    ],
    pricing: [{ plan: "Suscripción", price: 20 }, { plan: "Pago Único", price: 100 }],
  },
  {
    id: 2,
    title: "Ciencia de Datos",
    description:
      "Transformá datos en conocimiento accionable para tomar decisiones estratégicas.",
    image: "/images/data-science.png",
    sections: [
      {
        subtitle: "Qué vas a aprender",
        body: "En este curso, dominarás los fundamentos de la Ciencia de Datos, desde la recolección y limpieza de datos hasta el desarrollo de modelos predictivos. Aprenderás a utilizar lenguajes como Python y librerías como Pandas, Scikit-learn y Matplotlib para analizar y visualizar información compleja.",
      },
      {
        subtitle: "Requisitos previos",
        body: [
          "Conocimientos básicos de matemáticas y estadística",
          "Familiaridad con la lógica de programación",
          "Una computadora con acceso a internet",
          "Software necesario instalado (Python, Jupyter Notebook)",
        ],
      },
    ],
    modules: [
      {
        id: 1,
        title: "Fundamentos y Herramientas",
        description:
          "Introducción a la Ciencia de Datos, el rol del analista y las herramientas clave como Python, Jupyter y librerías básicas.",
        lessons: [
          "Introducción a Python para Ciencia de Datos",
          "Gestión y exploración de datos con Pandas",
          "Visualización de datos con Matplotlib y Seaborn",
          "Introducción a la estadística descriptiva e inferencial",
        ],
        duration: "Duración: 2.5 horas",
      },
      {
        id: 2,
        title: "Preparación de Datos y Feature Engineering",
        description:
          "Aprende a limpiar, transformar y preparar conjuntos de datos para el modelado, manejando valores nulos, datos atípicos y variables categóricas.",
        lessons: [
          "Limpieza de datos (Missing values, outliers)",
          "Técnicas de normalización y estandarización",
          "Creación de nuevas variables (Feature Engineering)",
          "Concatenación y unión de datasets",
        ],
        duration: "Duración: 3 horas",
      },
      {
        id: 3,
        title: "Introducción al Machine Learning",
        description:
          "Descubre los algoritmos de Machine Learning, desde regresión y clasificación hasta clustering, y aprende a implementar modelos con Scikit-learn.",
        lessons: [
          "Modelos de regresión lineal y logística",
          "Algoritmos de clasificación (árboles de decisión, SVM)",
          "Análisis de clustering (K-Means)",
          "Evaluación de modelos (precisión, recall, F1-score)",
        ],
        duration: "Duración: 3.5 horas",
      },
      {
        id: 4,
        title: "Modelos Avanzados y Casos de Estudio",
        description:
          "Profundiza en modelos más complejos y aplica tus conocimientos a problemas del mundo real.",
        lessons: [
          "Redes neuronales con TensorFlow y Keras",
          "Procesamiento del lenguaje natural (NLP) con NLTK",
          "Sistemas de recomendación",
          "Proyecto final: Análisis de un dataset real",
        ],
        duration: "Duración: 4 horas",
      },
    ],
    pricing: [{ plan: "Suscripción", price: 25 }, { plan: "Pago Único", price: 120 }],
  },
  {
    id: 3,
    title: "Diseño UX/UI",
    description:
      "Creá experiencias de usuario intuitivas y atractivas para productos digitales.",
    image: "/images/ui-ux.png",
    sections: [
      {
        subtitle: "Qué vas a aprender",
        body: "Dominarás el proceso de diseño UX/UI, desde la investigación de usuarios hasta la creación de prototipos y pruebas de usabilidad. Aprenderás a usar herramientas como Figma y a aplicar metodologías como el Design Thinking para resolver problemas de diseño de manera efectiva.",
      },
      {
        subtitle: "Requisitos previos",
        body: [
          "Conocimientos básicos de informática",
          "Ganas de aprender y mucha creatividad",
          "Una computadora con acceso a internet",
          "Software necesario instalado (Figma, Sketch o Adobe XD)",
        ],
      },
    ],
    modules: [
      {
        id: 1,
        title: "Fundamentos de UX (User Experience)",
        description:
          "Introducción a la investigación de usuarios, la arquitectura de la información y el diseño centrado en el usuario.",
        lessons: [
          "Principios de usabilidad y accesibilidad",
          "Investigación de usuarios (entrevistas, encuestas)",
          "Análisis de competidores y Personas",
          "Creación de User Journeys y User Flows",
        ],
        duration: "Duración: 2 horas",
      },
      {
        id: 2,
        title: "Fundamentos de UI (User Interface)",
        description:
          "Aprende los principios del diseño visual, la teoría del color, la tipografía y la creación de un sistema de diseño consistente.",
        lessons: [
          "Principios de diseño visual y composición",
          "Teoría del color y tipografía",
          "Creación de componentes y design systems",
          "Diseño responsivo para web y móvil",
        ],
        duration: "Duración: 2.5 horas",
      },
      {
        id: 3,
        title: "Wireframing y Prototipado",
        description:
          "Construye la estructura de tus interfaces y dales vida con prototipos interactivos.",
        lessons: [
          "Creación de wireframes de baja y alta fidelidad",
          "Prototipado interactivo con Figma",
          "Técnicas de animaciones y transiciones",
          "Presentación de prototipos a stakeholders",
        ],
        duration: "Duración: 3 horas",
      },
      {
        id: 4,
        title: "Testing y Usabilidad",
        description:
          "Valida tus diseños con pruebas de usabilidad para optimizar la experiencia del usuario.",
        lessons: [
          "Planificación de test de usabilidad",
          "Análisis de resultados y métricas de usabilidad",
          "Test A/B y análisis de heatmaps",
          "Iteración y mejora continua del producto",
        ],
        duration: "Duración: 2.5 horas",
      },
    ],
    pricing: [{ plan: "Suscripción", price: 20 }, { plan: "Pago Único", price: 110 }],
  },
  {
    id: 4,
    title: "Programación Backend",
    description:
      "Creá la lógica detrás de aplicaciones web robustas y escalables.",
    image: "/images/backend.png",
    sections: [
      {
        subtitle: "Qué vas a aprender",
        body: "En este curso, aprenderás a construir el 'cerebro' de las aplicaciones, manejando bases de datos, APIs y la lógica del servidor. Utilizarás frameworks populares como Node.js (Express), Python (Django) o Ruby (Ruby on Rails) para crear APIs RESTful y sistemas de autenticación.",
      },
      {
        subtitle: "Requisitos previos",
        body: [
          "Conocimientos básicos de programación",
          "Familiaridad con los conceptos de la web (HTTP, cliente-servidor)",
          "Una computadora con acceso a internet",
          "Software necesario instalado (Visual Studio Code, Node.js o Python)",
        ],
      },
    ],
    modules: [
      {
        id: 1,
        title: "Arquitectura y Fundamentos",
        description:
          "Conceptos clave de la programación backend y la arquitectura cliente-servidor.",
        lessons: [
          "Introducción a la arquitectura de software",
          "Protocolo HTTP y el ciclo de vida de una petición",
          "Diseño de APIs RESTful",
          "Introducción a Node.js y Express.js",
        ],
        duration: "Duración: 2.5 horas",
      },
      {
        id: 2,
        title: "Bases de Datos y ORMs",
        description:
          "Maneja bases de datos relacionales y no relacionales para almacenar y gestionar información.",
        lessons: [
          "Introducción a bases de datos relacionales (SQL)",
          "Manejo de bases de datos no relacionales (MongoDB)",
          "Conceptos de ORMs y su uso (Sequelize, Mongoose)",
          "Diseño de esquemas y modelos de datos",
        ],
        duration: "Duración: 3.5 horas",
      },
      {
        id: 3,
        title: "Autenticación y Seguridad",
        description:
          "Implementa sistemas de autenticación robustos y aplica las mejores prácticas de seguridad en tus APIs.",
        lessons: [
          "Autenticación con JWT (JSON Web Tokens)",
          "Estrategias de encriptación de contraseñas",
          "Manejo de errores y validación de datos",
          "Seguridad básica (CORS, XSS, CSRF)",
        ],
        duration: "Duración: 3 horas",
      },
      {
        id: 4,
        title: "Despliegue y Mantenimiento",
        description:
          "Aprende a subir tus aplicaciones a la nube y a gestionar su funcionamiento.",
        lessons: [
          "Despliegue de aplicaciones en la nube (Heroku, Vercel)",
          "Manejo de variables de entorno",
          "Logs y monitoreo de aplicaciones",
          "Mantenimiento y optimización del rendimiento",
        ],
        duration: "Duración: 2.5 horas",
      },
    ],
    pricing: [{ plan: "Suscripción", price: 30 }, { plan: "Pago Único", price: 150 }],
  },
  {
    id: 5,
    title: "Programación Frontend",
    description:
      "Creá interfaces de usuario interactivas y dinámicas para la web.",
    image: "/images/frontend.png",
    sections: [
      {
        subtitle: "Qué vas a aprender",
        body: "En este curso, te convertirás en un experto del desarrollo frontend, construyendo interfaces atractivas y responsivas. Dominarás HTML, CSS y JavaScript, y aprenderás a usar frameworks modernos como React, Vue o Angular para crear aplicaciones web de una sola página (SPAs).",
      },
      {
        subtitle: "Requisitos previos",
        body: [
          "Conocimientos básicos de HTML, CSS y JavaScript",
          "Una computadora con acceso a internet",
          "Software necesario instalado (Visual Studio Code, npm/yarn)",
        ],
      },
    ],
    modules: [
      {
        id: 1,
        title: "Fundamentos de la Web",
        description:
          "Revisa los conceptos esenciales de HTML, CSS y JavaScript para construir una base sólida.",
        lessons: [
          "Semántica de HTML y accesibilidad",
          "Diseño responsivo con CSS Flexbox y Grid",
          "JavaScript moderno (ES6+)",
          "Manipulación del DOM y eventos",
        ],
        duration: "Duración: 2 horas",
      },
      {
        id: 2,
        title: "Frameworks y Componentes",
        description:
          "Introduce el mundo de los frameworks frontend y la programación basada en componentes.",
        lessons: [
          "Introducción a React.js (o Vue.js)",
          "Componentes, props y state",
          "Manejo del estado con hooks (useState, useEffect)",
          "Ruteo con React Router (o Vue Router)",
        ],
        duration: "Duración: 3.5 horas",
      },
      {
        id: 3,
        title: "APIs y Gestión de Estado",
        description:
          "Conecta tus aplicaciones con servicios de backend y maneja el estado de forma global.",
        lessons: [
          "Consumo de APIs RESTful con Fetch y Axios",
          "Gestión de estado global con Context API (o Redux)",
          "Optimización de rendimiento y memorización de componentes",
          "Formularios y validación",
        ],
        duration: "Duración: 3 horas",
      },
      {
        id: 4,
        title: "Testing y Despliegue",
        description:
          "Asegura la calidad de tu código y despliega tu aplicación en la nube.",
        lessons: [
          "Introducción a testing (Jest, React Testing Library)",
          "Pruebas unitarias y de integración",
          "Despliegue en la nube (Vercel, Netlify)",
          "Mantenimiento y debugging de la aplicación",
        ],
        duration: "Duración: 2.5 horas",
      },
    ],
    pricing: [{ plan: "Suscripción", price: 25 }, { plan: "Pago Único", price: 130 }],
  },
  {
    id: 6,
    title: "Chatbot 101",
    description:
      "Diseñá e implementá chatbots inteligentes para automatizar interacciones.",
    image: "/images/chatbot.png",
    sections: [
      {
        subtitle: "Qué vas a aprender",
        body: "Aprenderás a crear chatbots funcionales, desde la planificación del flujo de conversación hasta la implementación con plataformas como Dialogflow o Botpress. Te enfocarás en la experiencia de usuario conversacional (CUX) y la integración con servicios de mensajería como WhatsApp y Messenger.",
      },
      {
        subtitle: "Requisitos previos",
        body: [
          "Conocimientos básicos de lógica y programación",
          "Una computadora con acceso a internet",
          "Ganas de aprender sobre inteligencia artificial",
          "Software necesario (Dialogflow Console, Node.js o Python)",
        ],
      },
    ],
    modules: [
      {
        id: 1,
        title: "Fundamentos de Chatbots",
        description:
          "Explora los tipos de chatbots, su arquitectura y los principios del diseño conversacional.",
        lessons: [
          "Tipos de chatbots (rule-based, NLP-based)",
          "Principios de CUX (Conversational User Experience)",
          "Análisis de intenciones y entidades",
          "Planificación de flujos de conversación",
        ],
        duration: "Duración: 2 horas",
      },
      {
        id: 2,
        title: "Plataformas de Desarrollo",
        description:
          "Maneja herramientas como Google Dialogflow para crear y entrenar tu propio bot.",
        lessons: [
          "Introducción a Google Dialogflow ES",
          "Creación de Intents y Entities",
          "Manejo de contextos y fulfilment",
          "Entrenamiento del modelo y testing",
        ],
        duration: "Duración: 3 horas",
      },
      {
        id: 3,
        title: "Integración y Despliegue",
        description:
          "Aprende a conectar tu chatbot con diferentes canales y a desplegarlo en la nube.",
        lessons: [
          "Integración con WhatsApp y Facebook Messenger",
          "Integración con web y otras plataformas",
          "Conceptos de webhooks y APIs",
          "Despliegue del chatbot en la nube (ej. Heroku)",
        ],
        duration: "Duración: 2.5 horas",
      },
      {
        id: 4,
        title: "Manejo de Casos de Uso Avanzados",
        description:
          "Profundiza en la creación de chatbots complejos con lógica personalizada.",
        lessons: [
          "Manejo de transacciones y pagos",
          "Personalización del chatbot",
          "Análisis de métricas y rendimiento",
          "Proyecto final: Creación de un chatbot de servicio al cliente",
        ],
        duration: "Duración: 3 horas",
      },
    ],
    pricing: [{ plan: "Suscripción", price: 20 }, { plan: "Pago Único", price: 100 }],
  },
  {
    id: 7,
    title: "Estrategias de SEO",
    description:
      "Maximizá la visibilidad de tu sitio web en motores de búsqueda.",
    image: "/images/seo.png",
    sections: [
      {
        subtitle: "Qué vas a aprender",
        body: "Este curso te enseñará a optimizar tu sitio web para los motores de búsqueda, mejorando su posicionamiento orgánico. Cubrirás desde la investigación de palabras clave hasta la creación de contenido de alta calidad y la construcción de enlaces, aplicando las últimas tendencias de SEO.",
      },
      {
        subtitle: "Requisitos previos",
        body: [
          "Una computadora con acceso a internet",
          "Familiaridad con la navegación web",
          "Ganas de aprender a analizar y optimizar",
        ],
      },
    ],
    modules: [
      {
        id: 1,
        title: "Fundamentos de SEO y Keyword Research",
        description:
          "Aprende cómo funcionan los motores de búsqueda y cómo encontrar las palabras clave adecuadas para tu nicho.",
        lessons: [
          "Cómo funciona el algoritmo de Google",
          "Tipos de búsqueda e intención del usuario",
          "Herramientas de Keyword Research (SEMrush, Ahrefs)",
          "Análisis de la competencia y oportunidad de mercado",
        ],
        duration: "Duración: 2 horas",
      },
      {
        id: 2,
        title: "SEO On-Page y Contenido",
        description:
          "Optimiza cada página de tu sitio web para mejorar su relevancia y autoridad.",
        lessons: [
          "Optimización de títulos, meta descripciones y headings",
          "Estructura de URLs y enlaces internos",
          "Creación de contenido de valor (E-E-A-T)",
          "Optimización de imágenes y velocidad del sitio",
        ],
        duration: "Duración: 2.5 horas",
      },
      {
        id: 3,
        title: "SEO Técnico y Auditoría",
        description:
          "Profundiza en los aspectos técnicos que influyen en el rastreo y la indexación de tu sitio.",
        lessons: [
          "Auditoría técnica del sitio (crawlability, sitemaps)",
          "Manejo de redirecciones y errores 404",
          "Optimización para móviles y Core Web Vitals",
          "Uso de Google Search Console y Google Analytics",
        ],
        duration: "Duración: 3 horas",
      },
      {
        id: 4,
        title: "Link Building y SEO Off-Page",
        description:
          "Descubre cómo construir la autoridad de tu dominio a través de enlaces externos de calidad.",
        lessons: [
          "Estrategias de link building (guest blogging, PR digital)",
          "Análisis de perfiles de backlinks",
          "SEO local para negocios físicos",
          "Penalizaciones de Google y cómo recuperarse",
        ],
        duration: "Duración: 3 horas",
      },
    ],
    pricing: [{ plan: "Suscripción", price: 20 }, { plan: "Pago Único", price: 100 }],
  },
  {
    id: 8,
    title: "Gestión de Proyectos Ágiles",
    description: "Liderá equipos y proyectos con metodologías ágiles como Scrum y Kanban.",
    image: "/images/agile.png",
    sections: [
      {
        subtitle: "Qué vas a aprender",
        body: "En este curso, dominarás los principios de las metodologías ágiles para gestionar proyectos de forma flexible y eficiente. Te enfocarás en frameworks como Scrum y Kanban, y aprenderás a planificar sprints, priorizar tareas y fomentar la colaboración dentro de tu equipo.",
      },
      {
        subtitle: "Requisitos previos",
        body: [
          "Mente abierta y disposición para el trabajo en equipo",
          "Una computadora con acceso a internet",
          "Ganas de organizar y mejorar procesos",
        ],
      },
    ],
    modules: [
      {
        id: 1,
        title: "Fundamentos de Metodologías Ágiles",
        description:
          "Introducción al Manifiesto Ágil, sus principios y los beneficios de trabajar de forma incremental e iterativa.",
        lessons: [
          "El Manifiesto Ágil y sus 12 principios",
          "Diferencias entre metodologías ágiles y tradicionales",
          "Roles y responsabilidades en equipos ágiles",
          "La cultura de la mejora continua",
        ],
        duration: "Duración: 2 horas",
      },
      {
        id: 2,
        title: "Scrum: El Framework Ágil por Excelencia",
        description:
          "Profundiza en Scrum, el marco de trabajo más popular para la gestión de proyectos de desarrollo.",
        lessons: [
          "Roles de Scrum (Product Owner, Scrum Master, Equipo de Desarrollo)",
          "Eventos de Scrum (Sprint Planning, Daily Scrum, Review, Retrospective)",
          "Artefactos de Scrum (Product Backlog, Sprint Backlog, Incremento)",
          "Estimación y planificación de sprints",
        ],
        duration: "Duración: 3 horas",
      },
      {
        id: 3,
        title: "Kanban y Lean Management",
        description:
          "Aprende a visualizar y optimizar el flujo de trabajo con la metodología Kanban.",
        lessons: [
          "Principios de Kanban",
          "Uso del tablero Kanban y visualización del trabajo",
          "Manejo de WIP (Work In Progress)",
          "Lean Management y la eliminación de desperdicios",
        ],
        duration: "Duración: 2.5 horas",
      },
      {
        id: 4,
        title: "Herramientas y Prácticas Avanzadas",
        description:
          "Utiliza herramientas y técnicas para llevar tu gestión de proyectos al siguiente nivel.",
        lessons: [
          "Uso de herramientas como Jira, Trello y Asana",
          "Métricas y reportes de progreso (Burndown Chart)",
          "Resolución de conflictos en equipos ágiles",
          "Proyecto final: Implementación de una metodología ágil",
        ],
        duration: "Duración: 3 horas",
      },
    ],
    pricing: [{ plan: "Suscripción", price: 20 }, { plan: "Pago Único", price: 100 }],
  },
  {
    id: 9,
    title: "Fundamentos de Machine Learning",
    description:
      "Introducción a la inteligencia artificial, algoritmos y modelos predictivos.",
    image: "/images/machine-learning.png",
    sections: [
      {
        subtitle: "Qué vas a aprender",
        body: "Este curso te dará una base sólida en Machine Learning. Explorarás los tipos de aprendizaje (supervisado, no supervisado), los principales algoritmos y cómo construir y evaluar modelos predictivos usando Python y librerías como Scikit-learn.",
      },
      {
        subtitle: "Requisitos previos",
        body: [
          "Conocimientos sólidos de Python",
          "Conocimientos básicos de álgebra lineal y estadística",
          "Una computadora con acceso a internet",
          "Software necesario instalado (Python, Anaconda/Jupyter)",
        ],
      },
    ],
    modules: [
      {
        id: 1,
        title: "Introducción a Machine Learning",
        description:
          "Explora qué es Machine Learning, sus aplicaciones y la diferencia entre aprendizaje supervisado y no supervisado.",
        lessons: [
          "Conceptos clave (features, target, model)",
          "Tipos de aprendizaje (supervisado, no supervisado)",
          "El ciclo de vida de un proyecto de Machine Learning",
          "Introducción a Scikit-learn",
        ],
        duration: "Duración: 2 horas",
      },
      {
        id: 2,
        title: "Algoritmos de Regresión",
        description:
          "Aprende a predecir valores continuos con los algoritmos de regresión más comunes.",
        lessons: [
          "Regresión lineal simple y múltiple",
          "Evaluación de modelos de regresión (MAE, MSE, R²)",
          "Regresión Polinomial y Ridge Regression",
          "Overfitting y Underfitting",
        ],
        duration: "Duración: 3 horas",
      },
      {
        id: 3,
        title: "Algoritmos de Clasificación",
        description:
          "Construye modelos para clasificar datos en categorías discretas.",
        lessons: [
          "Regresión logística",
          "Árboles de decisión y Random Forests",
          "Máquinas de soporte vectorial (SVM)",
          "Evaluación de modelos de clasificación (Matriz de confusión, ROC Curve)",
        ],
        duration: "Duración: 3 horas",
      },
      {
        id: 4,
        title: "Clustering y Modelos no Supervisados",
        description:
          "Descubre patrones ocultos en datos sin etiquetas y agrupa información similar.",
        lessons: [
          "Algoritmo K-Means para clustering",
          "Análisis de componentes principales (PCA)",
          "Detección de anomalías",
          "Proyecto final: Análisis de un dataset no supervisado",
        ],
        duration: "Duración: 2.5 horas",
      },
    ],
    pricing: [{ plan: "Suscripción", price: 30 }, { plan: "Pago Único", price: 150 }],
  },
];
