import {ReactNode} from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {IoMdMail} from "react-icons/io";
import toast from "react-hot-toast";

const redirects = [
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

const links = [
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
  return (
    <div>
      <div className="flex max-w-fit fixed inset-x-0 top-8 mx-auto bg-neutral-900 px-10 gap-5 py-3 rounded-4xl text-">
        <div className="flex justify-center items-center gap-4">
          {redirects.map((o) => (
            <a className="text-blue-500 text-lg" href={o.link}>
              {o.name}
            </a>
          ))}
        </div>
        <div className="flex justify-center items-center gap-3">
          {links.map((o) => (
            <a
              className="[&>svg]:size-5 [&>svg]:text-primary cursor-pointer"
              href={o.link}
              target="_blank"
              onClick={o.func && o.func}
            >
              {o.icon}
            </a>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Wrapper;
