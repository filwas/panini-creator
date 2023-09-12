import React from "react";
import styles from "./Circles.module.css";

interface CirclesProps {
  animationStarted: boolean; // Define the className prop
}

function Circles(props: CirclesProps) {

  /** 
   * the circles are arranged in such way:
   *      top
   * 1  2  3  4  5
   *      bot
   */     

  const circleOneClass = [styles.circleOnePos, styles.bigCircleDraw, props.animationStarted ? styles.moveLeft : ""].join(" ");
  const circleTwoClass = [styles.circleTwoPos, styles.bigCircleDraw, props.animationStarted ? styles.moveLeft : ""].join(" ");
  const circleThreeClass = [styles.circleThreePos, styles.bigCircleDraw, props.animationStarted ? styles.moveNowhere : ""].join(" ");
  const circleFourClass = [styles.circleFourPos, styles.bigCircleDraw, props.animationStarted ? styles.moveRight : ""].join(" ");
  const circleFiveClass = [styles.circleFivePos, styles.bigCircleDraw, props.animationStarted ? styles.moveRight : ""].join(" ");
  const circleTopClass = [styles.topSmallCirclePos, styles.smolCircleDraw, props.animationStarted ? styles.moveUp : ""].join(" ");
  const circleBotClass = [styles.botSmallCirclePos, styles.smolCircleDraw, props.animationStarted ? styles.moveDown : ""].join(" ");
  const middleLinesClass = [styles.middleLinesPos, props.animationStarted ? styles.moveNowhere : ""].join(" ");

  return (
    <div className={styles.circlesContainer}>
      <div className={circleOneClass} />
      <div className={circleTwoClass} />
      <div className={circleThreeClass} />
      <div className={circleFourClass} />
      <div className={circleFiveClass} />
      <div className={circleTopClass} />
      <div className={circleBotClass} />
      <div className={middleLinesClass} />
    </div>
  );
}

export default Circles;
