import React from "react";
import styles from "../../Styles/PagesModule/Intro.module.scss";
import styled from "styled-components";
import bg from "../../Assets/Images/bg-dark-sky.jpg";

const StyledIntro = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Intro = () => {
  return (
    <StyledIntro>
      <div className={styles.contents}>
        <div className={styles.headline}>Front-End Developer</div>
        <div className={styles.desline}>Welcom to my Portfolio</div>
        {/* <div className={styles.desline}>프론트엔드 개발자 정경준입니다.</div> */}
      </div>
    </StyledIntro>
  );
};

export default Intro;
