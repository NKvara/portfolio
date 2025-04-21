import {skills} from "@/pages/home/helper/skills";
import Wrapper from "@/ui/wrapper";
import {Element} from "react-scroll";

const Skills = () => {
  return (
    <Element name="skills" className="w-full">
      <Wrapper>
        <h1 className="text-4xl mb-8 text-center">Skills</h1>
        <div className="grid grid-cols-6 gap-4">
          {skills.map((o) => (
            <div
              key={o.name}
              className="flex flex-col items-center justify-center border-2 border-neutral-800 bg-neutral-950/40 hover:bg-neutral-900/40 rounded-xl [&>svg]:text-3xl hover:[&>svg]:text-primary [&_svg]:transition duration-150 gap-2 py-4"
              data-cursor-exclusion
            >
              {o.icon}
              <p className="text-xs">{o.name}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </Element>
  );
};

export default Skills;
