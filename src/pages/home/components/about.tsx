import useSoundVisualizer from "@/functions/sound";
import {Element} from "react-scroll";
import {letters} from "src/pages/home/helper/letters";

const About = () => {
  const sound = useSoundVisualizer();

  return (
    <Element
      name="home"
      className="h-svh w-full flex flex-col justify-center items-center text-center font-bold"
    >
      <h2 className="text-xl mb-1">I am Nika Kvaratskhelia,</h2>
      <h1 className="text-8xl mb-2">
        I make{" "}
        <span className="flex">
          {letters.map((o) => (
            <div
              className="text-transparent bg-clip-text"
              data-cursor-color={"#f3f87f"}
              data-cursor-exclusion
              onClick={() => {
                sound.setPath(o.sound);
                sound.handlePlaySound();
              }}
            >
              <p
                style={{
                  color: o.color,
                  textShadow: `${o.color} ${
                    sound.path === o.sound ? 10 * sound.size : 0
                  }px 0 ${sound.path === o.sound ? 1000 * sound.size : 0}px`
                }}
              >
                {o.letter}
              </p>
            </div>
          ))}
        </span>
      </h1>
      <p className="opacity-80 text-sm">
        Front-end developer based in Georgia.
      </p>
    </Element>
  );
};

export default About;
