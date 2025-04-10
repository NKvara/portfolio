import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {BiLogoTypescript} from "react-icons/bi";
import {SiSquare, SiStrapi} from "react-icons/si";

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
      projectIcons.Strapi,
      projectIcons.Square
    ]
  }
];
