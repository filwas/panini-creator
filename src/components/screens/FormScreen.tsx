import React from "react";
import styles from "./FormScreen.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";
import Dices from "../icons/Dices";
import FormModuleBase from "../modularForm/FormModuleBase";

function FormScreen() {
  return (
    <div className={styles.wholeFormContainer}>
      <div className={styles.header}>
        Panini Creator
        <button className={styles.randomizeButton}>
          <Dices className={styles.dices} />
          randomize panini
        </button>
      </div>
      <div className={styles.formElementsContainer}>
        <FormModuleBase name="Configure Base" />
      </div>
    </div>
  );
}

export default FormScreen;
