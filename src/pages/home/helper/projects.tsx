import {RiFirebaseFill, RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {BiLogoTypescript} from "react-icons/bi";
import {SiFramer, SiSquare, SiStrapi, SiVite} from "react-icons/si";
import {GrGraphQl} from "react-icons/gr";
import {PiBracketsCurlyBold} from "react-icons/pi";

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
  },
  GraphQL: {
    name: "GraphQL",
    icon: <GrGraphQl />
  },
  Firebase: {
    name: "Firebase",
    icon: <RiFirebaseFill />
  },
  RestAPI: {
    name: "Rest API",
    icon: <PiBracketsCurlyBold />
  }
};

export const projects = [
  {
    title: "Iberia Georgian Restaurant",
    desc: "Adipisicing nisi officia nostrud veniam dolore sit occaecat anim Lorem.",
    image: "/portfolio/projects/Iberia.jpg",
    link: "https://iberia-five.vercel.app/",
    tech: [
      projectIcons.Typescript,
      projectIcons.Next,
      projectIcons.Tailwind,
      projectIcons.Framer,
      projectIcons.Strapi,
      projectIcons.Square
    ]
  },
  {
    title: "Rebank - Internet Bank",
    desc: "Adipisicing nisi officia nostrud veniam dolore sit occaecat anim Lorem.",
    image: "/portfolio/projects/rebank.jpg",
    link: "https://ibank.rebank.ge",
    tech: [
      projectIcons.Typescript,
      projectIcons.Vite,
      projectIcons.Tailwind,
      projectIcons.RestAPI,
      projectIcons.Firebase
    ]
  },
  {
    title: "Rebank - Website",
    desc: "Adipisicing nisi officia nostrud veniam dolore sit occaecat anim Lorem.",
    image: "/portfolio/projects/rebank-site.jpg",
    link: "https://rebank.ge",
    tech: [
      projectIcons.Typescript,
      projectIcons.Next,
      projectIcons.Tailwind,
      projectIcons.GraphQL,
      projectIcons.Strapi
    ]
  }
];

export const personalProjects = [
  {
    title: "Portfolio",
    desc: "Adipisicing nisi officia nostrud veniam dolore sit occaecat anim Lorem.",
    image: "/portfolio/projects/Portfolio.jpg",
    link: "https://nkvara.github.io/portfolio/",
    tech: [
      projectIcons.Typescript,
      projectIcons.Vite,
      projectIcons.Tailwind,
      projectIcons.Framer
    ]
  },
  {
    title: "Aquarium",
    desc: "Adipisicing nisi officia nostrud veniam dolore sit occaecat anim Lorem.",
    image: "/portfolio/projects/aquarium.jpg",
    link: "https://nkvara.github.io/aquarium/",
    tech: [
      projectIcons.Typescript,
      projectIcons.Vite,
      projectIcons.Tailwind,
      projectIcons.Framer
    ]
  }
];
