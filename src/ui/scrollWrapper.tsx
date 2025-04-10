import {useEffect, ReactNode} from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({children}: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1 // Smoothness
    });

    function update(time: number) {
      lenis.raf(time);
      requestAnimationFrame(update); // Calls lenis.raf more frequently
    }

    requestAnimationFrame(update); // Start the animation frame loop

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
