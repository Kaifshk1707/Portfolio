import { useEffect, useState } from "react";

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return undefined;

    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY, active: true });
    };

    document.addEventListener("pointermove", handleMove, { passive: true });
    return () => document.removeEventListener("pointermove", handleMove);
  }, []);

  return position;
}
