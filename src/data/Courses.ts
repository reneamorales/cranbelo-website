import type { Course } from "../types/Course";

import image1 from '../assets/img/courses/container-image.png';

const courses: Course[] = [
  {
    id: 1,
    title: 'Desarrollo Web Full Stack',
    image: image1,
    description: 'Aprende a crear aplicaciones web completas desde cero, dominando el frontend y el backend.'
  },
  {
    id: 2,
    title: 'Introducción a la Inteligencia Artificial',
    image: image1,
    description: 'Descubre los fundamentos de la IA, el Machine Learning y sus aplicaciones en el mundo real.'
  },
  {
    id: 3,
    title: 'Ciencia de Datos con Python',
    image: image1,
    description: 'Explora el análisis de datos, la visualización y el uso de librerías como Pandas y Matplotlib.'
  },
  {
    id: 4,
    title: 'Desarrollo de Apps Móviles con React Native',
    image: image1,
    description: 'Crea aplicaciones nativas para iOS y Android utilizando un solo código base con React Native.'
  },
  {
    id: 5,
    title: 'Ciberseguridad y Hacking Ético',
    image: image1,
    description: 'Adquiere las habilidades necesarias para proteger sistemas y redes, y conviértete en un experto en seguridad.'
  },
  {
    id: 6,
    title: 'Cloud Computing con AWS',
    image: image1,
    description: 'Aprende a desplegar y gestionar aplicaciones en la nube con Amazon Web Services, el líder del mercado.'
  },
  {
    id: 7,
    title: 'UX/UI Design: Diseño de Experiencia de Usuario',
    image: image1,
    description: 'Domina los principios del diseño centrado en el usuario y crea interfaces intuitivas y atractivas.'
  },
  {
    id: 8,
    title: 'Blockchain y Criptomonedas',
    image: image1,
    description: 'Entiende la tecnología detrás de Bitcoin y Ethereum y sus aplicaciones más allá de las finanzas.'
  },
  {
    id: 9,
    title: 'Fundamentos de Redes y Sistemas Operativos',
    image: image1,
    description: 'Conoce cómo funcionan las redes de computadoras y los sistemas operativos a un nivel fundamental.'
  },
  {
    id: 10,
    title: 'Introducción a DevOps',
    image: image1,
    description: 'Descubre cómo automatizar el ciclo de vida del software, desde el desarrollo hasta la operación.'
  },
  {
    id: 11,
    title: 'Programación con C# y .NET',
    image: image1,
    description: 'Aprende a desarrollar aplicaciones robustas y escalables con uno de los frameworks más populares.'
  }
];

export default courses;