import React from "react";
import styles from "../../Styles/ComponentsModule/Project.module.scss";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headline}>Project</div>
      <div className={styles.contents}>
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
