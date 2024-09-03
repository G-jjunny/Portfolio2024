import React from "react";
import styles from "../../Styles/ComponentsModule/Education.module.scss";
import styled from "styled-components";
import { Icon } from "@iconify-icon/react";

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  /* aspect-ratio: 1/1; */
  padding: 20px;
  background-color: var(--second);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  text-align: start;
  color: var(--mid);

  .category {
    color: var(--white);
    font-weight: 700;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 1px solid var(--mid);
    padding-bottom: 20px;
    .group {
      font-size: 26px;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    line-height: 20px;
    margin-bottom: auto;
    li {
      padding-left: 10px;
    }
  }

  .skills {
    margin-top: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;
const Skill = styled.div`
  padding: 15px;
  background-color: var(--black);
  font-size: 32px;
  border-radius: 10%;
  position: relative;
  overflow: hidden;
  .blur {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10%;
    background-color: var(--black);
    opacity: 0;
    transition: all.3s;
    color: var(--light);
    text-align: center;
    &:hover {
      opacity: 1;
      filter: blur(20px);
    }
  }
  .skillName {
    position: absolute;
    text-align: center;
    align-content: center;
    top: 0;
    left: 0;
    font-size: 12px;
    width: 100%;
    height: 100%;
    color: var(--white);
    opacity: 0;
    transition: all.3s;
    &:hover {
      opacity: 1;
    }
  }
`;

interface CardType {
  day: string;
  groupName: string;
  groupDes: string[];
  contents: string[];
  skills: string[];
}

const Edu: React.FC<CardType> = ({
  day,
  groupName,
  groupDes,
  contents,
  skills,
}) => {
  return (
    <StyledCard>
      <div className="day">{day}</div>
      <div className="category">
        <div className="group">{groupName}</div>
        {groupDes.map((i, index) => (
          <div key={index}>@ {i}</div>
        ))}
      </div>
      <ul className="description">
        {contents.map((item, index) => (
          <li key={index}>- {item}</li>
        ))}
      </ul>
      <div className="skills">
        {skills.map((i, index) => (
          <Skill key={index}>
            <Icon icon={`devicon:${i.toLowerCase()}`} />
            <div className="skillName">
              <div className="blur"></div>
              {i}
            </div>
          </Skill>
        ))}
      </div>
    </StyledCard>
  );
};

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <Edu
          day="2024.04 ~ 2024.08"
          groupName="엘리스"
          groupDes={["엘리스 프론트엔드&백엔드 웹 개발자 트랙 수료"]}
          contents={[""]}
          skills={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "Redux",
            "NodeJS",
            "MongoDB",
            "Postman",
          ]}
        />
        <Edu
          day="2017.03 ~ 2023.02"
          groupName="세명대학교"
          groupDes={[
            "전공 : 컴퓨터 시스템학, 소프트웨어학",
            "부전공 : 빅데이터 의료융합학",
          ]}
          contents={[
            "자료구조 ,데이터베이스 등 CS지식 및 프로그래밍 언어 학습",
            "자료구조 ,데이터베이스 등 CS지식 및 프로그래밍 언어 학습",
          ]}
          skills={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Flutter",
            "Dart",
            "Unity",
            "R",
          ]}
        />
      </div>
    </div>
  );
};

export default Education;
