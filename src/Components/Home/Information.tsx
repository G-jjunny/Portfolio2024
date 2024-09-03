import React from "react";
import styles from "../../Styles/PagesModule/Information.module.scss";
import Profile from "../../Assets/Images/이력서사진.jpg";
import TechStack from "./TechStack";
import Project from "./Project";
import Education from "./Education";

const Information = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.sideNav}>
          <ul className={styles.nav}>
            <li>Main</li>
            <li>Project</li>
            <li>Education</li>
          </ul>
        </div>
        <div className={styles.contents}>
          <div className={styles.profile}>
            <div className={styles.avatar}>
              <img src={Profile} alt="profile" />
            </div>
            <div className={styles.profileDes}>
              <div className={styles.name}>정경준</div>
              <div className={styles.birth}>1998.10.31</div>
              <div className={styles.desTechs}>
                <div className={styles.tech}>Front-End Developer</div>
                <div className={styles.tech}>React.js</div>
              </div>
              <div className={styles.des}>
                <p>
                  저의 목표는 항상 새로운 시도를 두려워하지 않는 프론트엔드
                  개발자, 사람들의 기억에 남을 수 있는 웹을 만드는 것이
                  목표입니다.
                </p>
                <p>React를 주로 활용하여 웹 애플리케이션을 개발하며</p>
                <p>
                  협업과 유지보수에 좋은 코드를 짜기 위해 꾸준히 학습하고
                  있습니다.
                </p>
              </div>
            </div>
          </div>
          <TechStack />
          <Project />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default Information;
