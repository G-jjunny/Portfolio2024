import { useState, useCallback, MouseEvent } from "react";

interface XY {
  x: number;
  y: number;
}

const useMousePosition = () => {
  const [xy, setXY] = useState<XY>({ x: 0, y: 0 });

  const xyHandler = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setXY({ x: mouseX, y: mouseY });
  }, []);

  return { xy, xyHandler };
};

export default useMousePosition;
