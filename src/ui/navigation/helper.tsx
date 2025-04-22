import {FaGithub, FaLinkedin} from "react-icons/fa";
import {IoIosHome, IoMdMail} from "react-icons/io";
import {IoLayers} from "react-icons/io5";
import toast from "react-hot-toast";
import {BsPersonWorkspace} from "react-icons/bs";

export const navigation = [
  {name: "home", color: "#131421", icon: <IoIosHome />},
  {name: "skills", color: "#0E0E13", icon: <IoLayers />},
  {name: "projects", color: "#0E0E13", icon: <BsPersonWorkspace />}
];

export const icons = [
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
      toast.dismiss();
      navigator.clipboard
        .writeText("nika.kvaratskhelia.01@gmail.com")
        .then(() => {
          toast.success("Email copied to clipboard");
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    }
  }
];
