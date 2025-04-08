import {ReactNode, useState} from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {IoMdMail} from "react-icons/io";
import toast from "react-hot-toast";
import {motion} from "framer-motion";

const navigation = [
  {
    name: "Home",
    link: "#home"
  },
  {
    name: "About",
    link: "#about"
  },
  {
    name: "Hobbies",
    link: "#hobbies"
  }
];

const icons = [
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/nika-kvaratskhelia-a0224b1aa"
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/NKvara"
  },
  {
    icon: <IoMdMail />,
    func: () => {
      navigator.clipboard.writeText("nika.kvaratskhelia.01@gmail.com");
      toast.success("Email copied to clipboard");
    }
  }
];

const Wrapper = ({children}: {children: ReactNode}) => {
  const [position, setPosition] = useState({x: 0, y: 0});

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  };

  return (
    <div>
      <div
        onMouseMove={handleMouseMove}
        className="group/navbar flex max-w-fit fixed inset-x-0 top-8 mx-auto rounded-4xl bg-neutral-800/80 backdrop-blur-xl p-0.5 z-50 overflow-hidden"
      >
        <motion.div
          className="absolute bg-primary size-10 blur-lg z-0 group-hover/navbar:opacity-100 opacity-0 transition-opacity duration-200"
          transition={{duration: 0}}
          animate={{x: position.x-20, y: position.y-20}}
        />
        <div className="flex rounded-4xl bg-neutral-900/80 backdrop-blur-xl px-10 gap-5 py-3 z-10">
          <div className="flex justify-center items-center gap-4">
            {navigation.map((o) => (
              <a
                key={"navigation" + o.name}
                className="hover:text-blue-500 duration-150 text-lg"
                href={o.link}
              >
                {o.name}
              </a>
            ))}
          </div>
          <div className="flex justify-center items-center gap-3">
            {icons.map((o, i) => (
              <a
                key={"icons" + i}
                className="[&>svg]:size-5 [&>svg]:duration-150 hover:[&>svg]:text-primary cursor-pointer"
                href={o.link}
                target="_blank"
                onClick={o.func}
              >
                {o.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Wrapper;
