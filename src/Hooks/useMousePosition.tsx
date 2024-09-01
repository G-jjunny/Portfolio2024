import { useState, useCallback, MouseEvent } from "react";

interface XY {
  x: number;
  y: number;
}

const useMousePosition = () => {
  const [xy, setXY] = useState<XY>({ x: 0, y: 0 });

  const xyHandler = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const mouseX = e.pageX; // 페이지 전체에서의 마우스 X 위치
    const mouseY = e.pageY; // 페이지 전체에서의 마우스 Y 위치

    setXY({ x: mouseX, y: mouseY });
  }, []);

  return { xy, xyHandler };
};

export default useMousePosition;
