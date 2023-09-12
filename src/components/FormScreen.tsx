import React from "react";
import styles from "./FormScreen.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";

function FormScreen() {
  return (
    <div className={styles.wholeFormContainer}>
      <div className={styles.header}>
        Panini Creator
        <button className={styles.randomizeButton}>randomize panini</button>
      </div>
      <div className={styles.formElementsContainer}>
        {/*these divs below will become react elements later*/}
        <div className={styles.baseElement}></div>
        <div className={styles.extrasElement}></div>
        <div className={styles.orderElement}></div>
      </div>
    </div>
  );
}

export default FormScreen;
