const Background = () => {
  return (
    <div className="fixed top-0 h-svh w-full bg-neutral-950 -z-10 pointer-events-none">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, #131421 1px, transparent 1px), linear-gradient(to bottom, #131421 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
        className="absolute -inset-8 duration-200"
      />
      <div className="absolute -inset-8 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] bg-neutral-950" />
    </div>
  );
};

export default Background;
