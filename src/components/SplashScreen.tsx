import React, { useState } from "react";
import styles from "./SplashScreen.module.css";
import Circles from "./Circles";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";

function SplashScreen() {
  const [animationStarted, setAnimationStarted] = useState(false);

  const handleBeginClick = () => {
    setAnimationStarted(true);
  };

  return (
    <div className={styles.splashContainer}>
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
