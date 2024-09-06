import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../Redux/modalSlice";
import styles from "../Styles/ComponentsModule/ProjectModal.module.scss";

const ProjectModal: React.FC = () => {
  // Redux에서 모달 상태 가져오기
  const { isOpen, projectName, projectDes, projectImg, siteLink, gitLink } =
    useSelector((state: any) => state.modal);

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
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        },
        content: {
          padding: 0,
          maxHeight: "80vh",
          overflowY: "scroll",
          position: "static",
          border: "none",
          overflow: "visible",
        },
      }}
    >
      <div className={styles.container}>
        asdfasdfsd
        <div className={styles.closeBtn}>asdfasdf</div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
