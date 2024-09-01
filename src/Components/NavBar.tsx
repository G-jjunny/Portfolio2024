import React from "react";
import styles from "../Styles/ComponentsModule/NavBar.module.scss";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className={`${styles.navContainer}`}>
      <div className={styles.contents}>
        <Link
          to={"https://github.com/G-jjunny"}
          target="_Blank"
          className={styles.navLink}
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
