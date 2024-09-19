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
import SkyMaestro from "../../Assets/Images/ProjectImg/Sky-maestro.png";

const Project: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headline}>Project</div>
      <div className={styles.contents}>
        <ProjectModal />
        <ProjectCard
          projectImg={SkyMaestro}
          projectName="Sky-Maestro"
          projectDes="공공 API 데이터를 이용한 항공편 검색, 환율 정보 및 공항 서비스를 확인
          할 수 있는 사이트입니다."
          siteLink=""
          gitLink="https://github.com/G-jjunny/Sky_Maestro"
          skills={["React", "TypeScript", "NodeJS", "MongoDB", "Postman"]}
          description={
            "엘리스 팀 프로젝트로 공공 API를 이용한 인천공항 항공편 조회, 편의시설 및 국가별 환율을 확인 할 수 있는 서비스입니다. 공공API 프록시 설정 및 팀원과의 협업을 경험 할 수 있었던 프로젝트입니다. 프로젝트 종료 이후에 보완해야 할 부분을 지속적으로 업데이트 할 예정입니다."
          }
        />
        <ProjectCard
          projectImg={WoodOne}
          projectName="WoodOne 원목마루 회사 홈페이지"
          projectDes="원목마루 시공 및 컨설팅 회사의 사이트입니다."
          siteLink="https://woodone.co.kr/"
          gitLink=""
          skills={["React", "Sass", "Figma"]}
          description={
            '원목마루 시공 및 컨설팅 회사 "우드원"의 사이트입니다. React를 기반으로 제작하였으며, Sass와 styled-component로 스타일링 하였습니다. 구성으로는 회사의 소개 및 마루의 샘플 사진을 볼 수 있고 이메일 문의 기능을 구현하였습니다.'
          }
        />
        <ProjectCard
          projectImg={Portfolio}
          projectName="포트폴리오 사이트"
          projectDes="저만의 포트폴리오 사이트입니다."
          siteLink=""
          gitLink="https://github.com/G-jjunny/Portfolio2024"
          skills={["React", "TypeScript", "Redux", "Sass", "Figma"]}
          description={
            "React와 TypeScript를 사용하여 만든 저만의 포트폴리오 입니다. Figma로 기본 UI구성을 만들면서 작업을 하였고 상태관리로는 Redux-toolkit을 이용하였습니다."
          }
        />
        <ProjectCard
          projectImg={Poketmon}
          projectName="포켓몬 도감 사이트"
          projectDes="포켓몬 API를 이용한 포켓몬 도감 사이트입니다."
          siteLink=""
          gitLink="https://github.com/G-jjunny/PokemonApp"
          skills={["React", "ViteJS", "TypeScript", "Redux", "TailwindCss"]}
          description={
            "평소 좋아하던 포켓몬에 관한 API를 알게되어 Redux학습을 위해 만든 사이트입니다. TypeScript기반 React + Vite를 사용하여 프로젝트를 진행하였으며 API에서 제공하는 포켓몬의 정보를 Redux를 사용해 상태 관리를 하여 도감을 만들고 Google 로그인 기능을 포함하였습니다."
          }
        />
        <ProjectCard
          projectImg={Starbucks}
          projectName="스타벅스 클론코딩"
          projectDes="퍼블리싱 능력을 키우기 위한 스타벅스 클론코딩입니다."
          siteLink="https://velvety-selkie-fca6b5.netlify.app/"
          gitLink=""
          skills={["HTML5", "CSS3", "JavaScript"]}
          description={
            "퍼블리싱 능력을 기르기 위한 스타벅스 클론코딩으로 HTML과 CSS, JavaScript로 작업을 하였으면 메인 페이지 및 로그인 페이지를 구현하였습니다."
          }
        />
        <ProjectCard
          projectImg={SinkwangCar2}
          projectName="신광자동차 공업소 홈페이지"
          projectDes="학부시절 산학협력 프로젝트로 진행한 신광자동차 공업소 사이트 제작 프로젝트입니다."
          siteLink="http://sinkwangcar.com/"
          gitLink=""
          skills={["React"]}
          description={`학부시절 산학협력 프로젝트이며 신광자동차 공업소 홍보 사이트로 현재 서비스중인 사이트입니다. React와 styled-components 등으로 구현하였으며 기능으로는 email.js를 이용한 이메일 전송 기능을 구현하였습니다.`}
        />
        <ProjectCard
          projectImg={SMU}
          projectName="세명대학교 캡스톤 디자인 경연대회"
          projectDes="학부시절 진행한 프로젝트로 클롤링을 통한 데이터수집 및 R을 사용해 시각화한 데이터를 보여주는 사이트"
          siteLink="https://inquisitive-pudding-73ca93.netlify.app/"
          gitLink=""
          skills={["HTML5", "CSS3", "JavaScript", "Bootstrap", "R"]}
          description={
            "세명대학교 캡스톤 디자인 경연대회 프로젝트로 텍스톰을 이용한 데이터 수집, R을 이용해 데이터를 분석 및 시각화한 데이터를 이용하여 년도 별로 정리해 만든 사이트 입니다."
          }
        />
      </div>
    </div>
  );
};

export default Project;
