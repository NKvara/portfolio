import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {BiLogoTypescript} from "react-icons/bi";
import {SiFramer, SiSquare, SiStrapi, SiVite} from "react-icons/si";

const projectIcons = {
  Typescript: {
    name: "Typescript",
    icon: <BiLogoTypescript />
  },
  Next: {
    name: "Next.js",
    icon: <RiNextjsFill />
  },
  Strapi: {
    name: "Strapi",
    icon: <SiStrapi />
  },
  Tailwind: {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />
  },
  Square: {
    name: "Square",
    icon: <SiSquare />
  },
  Vite: {
    name: "Vite",
    icon: <SiVite />
  },
  Framer: {
    name: "Framer Motion",
    icon: <SiFramer />
  }
};

export const projects = [
  {
    title: "Iberia Georgian Restaurant",
    desc: "Adipisicing nisi officia nostrud veniam dolore sit occaecat anim Lorem.",
    image: "/portfolio/projects/Iberia.jpg",
    link: "",
    tech: [
      projectIcons.Typescript,
      projectIcons.Next,
      projectIcons.Tailwind,
      projectIcons.Framer,
      projectIcons.Strapi,
      projectIcons.Square
    ]
  }
];

export const personalProjects = [
  {
    title: "Portfolio",
    desc: "Adipisicing nisi officia nostrud veniam dolore sit occaecat anim Lorem.",
    image: "/portfolio/projects/Portfolio.jpg",
    link: "",
    tech: [
      projectIcons.Typescript,
      projectIcons.Vite,
      projectIcons.Tailwind,
      projectIcons.Framer
    ]
  }
];
