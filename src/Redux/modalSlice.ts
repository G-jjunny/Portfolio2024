import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  projectName: string;
  projectDes: string;
  projectImg: string;
  siteLink: string;
  gitLink: string;
  skills: string[];
}

const initialState: ModalState = {
  isOpen: false,
  projectName: "",
  projectDes: "",
  projectImg: "",
  siteLink: "",
  gitLink: "",
  skills: [],
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.projectName = action.payload.projectName;
      state.projectDes = action.payload.projectDes;
      state.projectImg = action.payload.projectImg;
      state.siteLink = action.payload.siteLink;
      state.gitLink = action.payload.gitLink;
      state.skills = action.payload.skills;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.projectName = "";
      state.projectDes = "";
      state.projectImg = "";
      state.siteLink = "";
      state.gitLink = "";
      state.skills = [];
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
