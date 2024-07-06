import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Preet Patel</h1>
        <p className={styles.description}>
          I am a passionate full-stack developer.
        </p>
        <a href="mailto:preetpatel2504@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.heroImgContainer}>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>
    </section>
  );
};

export default Hero;
