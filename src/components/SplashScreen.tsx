import React, { useState } from "react";
import styles from "./SplashScreen.module.css";
import Circles from "./Circles";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";

function SplashScreen() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [splashScreenOff, setSplashScreenOff] = useState(false);

  const handleBeginClick = () => {
    setAnimationStarted(true);
    setTimeout(() => {
      setSplashScreenOff(true);
    }, 3000);
  };

  const textDynamicClasses = [styles.textContainer, animationStarted ? styles.textDisappearAnimation : ""].join(" ")

  if (splashScreenOff) {
    return <div>Hello there!</div>;
  } else {
    return (
      <div className={styles.splashContainer}>
        <Circles animationStarted={animationStarted} />
        <div className={textDynamicClasses}>
          <h1>Panini Creator</h1>
          <button className={styles.button} onClick={handleBeginClick}>
            Begin
          </button>
        </div>
      </div>
    );
  }
}

export default SplashScreen;
