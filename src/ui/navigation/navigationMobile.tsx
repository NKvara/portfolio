import {ReactNode, useEffect, useState} from "react";
import {Link, scrollSpy} from "react-scroll";
import {useColorContext} from "@/functions/colorContext";
import {navigation} from "@/ui/navigation/helper";
import {motion} from "framer-motion";

const iconStyle = {
  on: {
    marginLeft: 8,
    left: 0,
    transform: "translateX(0%)"
  },
  off: {
    marginLeft: 0,
    left: "50%",
    transform: "translateX(-50%)"
  }
};

const nameStyle = {
  on: {
    marginRight: 8,
    right: 0,
    transform: "translateX(0%)",
    opacity: 100
  },
  off: {
    marginRight: 0,
    right: "50%",
    transform: "translateX(50%)",
    opacity: 0
  }
};

const NavigationMobile = ({children}: {children: ReactNode}) => {
  const {setColor} = useColorContext();
  const [active, setActive] = useState(0);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <div>
      <div className="fixed bottom-0 w-full flex bg-neutral-900/90 border border-neutral-800/90 backdrop-blur-lg z-50 justify-between items-center h-[72px] [&_svg]:text-2xl px-4 py-1.5 pb-4">
        {navigation.map((o, i) => (
          <Link
            key={"navigation" + o.name}
            className="flex justify-center flex-1 h-full relative duration-150 text-lg cursor-pointer capitalize transition-all"
            to={o.name}
            smooth
            spy
            offset={-50}
            onSetActive={() => {
              setColor(o.color);
              setActive(i);
            }}
            duration={400}
          >
            <div
              className="flex justify-center items-center relative px-2 rounded-full transition"
              style={{
                color: i === active ? "var(--color-primary)" : "white"
              }}
            >
              <div className="flex gap-2 opacity-0 text-base">
                {o.icon}
                {o.name}
              </div>
              <motion.p
                className="absolute"
                initial={i === active ? iconStyle.on : iconStyle.off}
                animate={i === active ? iconStyle.on : iconStyle.off}
              >
                {o.icon}
              </motion.p>
              <motion.p
                className="absolute text-base"
                initial={i === active ? nameStyle.on : nameStyle.off}
                animate={i === active ? nameStyle.on : nameStyle.off}
              >
                {o.name}
              </motion.p>
            </div>
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
};

export default NavigationMobile;
