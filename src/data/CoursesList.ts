import type { CourseList } from "../types/CourseList";

import marketingDigital from "../assets/img/courses/marketing-digital-avanzado.webp";
import cienciaDeDatos from "../assets/img/courses/ciencia-de-datos.webp";
import disenoUXUI from "../assets/img/courses/diseño-ux-ui.webp";
import programacionBackend from "../assets/img/courses/programación-backend.webp";
import programacionFrontend from "../assets/img/courses/programacion-frontend.webp";
import chatbot101 from "../assets/img/courses/chatbot-1.webp";
import seo from "../assets/img/courses/estrategia-de-seo.webp";
import gestionDeProyectosAgiles from "../assets/img/courses/metodologías-ágiles.webp";
import fundamentosDeMachineLearning from "../assets/img/courses/machine-learning.webp";

const courses: CourseList[] = [
  {
    id: 1,
    slug: "marketing-digital-avanzado",
    title: "Marketing Digital Avanzado",
    image: marketingDigital,
    description:
      "Aprende a crear campañas publicitarias en Facebook, Instagram, Marketplace, y más. Domina las herramientas digitales para posicionar tu marca en el mercado.",
  },
  {
    id: 2,
    slug: "ciencia-de-datos",
    title: "Ciencia de Datos",
    image: cienciaDeDatos,
    description:
      "Domina el análisis de datos y aprende a tomar decisiones basadas en información sólida. Desde Python hasta el uso de SQL y visualización de datos, este curso te prepara para el futuro.",
  },
  {
    id: 3,
    slug: "diseno-ux-ui",
    title: "Diseño UX/UI",
    image: disenoUXUI,
    description:
      "String Descubre cómo diseñar interfaces atractivas y centradas en el usuario. Aprende a utilizar herramientas como Figma y Adobe XD para crear experiencias digitales memorables.",
  },
  {
    id: 4,
    slug: "programacion-backend",
    title: "Programación Backend",
    image: programacionBackend,
    description:
      "Desarrolla el lado servidor de las aplicaciones con tecnologías como Node.js, Python, y bases de datos relacionales. Domina la lógica y arquitectura que soporta las aplicaciones modernas.",
  },
  {
    id: 5,
    slug: "programacion-frontend",
    title: "Programación Frontend",
    image: programacionFrontend,
    description:
      "Conviértete en un desarrollador frontend experto. Aprende HTML, CSS, JavaScript y frameworks como React para crear aplicaciones web interactivas y modernas.",
  },
  {
    id: 6,
    slug: "chatbot-101",
    title: "Chatbot 101",
    image: chatbot101,
    description:
      "Aprende a crear chatbots que mejoren la experiencia del usuario en tu sitio web o aplicación. Domina herramientas como Dialogflow y técnicas de procesamiento de lenguaje natural.",
  },
  {
    id: 7,
    slug: "estrategias-de-seo",
    title: "Estrategías de SEO",
    image: seo,
    description:
      "Optimiza tu sitio web para motores de búsqueda y mejora su visibilidad. Aprende las mejores prácticas para atraer tráfico orgánico y mejorar tu posicionamiento.",
  },
  {
    id: 8,
    slug: "gestion-de-proyectos-agiles",
    title: "Gestión de Proyectos Ágiles",
    image: gestionDeProyectosAgiles,
    description:
      "Conoce las metodologías ágiles como Scrum y Kanban. Gestiona proyectos de manera eficiente y entrega valor continuamente a tus clientes.",
  },
  {
    id: 9,
    slug: "fundamentos-de-machine-learning",
    title: "Fundamentos de Machine Learning",
    image: fundamentosDeMachineLearning,
    description:
      "Introducción al aprendizaje automático. Aprende a construir modelos predictivos utilizando Python y librerías como scikit-learn.",
  },
];

export default courses;
