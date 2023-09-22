import React from "react";
import styles from "./FormModule.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";

import { SelectorType } from "../enums/enums";
import { useNavigate } from "react-router-dom";

import Ingredient from "./Ingredient";

interface FormModuleFinalProps {
  name: string;
  onOrder: () => void;
}

function FormModuleFinal(props: FormModuleFinalProps) {
  const navigate = useNavigate();

  const handleStartAgain = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePlaceOrder = () => {
    props.onOrder();
    setTimeout(() => {
        navigate("/success");
      }, 1000);

  };

  return (
    <div className={styles.moduleTopWrapper}>
      <div className={styles.moduleTitle}>{props.name}</div>
      <Ingredient
        name="Name panini"
        selector={SelectorType.Textinput}
        options={[""]}
        textOptions={{
          placeholder: "eg. Club Panini",
          errorMessage: "Name is too long. Max 35 characters.",
          maxChars: 35,
        }}
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
