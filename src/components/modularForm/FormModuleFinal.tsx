import React from "react";
import styles from "./FormModule.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";

import { SelectorType } from "../enums/enums";
import { useNavigate } from "react-router-dom";

import Ingredient from "./Ingredient";

interface FormModuleFinalProps {
  name: string;
}

function FormModuleFinal(props: FormModuleFinalProps) {
  const navigate = useNavigate();

  const handleStartAgain = () => {
    navigate("");
  };

  const handlePlaceOrder = () => {};
  return (
    <div className={styles.moduleTopWrapper}>
      <div className={styles.moduleTitle}>{props.name}</div>
      <Ingredient
        name="Name panini"
        selector={SelectorType.Textinput}
        options={["eg. Club Panini"]}
      />
      <Ingredient
        name="Cutlery"
        selector={SelectorType.Checkbox}
        options={["ADD TO ORDER"]}
      />
      <Ingredient
        name="Napkins"
        selector={SelectorType.Checkbox}
        options={["ADD TO ORDER"]}
      />
      <div className={styles.lastMargin} />
      <button className={styles.placeOrder} onClick={handlePlaceOrder}>
        place order
      </button>
      <button className={styles.startAgain} onClick={handleStartAgain}>
        start again
      </button>
    </div>
  );
}

export default FormModuleFinal;