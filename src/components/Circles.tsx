import React from "react";
import styles from "./Circles.module.css";

interface CirclesProps {
  animationStarted: boolean; // Define the className prop
}

function Circles(props: CirclesProps) {

  const circleOneClass = [styles.circleOne, styles.bigCircle].join(" ");
  const circleTwoClass = [styles.circleTwo, styles.bigCircle].join(" ");
  const circleThreeClass = [styles.circleThree, styles.bigCircle].join(" ");
  const circleFourClass = [styles.circleFour, styles.bigCircle].join(" ");
  const circleFiveClass = [styles.circleFive, styles.bigCircle].join(" ");
  const circleTopClass = [styles.topSmallCircle, styles.smolCircle].join(" ");
  const circleBotClass = [styles.botSmallCircle, styles.smolCircle].join(" ");

  return (
    <div className={styles.circlesContainer}>
      <div className={circleOneClass} />
      <div className={circleTwoClass} />
      <div className={circleThreeClass} />
      <div className={circleFourClass} />
      <div className={circleFiveClass} />
      <div className={circleTopClass} />
      <div className={circleBotClass} />
    </div>
  );
}

export default Circles;
