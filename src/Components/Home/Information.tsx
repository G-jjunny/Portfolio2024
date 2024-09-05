import React, { useEffect, useState, useRef } from "react";
import styles from "../../Styles/PagesModule/Information.module.scss";
import TechStack from "./TechStack";
import Project from "./Project";
import Education from "./Education";
import Profile from "./Profile";

const Information = () => {
  const [activeSection, setActiveSection] = useState<string>("Main");

  // Section references for each section in the contents
  const profileRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  // Scroll to specific section when the corresponding nav item is clicked
  const handleNavClick = (section: string) => {
    let targetRef;
    switch (section) {
      case "Main":
        targetRef = profileRef;
        break;
      case "Project":
        targetRef = projectRef;
        break;
      case "Education":
        targetRef = educationRef;
        break;
    }
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const sections = [
      { id: "Main", ref: profileRef },
      { id: "Project", ref: projectRef },
      { id: "Education", ref: educationRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const active = sections.find(
              (section) => section.ref.current === entry.target
            );
            if (active) {
              setActiveSection(active.id);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.sideNav}>
          <ul className={styles.nav}>
            <li
              className={activeSection === "Main" ? styles.active : ""}
              onClick={() => handleNavClick("Main")}
            >
              Main
            </li>
            <li
              className={activeSection === "Project" ? styles.active : ""}
              onClick={() => handleNavClick("Project")}
            >
              Project
            </li>
            <li
              className={activeSection === "Education" ? styles.active : ""}
              onClick={() => handleNavClick("Education")}
            >
              Education
            </li>
          </ul>
        </div>
        <div className={styles.contents}>
          <div ref={profileRef}>
            <Profile />
            <TechStack />
          </div>
          <div ref={projectRef}>
            <Project />
          </div>
          <div ref={educationRef}>
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
