import React from "react";
import NavBar from "./NavBar";
import styles from "../Styles/ComponentsModule/Layout.module.scss";
import useMousePosition from "../Hooks/useMousePosition";

const Layout = (props: { children: React.ReactNode }) => {
  const { xy, xyHandler } = useMousePosition();

  return (
    <div onMouseMove={xyHandler}>
      <div
        className={styles.pointer}
        style={{
          transform: `translate(${xy.x}px, ${xy.y}px)`,
        }}
      />
      <NavBar />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
