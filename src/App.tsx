import React, { useState } from "react";
import styles from "./App.module.css";
import SplashScreen from "./components/SplashScreen";


function App() {


  return (
    <div className={styles.mainContainer}>
      <SplashScreen />
    </div>
  );
}

export default App;
