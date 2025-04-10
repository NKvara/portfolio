import {ReactNode, useEffect} from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {IoMdMail} from "react-icons/io";
import toast from "react-hot-toast";
import {motion} from "framer-motion";
import {Link, scrollSpy} from "react-scroll";
import {GrDocumentPdf} from "react-icons/gr";
import {useMouse} from "src/functions/mouse";

const navigation = ["home", "skills", "projects", "experience"];

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
  },
  {
    icon: <GrDocumentPdf />,
    link: "/portfolio/pdf/NikaKvaratskhelia2025.pdf",
    download: true
  }
];

const Navigation = ({children}: {children: ReactNode}) => {
  const mouse = useMouse();

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <div>
      <div data-cursor-size="0px">
        <div
          onMouseMove={mouse.handleMouseMove}
          className="group/navbar flex max-w-fit fixed inset-x-0 top-8 mx-auto rounded-4xl bg-neutral-800/80 backdrop-blur-xl p-0.5 z-50 overflow-hidden"
        >
          <motion.div
            className="absolute bg-primary size-10 blur-lg z-0 group-hover/navbar:opacity-100 opacity-0 transition-opacity duration-200"
            transition={{duration: 0}}
            animate={{x: mouse.x - 20, y: mouse.y - 20}}
          />
          <div className="flex rounded-4xl bg-neutral-900/80 backdrop-blur-xl px-10 gap-8 py-3 z-10">
            <div className="flex justify-center items-center gap-8">
              {navigation.map((o) => (
                <Link
                  key={"navigation" + o}
                  className="hover:text-primary duration-150 text-lg cursor-pointer capitalize"
                  to={o}
                  smooth
                  spy
                  duration={500}
                  activeStyle={{
                    opacity: "1",
                    color: "var(--color-primary)"
                  }}
                >
                  {o}
                </Link>
              ))}
            </div>
            <div className="flex justify-center items-center gap-4">
              {icons.map((o, i) => (
                <a
                  key={"icons" + i}
                  className="[&>svg]:size-5 [&>svg]:duration-150 hover:[&>svg]:text-primary cursor-pointer"
                  href={o.link}
                  target="_blank"
                  onClick={o.func}
                  download={o.download}
                >
                  {o.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Navigation;
