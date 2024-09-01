import React from "react";
import styles from "../Styles/ComponentsModule/MouseHandler.module.scss";
import useMousePosition from "../Hooks/useMousePosition";

const MouseHandler: React.FC = () => {
  const { xy, xyHandler } = useMousePosition();

  return (
    <div onMouseMove={xyHandler}>
      <div
        className={styles.pointer}
        style={{
          transform: `translate(${xy.x}px, ${xy.y}px)`,
        }}
      />
    </div>
  );
};

export default MouseHandler;
