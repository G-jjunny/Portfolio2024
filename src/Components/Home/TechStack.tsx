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
        {techDes.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div className={styles.techNode}>
        {nodes.map((item, index) => (
          <TechNode key={index}>
            <div className="icon">
              <Icon icon={`skill-icons:${item.toLowerCase()}`} />
            </div>
            <div className="iconName">{item}</div>
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
          "React를 사용하여 사용자 인터페이스를 구축하고, 컴포넌트 기반 아키텍처를 통해 재사용성과 유지보수성을 강조하기 위하여 지속적인 노력을 하고있습니다.",
        ]}
        nodes={["HTML", "CSS", "JavaScript", "TypeScript", "NodeJS-light"]}
      />
      <TechDescription
        techName="Design & Tool."
        techDes={[
          "Sketch와 Figma를 사용하여 UI/UX 디자인을 수행하고 있습니다.",
          "Adobe XD를 통해 인터랙티브한 프로토타이핑을 진행하고 있습니다.",
        ]}
        nodes={["Figma-light"]}
      />
    </div>
  );
};

export default TechStack;
