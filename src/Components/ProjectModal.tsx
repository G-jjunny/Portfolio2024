import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../Redux/modalSlice";

interface ModalType {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectModal: React.FC<ModalType> = () => {
  return (
    <></>
    // <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
    //   <div>{projectName}</div>
    // </Modal>
  );
};

export default ProjectModal;
