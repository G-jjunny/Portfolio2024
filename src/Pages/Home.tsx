import React from "react";
import styles from "../Styles/PagesModule/Home.module.scss";
import Intro from "../Components/Home/Intro";
import Information from "../Components/Home/Information";
import OutTro from "../Components/Home/OutTro";

const Home = () => {
  return (
    <div className={`${styles.container}`}>
      <Intro />
      <Information />
      <OutTro />
    </div>
  );
};

export default Home;
