import React, { useState } from "react";
import styles from "./FormScreen.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";
import Dices from "../icons/Dices";
import { PaniniFormData } from "../enumFaces/enumFaces";
import FormModuleBase from "../modularForm/FormModuleBase";
import FormModuleExtras from "../modularForm/FormModuleExtras";
import FormModuleFinal from "../modularForm/FormModuleFinal";
import classNames from "classnames";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

function FormScreen() {
  const formMethods = useForm<PaniniFormData>();
  const { handleSubmit, getValues, setValue } = formMethods;

  const onSubmit: SubmitHandler<PaniniFormData> = (data) => {
    console.log(data);
  };

  const [isBeingTurnedOff, setisBeingTurnedOff] = useState(false);

  const handleOrder = () => {
    setisBeingTurnedOff(true);
  };

  const topFormWrapper = classNames(
    styles.wholeFormContainer,
    isBeingTurnedOff ? styles.turnOffForm : ""
  );

  return (
    <FormProvider {...formMethods}>
      <div className={topFormWrapper}>
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          SUBMIT
        </button>
        <div className={styles.header}>
          Panini Creator
          <button className={styles.randomizeButton}>
            <Dices className={styles.dices} />
            randomize panini
          </button>
        </div>
        <div className={styles.formElementsContainer}>
          <FormModuleBase name="Configure Base" />
          <FormModuleExtras name="Configure Extras" />
          <FormModuleFinal name="Finalize Order" onOrder={handleOrder} />
        </div>
      </div>
    </FormProvider>
  );
}

export default FormScreen;
/**
 * <FormModuleBase name="Configure Base" />
   <FormModuleExtras name="Configure Extras" />
   <FormModuleFinal name="Finalize Order" onOrder={handleOrder} />
 */
