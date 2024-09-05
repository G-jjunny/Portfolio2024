import React from "react";
import styles from "../../Styles/ComponentsModule/Project.module.scss";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headline}>Project</div>
      <div className={styles.contents}>
        <ProjectCard
          projectImg="WoodOne"
          projectName="Sky-Maestro"
          projectDes="공공 api 데이터를 이용한 항공편 검색, 환율 정보 및 공항 서비스를 확인
          할 수 있는 사이트 입니다."
        />
        <ProjectCard
          projectImg=""
          projectName="WoodOne 원목마루 회사 홈페이지"
          projectDes=""
        />
        <ProjectCard projectImg="" projectName="" projectDes="" />
      </div>
    </div>
  );
};

export default Project;
