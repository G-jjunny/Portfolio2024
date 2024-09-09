import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../Redux/modalSlice";
import styles from "../Styles/ComponentsModule/ProjectModal.module.scss";
import { Icon } from "@iconify-icon/react";
import Skill from "./Skill";

const ProjectModal: React.FC = () => {
  // Redux에서 모달 상태 가져오기
  const {
    isOpen,
    projectName,
    projectDes,
    projectImg,
    siteLink,
    gitLink,
    skills,
  } = useSelector((state: any) => state.modal);

  const dispatch = useDispatch();
  // 모달이 열렸을 때 body 스크롤 막기
  const handleAfterOpen = () => {
    document.body.style.overflow = "hidden";
  };

  // 모달이 닫혔을 때 body 스크롤 복구
  const handleRequestClose = () => {
    document.body.style.overflow = "auto";
    dispatch(closeModal());
  };
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={handleAfterOpen} // 모달이 열린 후 호출되는 함수
      onRequestClose={handleRequestClose} // 모달을 닫을 때 호출되는 함수
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(52,58,64,0.7)",
        },
        content: {
          padding: 0,
          inset: "20px 200px",
          backgroundColor: "transparent",
          border: "none",
          overflow: "visible",
        },
      }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContents}>
            <div className={styles.projectName}>{projectName}</div>
            <div className="desLineKor">{projectDes}</div>
            <img src={projectImg} alt="project" className={styles.projectImg} />
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.context}>사용기술 및 언어</div>
          <div className={styles.skills}>
            {skills.map((item: string, index: string) => (
              <Skill key={index} skill={item} />
            ))}
          </div>
          <div className={styles.context}>주요기능 및 특징</div>
        </div>
      </div>
      <div className={styles.controller}>
        <div className={styles.sideBtn}>
          <Icon icon="ic:baseline-close" />
        </div>
        <div className={styles.sideBtn}>
          <Icon icon="lucide:link" />
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
