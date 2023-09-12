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

  const splashDynamicClasses = [styles.splashContainer, animationStarted ? styles.splashDisappearAnimation : ""].join(" ")

  if (splashScreenOff) {
    return <div>Hello there!</div>;
  } else {
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
}

export default SplashScreen;
