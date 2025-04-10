import {useState} from "react";

export const useMouse = () => {
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

  return {
    x: position.x,
    y: position.y,
    handleMouseMove
  };
};
