import React from "react";
import styles from "../../Styles/ComponentsModule/Project.module.scss";
import ProjectCard from "./ProjectCard";
import WoodOne from "../../Assets/Images/ProjectImg/woodone_Project_Img.png";
import SinkwangCar2 from "../../Assets/Images/ProjectImg/SinkwangCar_Project_Img2.png";
import Portfolio from "../../Assets/Images/ProjectImg/Portfolio.png";
import SMU from "../../Assets/Images/ProjectImg/SMUMemory.png";
import Poketmon from "../../Assets/Images/ProjectImg/Poketmon.png";
import Starbucks from "../../Assets/Images/ProjectImg/starbucks.png";
import ProjectModal from "../ProjectModal";

const Project: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headline}>Project</div>
      <div className={styles.contents}>
        <ProjectCard
          projectImg={""}
          projectName="Sky-Maestro"
          projectDes="공공 API 데이터를 이용한 항공편 검색, 환율 정보 및 공항 서비스를 확인
          할 수 있는 사이트입니다."
          siteLink=""
          gitLink="https://github.com/G-jjunny/Sky_Maestro"
        />
        <ProjectCard
          projectImg={WoodOne}
          projectName="WoodOne 원목마루 회사 홈페이지"
          projectDes="원목마루 시공 및 컨설팅 회사의 사이트입니다."
          siteLink="https://woodone.co.kr/"
          gitLink=""
        />
        <ProjectCard
          projectImg={Portfolio}
          projectName="포트폴리오 사이트"
          projectDes="저만의 포트폴리오 사이트입니다."
          siteLink=""
          gitLink="https://github.com/G-jjunny/Portfolio2024"
        />
        <ProjectCard
          projectImg={Poketmon}
          projectName="포켓몬 도감 사이트"
          projectDes="포켓몬 API를 이용한 포켓몬 도감 사이트입니다."
          siteLink=""
          gitLink="https://github.com/G-jjunny/PokemonApp"
        />
        <ProjectCard
          projectImg={Starbucks}
          projectName="스타벅스 클론코딩"
          projectDes="퍼블리싱 능력을 키우기 위한 스타벅스 클론코딩입니다."
          siteLink="https://velvety-selkie-fca6b5.netlify.app/"
          gitLink=""
        />
        <ProjectCard
          projectImg={SinkwangCar2}
          projectName="신광자동차 공업소 홈페이지"
          projectDes="학부시절 산학협력 프로젝트로 진행한 신광자동차 공업소 사이트 제작 프로젝트입니다."
          siteLink="http://sinkwangcar.com/"
          gitLink=""
        />
        <ProjectCard
          projectImg={SMU}
          projectName="세명대학교 캡스톤 디자인 경연대회"
          projectDes="학부시절 진행한 프로젝트로 클롤링을 통한 데이터수집 및 R을 사용해 시각화한 데이터를 보여주는 사이트"
          siteLink="https://inquisitive-pudding-73ca93.netlify.app/"
          gitLink=""
        />
      </div>
    </div>
  );
};

export default Project;
