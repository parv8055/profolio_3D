import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  seenunseen,
  tube,
  lyriks,
  amazon,
  imdb,
  mybooklo,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Content Creation",
    icon: backend,
  },
  {
    title: "Ui/Ux designer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Mern Stack Developer",
    company_name: "Ubgot software pvt ltd",
    icon: mybooklo,
    iconBg: "#383E56",
    date: "November 2022 - March 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "seenUnseen(ecommerce project)",
    demo:"https://seen-unseen.vercel.app/",
    description:
      "Full-stack web app using MongoDB, Express, React, and Node.js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "red-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: seenunseen,
    source_code_link: "https://github.com/",
  },
  {
    name: "Amazon(nextjs)",
    demo:"https://amazon-six-red.vercel.app/",
    description:
    "web app using next js",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/parv8055/amazon",
  },
  {
    name: "Tube(Reactjs)",
    demo:"https://tube-xi.vercel.app/",
    description:
    "web app using react js",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: tube,
    source_code_link: "https://github.com/parv8055/Tube",
  },
  {
    name: "lyriks(Reactjs)",
    demo:"https://lyriks-chi.vercel.app/",
    description:
    "web app using react js",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: lyriks,
    source_code_link: "https://github.com/parv8055/Lyriks",
  },
  {
    name: "imdb(Reactjs)",
    demo:"https://imdb-lac.vercel.app/",
    description:
    "web app using react js",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: imdb,
    source_code_link: "https://github.com/parv8055/Imdb",
  },
];

export { services, technologies, experiences, testimonials, projects };
