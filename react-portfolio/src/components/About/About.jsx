import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          style={{ marginRight: '45px',marginTop:'20px' }}
          src={getImageUrl("about/aboutImage.jpg")}
          alt=""
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p style={{ marginTop: '10px',textAlign:'justify' }}>
                I'm a frontend developer specializing in building responsive and optimized websites. I create engaging user experiences that work seamlessly across devices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p style={{ marginTop: '10px',textAlign:'justify' }}>
              I also have experience in developing fast and optimized backend systems and APIs. My expertise ensures that the applications I build perform efficiently and reliably.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p style={{ marginTop: '10px',textAlign:'justify' }}>
              I've designed multiple landing pages and developed comprehensive design systems. My approach focuses on creating cohesive and visually appealing interfaces that enhance user engagement and brand identity.              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
