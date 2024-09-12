import React from "react";
import styles from "../../Styles/ComponentsModule/TechStack.module.scss";
import styled from "styled-components";
import { Icon } from "@iconify-icon/react";

interface Description {
  techName: string;
  techDes: string[];
  nodes: string[];
}

const TechNode = styled.div`
  padding: 5px 8px;
  background-color: transparent;
  border-radius: 10px;
  font-size: 16px;
  color: var(--light);
  border: 2px solid var(--light);
  cursor: pointer;
  transition: all.3s;
  &:hover {
    background-color: var(--gray-bright);
    color: var(--dark);
    box-shadow: 0 0 5px 3px var(--mid);
  }
  display: flex;
  gap: 5px;
  align-content: center;
  .icon {
    font-size: 25px;
    height: 25px;
    align-items: center;
  }
  .iconName {
    align-content: center;
  }
`;

const TechDescription: React.FC<Description> = ({
  techName,
  techDes,
  nodes,
}) => {
  return (
    <>
      <div className={styles.TechName}>{techName}</div>
      <ul className={styles.TechDes}>
        {techDes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className={styles.techNode}>
        {nodes.map((item, index) => (
          <TechNode key={index}>
            <div className="icon">
              {item === "StyledComponents" ? (
                <Icon icon={`skill-icons:${item.toLowerCase()}`} />
              ) : (
                <Icon icon={`devicon:${item.toLowerCase()}`} />
              )}
            </div>
            <div className="iconName">{item.split("-")[0]}</div>
          </TechNode>
        ))}
      </div>
    </>
  );
};

const TechStack: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headline}>Tech Stack</div>
      <TechDescription
        techName="Dev Tech."
        techDes={[
          "React를 사용하여 사용자 인터페이스를 구축하고, 컴포넌트 기반 아키텍처를 통해 재사용성과 유지보수성을 강조하기 위하여 지속적인 노력을 하고있습니다.",
          "CSS, SCSS, Styled-Components 등을 통해 디자인 결과물과 흡사하게 웹에 구현에 어려움이 없으며 반응형 웹 개발이 가능합니다.",
        ]}
        nodes={[
          "HTML5",
          "CSS3",
          "JavaScript",
          "TypeScript",
          "React",
          "ViteJS",
          "Redux",
          "NodeJS",
          "MongoDB",
          "Postman",
          "StyledComponents",
          "Sass",
          "Bootstrap",
          "MaterialUI",
          "antDesign",
        ]}
      />
      <TechDescription
        techName="Design & Tool."
        techDes={[
          "프로그래밍 능력에 더해 UI/UX 설계를 위해 Figma를 사용할 수 있습니다",
          "코드 에디터로는 Visual Studio Code를 활용하여 작업을 하고있으며,",
          "협업 도구로는 Git을 기반으로한 GitHub플랫폼을 사용하여 프로젝트 관리를 하고있습니다.",
        ]}
        nodes={["Figma", "vscode", "Netlify"]}
      />
    </div>
  );
};

export default TechStack;
