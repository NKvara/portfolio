import {skills} from "@/pages/home/helper/skills";
import Wrapper from "@/ui/wrapper";
import {Element} from "react-scroll";

const SkillList = ({
  title,
  color,
  textColor,
  list
}: {
  title: string;
  color: string;
  textColor: string;
  list: typeof skills.languages;
}) => {
  return (
    <div>
      <h2 className="text-lg mb-2">{title}</h2>
      <div className="flex gap-4">
        {list.map((o) => (
          <div
            className="flex gap-2 items-center py-1.5 px-4 rounded-4xl"
            style={{backgroundColor: color, color: textColor}}
          >
            <p>{o.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <Wrapper>
      <Element
        name="skills"
        className="w-full bg-neutral-900/80 border-2 border-neutral-800/80 rounded-4xl p-8 backdrop-blur-xl"
      >
        <h1 className="text-4xl mb-8">Skills</h1>
        <SkillList
          title="Languages"
          list={skills.languages}
          color="#1e2c3d"
          textColor="#3079c6"
        />
      </Element>
    </Wrapper>
  );
};

export default Skills;
