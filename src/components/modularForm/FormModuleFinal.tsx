import React from "react";
import styles from "./FormModule.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";

import { SelectorType, FormDataType, paniniSchema } from "../enumFaces/enumFaces";
import { useFormContext } from "react-hook-form";
import Ingredient from "./Ingredient";

interface FormModuleFinalProps {
  name: string;
  onOrder: () => void;
  onReset: () => void;
}

function FormModuleFinal(props: FormModuleFinalProps) {

  return (
    <div className={styles.moduleTopWrapper}>
      <div className={styles.moduleTitle}>{props.name}</div>
      <Ingredient
        name="Name panini"
        dataType={FormDataType.Name}
        selector={SelectorType.Textinput}
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
      />
      <Ingredient
        name="Napkins"
        dataType={FormDataType.Napkins}
        selector={SelectorType.Checkbox}
      />
      <div className={styles.lastMargin} />
      <button className={styles.placeOrder} onClick={props.onOrder} data-testid={"submitButton"}>
        place order
      </button>
      <button className={styles.startAgain} onClick={props.onReset} data-testid={"resetButton"}>
        start again
      </button>
    </div>
  );
}

export default FormModuleFinal;
