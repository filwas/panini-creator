import React, { useState } from "react";
import styles from "./SplashScreen.module.css";
import Circles from "../animations/Circles";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";
import { useNavigate } from "react-router-dom";

function SuccessScreen() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const navigate = useNavigate();

  const handleBeginClick = () => {
    setAnimationStarted(true);
    setTimeout(() => {
      navigate("/form");
    }, 3000);
  };

  const splashDynamicClasses = [
    styles.splashContainer,
    styles.successAnimation,
    animationStarted ? styles.splashDisappearAnimation : "",
  ].join(" ");

  return (
    <div className={splashDynamicClasses}>
      <Circles animationStarted={animationStarted} />
      <div className={styles.textContainer}>
        <h1>Panini ordered</h1>
        <button className={styles.button} onClick={handleBeginClick}>
          Start again
        </button>
      </div>
    </div>
  );
}

export default SuccessScreen;
