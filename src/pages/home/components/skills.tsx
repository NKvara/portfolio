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
      <h2 className="text-lg mb-3">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {list.map((o) => (
          <div
            className="flex gap-2 items-center py-1.5 px-4 rounded-4xl h-min"
            style={{backgroundColor: color, color: textColor}}
          >
            <p>{o}</p>
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
        <div className="flex flex-col gap-6">
          <SkillList
            title="Languages"
            list={skills.languages}
            color="#02303C"
            textColor="#06B4DB"
          />
          <SkillList
            title="Frameworks"
            list={skills.frameworks}
            color="#063825"
            textColor="#16DB93"
          />
          <SkillList
            title="Styling"
            list={skills.styling}
            color="#393705"
            textColor="#EFEA5A"
          />
          <SkillList
            title="Development Tools"
            list={skills.developmentTools}
            color="#23074B"
            textColor="#A26AF1"
          />
          <SkillList
            title="Backend"
            list={skills.backend}
            color="#391F05"
            textColor="#F29E4C"
          />
        </div>
      </Element>
    </Wrapper>
  );
};

export default Skills;
