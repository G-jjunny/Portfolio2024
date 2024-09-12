import React from "react";
import styles from "../../Styles/PagesModule/OutTro.module.scss";

const OutTro = () => {
  // const handleToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  return (
    <div className={styles.container}>
      {/* <div className={styles.controller}>
        <div className={styles.handleBtn} onClick={handleToTop}></div>
      </div> */}
      <div className={styles.contents}>
        <div className={styles.outTroHeader}>
          <div className={styles.thanks}>Thank You</div>
          <div className={styles.thankskor}>
            프론트엔드 개발자 정경준이었습니다.
          </div>
        </div>
        <div className={styles.des}>
          <p>
            웹 개발은 혼자 하는 일이 아닌 만큼 사람들 간의 약속, 그리고 소통이
            중요하다고 생각합니다.
          </p>
          <p>
            유연한 소통을 할 수 있도록 항상 경청하고 열린 자세로 임하며 성장해
            나가는 flexible한 사람이 되겠습니다.
          </p>
        </div>
        <div className={styles.copy}>
          Copyright 2024. Jung Gyeong Jun. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default OutTro;
