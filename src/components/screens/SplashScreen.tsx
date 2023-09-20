import React, { useState } from "react";
import styles from "./SplashScreen.module.css";
import Circles from "../animations/Circles";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";
import { useNavigate } from "react-router-dom";

function SplashScreen() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const navigate = useNavigate();

  const handleBeginClick = () => {
    setAnimationStarted(true);
    setTimeout(() => {
      navigate("form");
    }, 3000);
  };

  const splashDynamicClasses = [
    styles.splashContainer,
    animationStarted ? styles.splashDisappearAnimation : "",
  ].join(" ");

  return (
    <div className={splashDynamicClasses}>
      <Circles animationStarted={animationStarted} />
      <div className={styles.textContainer}>
        <h1>Panini Creator</h1>
        <button className={styles.button} onClick={handleBeginClick}>
          Begin
        </button>
      </div>
    </div>
  );
}

export default SplashScreen;
