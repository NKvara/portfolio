import useSoundVisualizer from "@/functions/sound";
import {motion, useScroll} from "framer-motion";
import {LuDownload} from "react-icons/lu";
import {Element} from "react-scroll";
import {letters} from "src/pages/home/helper/letters";
import {TfiMouse} from "react-icons/tfi";
import {HiChevronDown} from "react-icons/hi2";
import {useEffect, useState} from "react";

const About = () => {
  const sound = useSoundVisualizer();
  const {scrollY} = useScroll();
  const [currentY, setCurrentY] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setCurrentY(latest);
    });

    return () => unsubscribe(); // Cleanup when unmount
  }, [scrollY]);

  return (
    <Element
      name="home"
      className="h-svh w-full flex flex-col justify-center items-center text-center font-bold"
    >
      <h2 className="text-xl mb-1">I am Nika Kvaratskhelia,</h2>
      <h1 className="text-8xl mb-2">
        I make{" "}
        <span className="flex">
          {letters.map((o, i) => (
            <div
              key={o.letter + i}
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
      <p className="opacity-80 text-sm mb-8">
        Front-end developer from Tbilisi, Georgia.
      </p>
      <div data-cursor-color={"#f3f87f"} data-cursor-exclusion>
        <button className="relative inline-flex h-12 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
          <a download href="/portfolio/pdf/NikaKvaratskhelia2025.pdf">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#145791_0%,#7299f4_50%,#333eff_100%)]"></span>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-neutral-900 hover:bg-neutral-800 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
              Downlaod CV
              <LuDownload />
            </span>
          </a>
        </button>
      </div>

      <motion.div
        className="absolute bottom-8 [&>svg]:text-4xl"
        animate={{y: ["0%", "-30%", "0%"]}}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
        style={{
          opacity: currentY > 120 ? 0 : 100,
          transition: "opacity 0.4s ease"
        }}
      >
        <TfiMouse />
        <HiChevronDown />
      </motion.div>
    </Element>
  );
};

export default About;
