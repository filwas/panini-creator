import React from "react";
import styles from "./FormModule.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";

import { SelectorType, FormDataType, PaniniFormData, paniniSchema } from "../enumFaces/enumFaces";
import { useNavigate } from "react-router-dom";
import  { useFormContext } from "react-hook-form"

import Ingredient from "./Ingredient";

interface FormModuleFinalProps {
  name: string;
  onOrder: () => void;
}

function FormModuleFinal(props: FormModuleFinalProps) {


  const handleStartAgain = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePlaceOrder = () => {
    props.onOrder();
  };


  return (
    <div className={styles.moduleTopWrapper}>
      <div className={styles.moduleTitle}>{props.name}</div>
      <Ingredient
        name="Name panini"
        dataType={FormDataType.Name}
        selector={SelectorType.Textinput}
        options={[""]}
        textOptions={{
          placeholder: "eg. Club Panini",
          errorMessage: `Name is too long. Max ${paniniSchema.shape.sandwichName.maxLength} characters.`,
          maxChars: paniniSchema.shape.sandwichName.maxLength as number,
        }}
      />
      <Ingredient
        name="Cutlery"
        dataType={FormDataType.Cutlery}
        selector={SelectorType.Checkbox}
        options={["ADD TO ORDER"]}
      />
      <Ingredient
        name="Napkins"
        dataType={FormDataType.Napkins}
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
