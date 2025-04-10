import {motion, useScroll} from "framer-motion";

const ScrollBar = () => {
  const {scrollYProgress} = useScroll();

  return (
    <motion.div
      className="fixed right-0 top-0 bg-primary w-1.5 z-50 h-svh origin-top"
      style={{scaleY: scrollYProgress}}
    />
  );
};

export default ScrollBar;
