import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify-icon/react";

const SkillConponent = styled.div`
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

interface skillTypes {
  skill: string;
}

const Skill: React.FC<skillTypes> = ({ skill }) => {
  return (
    <SkillConponent>
      <Icon icon={`devicon:${skill.toLowerCase()}`} />
      <div className="skillName">
        <div className="blur"></div>
        {skill}
      </div>
    </SkillConponent>
  );
};

export default Skill;
