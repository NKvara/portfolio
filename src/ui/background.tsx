import { useColorContext } from "@/functions/colorContext";

const Background = () => {
  const {color} = useColorContext();
  
  return (
    <div className="fixed top-0 h-lvh w-full bg-neutral-950 -z-10 pointer-events-none">
      <div
        style={{
          backgroundImage: `linear-gradient(to right, gray 2px, transparent 2px), linear-gradient(to bottom, gray 2px, transparent 2px)`,
          backgroundSize: "50px 50px",
          transitionProperty: "background-size, background-image",
          transitionDuration: "1s"
        }}
        className="absolute -inset-8 duration-200"
      />
      <div className="absolute -inset-8 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] bg-neutral-950" />
      <div
        style={{
          backgroundColor: color,
          transition: "background-color 1s ease"
        }}
        className="absolute inset-0 mix-blend-overlay"
      />
    </div>
  );
};

export default Background;
