import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardComponents = styled.div`
  position: relative;
  background-color: var(--black);
  width: 300px;
  aspect-ratio: 3/4;
  border-radius: 10px;
  color: var(--gray-bright);
  transition: all.3s;
  overflow: hidden;

  /* hover 관련 css */
  .card {
    padding: 0 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all.3s;
  }
  .initialCard {
    text-align: start;
  }
  .hoveredCard {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    justify-content: center;
  }
  &:hover {
    scale: calc(102%);
    .hoveredCard {
      opacity: 1;
    }
    .initialCard {
      opacity: 0;
    }
  }

  /* card 내용 관련 css */
  .projectImg {
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: center;
    img {
      height: 100%;
    }
  }
  .projectName {
    word-break: keep-all;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    color: var(--white);
    margin: 20px 0;
  }
  .projectDes {
    font-size: 16px;
    color: var(--mid);
  }
  .moreBtn {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
const MoreBtn = styled.button`
  width: 100%;

  background-color: transparent;
  border-radius: 10px;
  color: var(--white);
  padding: 10px 0;
  border: 2px solid var(--white);
  font-size: 16px;
  font-weight: 700;
  &:hover {
    background-color: var(--white);
    color: var(--black);
  }
`;
interface CardTypes {
  projectName: string;
  projectDes: string;
  projectImg: string;
  siteLink: string;
  gitLink: string;
}

const ProjectCard: React.FC<CardTypes> = ({
  projectName,
  projectDes,
  projectImg,
  siteLink,
  gitLink,
}) => {
  const handleToggleModal = () => {};

  return (
    <>
      <CardComponents>
        <div className="card initialCard">
          <div className="projectImg">
            {/* 이미지 쿠가해야함 */}
            {projectImg.length > 0 && <img src={projectImg} alt="woodone" />}
          </div>
          <div className="projectName">{projectName}</div>
          <div className="desLineKor projectDes">{projectDes}</div>
        </div>
        <div className="card hoveredCard">
          <div className="projectName">{projectName}</div>
          <div className="moreBtn">
            <MoreBtn onClick={handleToggleModal}>자세히보기</MoreBtn>
            {siteLink.length > 0 ? (
              <Link to={siteLink} target="_Blank">
                <MoreBtn>사이트 이동</MoreBtn>
              </Link>
            ) : (
              <Link to={gitLink} target="_Blank">
                <MoreBtn>Github</MoreBtn>
              </Link>
            )}
          </div>
        </div>
      </CardComponents>
    </>
  );
};

export default ProjectCard;
