
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "connect",
    title: "Connect",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "i did work.",
    ],
  },
  {
    title: "Half-Stack Developer",
    company_name: "Sigma",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2020 - present",
    points: [
      "test sentence 1.",
      "test sentence 2.",
    ],
  }

];

const testimonials = [
  {
    testimonial:
      "Testimonial 1",
    name: "Name 1",
    designation: "Title 1",
    company: "Company 1",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a smarter person.",
    name: "me",
    designation: "superman",
    company: "yes",
    image: secondTestimonial,
  },
  {
    testimonial:
      "i love arham hes so cool",
    name: "me too",
    designation: "CTO",
    company: "sigma",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Tekisky Mart",
    description:
      "Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "GearXpert",
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "GoGroove-Ecommerce",
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
