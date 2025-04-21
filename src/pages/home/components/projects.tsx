import Wrapper from "@/ui/wrapper";
import {Element} from "react-scroll";
import {projects, personalProjects} from 'src/pages/home/helper/projects';
import {useMouse} from "src/functions/mouse";
import {motion} from "framer-motion";
import {useState} from "react";
import {useFloating, offset, flip, shift} from "@floating-ui/react";

const Project = ({project}: {project: (typeof projects)[0]}) => {
  const mouse = useMouse();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const {refs, floatingStyles} = useFloating({
    middleware: [offset(4), flip(), shift()],
    placement: "top"
  });

  return (
    <a
      data-cursor-size="0px"
      href={project.link}
      target="_blank"
    >
      <div
        onMouseMove={mouse.handleMouseMove}
        className="relative group duration-150 rounded-2xl backdrop-blur-xl bg-neutral-900/80 hover:bg-neutral-800/70 p-0.5 overflow-hidden"
      >
        <motion.div
          className="absolute bg-primary size-10 blur-lg z-0 group-hover:opacity-100 opacity-0 transition-opacity duration-200"
          transition={{duration: 0}}
          animate={{x: mouse.x - 20, y: mouse.y - 20}}
        />
        <div className="z-10 p-3 bg-neutral-950/60 backdrop-blur-xl rounded-2xl">
          <div className="relative rounded-xl overflow-hidden mb-2">
            <img
              className="group-hover:scale-105 duration-300 h-52"
              src={project.image}
            />
            <div className="absolute bottom-2 right-2 flex gap-2 [&_svg]:text-lg">
              {project.tech.map((o, i) => (
                <div key={o.name + i} className="relative">
                  <div
                    ref={openIndex === i ? refs.setReference : null}
                    className="bg-neutral-950 rounded-lg p-1 hover:[&_svg]:text-primary [&_svg]:transition"
                    onMouseEnter={() => setOpenIndex(i)}
                    onMouseLeave={() => setOpenIndex(null)}
                  >
                    {o.icon}
                  </div>

                  {openIndex === i && (
                    <div
                      ref={refs.setFloating}
                      style={floatingStyles}
                      className="bg-black text-white text-sm p-1 rounded shadow-lg w-max"
                    >
                      {o.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="mb-4 text-lg">{project.title}</p>
          <p className="opacity-70">{project.desc}</p>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  return (
    <Element name="projects">
      <Wrapper>
        <div className="mb-12">
          <h1 className="text-4xl mb-8 text-center">Projects</h1>
          <div className="grid grid-cols-2 gap-4">
            {projects.map((o) => (
              <Project key={o.title} project={o} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-4xl mb-8 text-center">Personal Projects</h1>
          <div className="grid grid-cols-2 gap-4">
            {personalProjects.map((o) => (
              <Project key={o.title} project={o} />
            ))}
          </div>
        </div>
      </Wrapper>
    </Element>
  );
};

export default Projects;
