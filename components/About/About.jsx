import React from "react";

// importing css module About.module.css
import styles from "/styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className="ps-5 pt-4 pb-4 white-text-color">
        <h3>Cory Cox</h3>
        <h6>Cubs Play Today</h6>
        <p>
          <em>Help Desk Specialist</em>
        </p>
        <p className="d-flex text-start">
          I built this site as I am a life long Cubs fan. In Fact, I remember
          October 2016 like it was yesterday! Go Cubs Go! Fly the W!
        </p>
        <p className="d-flex text-start">
          I am a Help Desk Specialist aspiring to be a Software Developer. I
          have a degree in Computer and Information Technology. I also have 6
          years of experience in the Information Technology Field.
        </p>
      </div>
    </div>
  );
}
