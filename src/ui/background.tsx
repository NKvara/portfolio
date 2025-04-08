const Background = () => {
  return (
    <div className="fixed top-0 h-svh w-full bg-neutral-950 -z-10 pointer-events-none">
      <div className="absolute -inset-8 duration-200 [background-image:linear-gradient(to_right,#131421_1px,transparent_1px),linear-gradient(to_bottom,#131421_1px,transparent_1px)] [background-size:50px_50px]" />
      <div className="absolute -inset-8 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] bg-neutral-950" />
    </div>
  );
};

export default Background;
