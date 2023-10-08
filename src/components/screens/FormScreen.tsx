import React, { useState } from "react";
import styles from "./FormScreen.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";
import Dices from "../icons/Dices";
import {
  PaniniFormData,
  SandwichPayload,
  paniniSchema,
} from "../enumFaces/enumFaces";
import FormModuleBase from "../modularForm/FormModuleBase";
import FormModuleExtras from "../modularForm/FormModuleExtras";
import FormModuleFinal from "../modularForm/FormModuleFinal";
import classNames from "classnames";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { fromZodError } from "zod-validation-error";
import { formatData } from "../../api/formatters";
import { postPayload } from "../../api/client";

function FormScreen() {
  const formMethods = useForm<PaniniFormData>();
  const { handleSubmit } = formMethods;
  const navigate = useNavigate();
  const [formReset, setFormReset] = useState(true)
  const onSubmit: SubmitHandler<PaniniFormData> = async (data: PaniniFormData) => {
    try {

      const parsedData = paniniSchema.parse(formatData(data)) as SandwichPayload;
      const serverResponse = await postPayload(parsedData);
      setisBeingTurnedOff(true);
      setTimeout(() => {
        navigate("/success", {state: {imageUrl: serverResponse.imageUrl}});
      }, 1000);
    } catch (error) {
      alert(fromZodError(error)); //using a library to make the error message readable to user
    }
  };

  const handleReset = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setFormReset((prevState) => !prevState)
  }

  const [isBeingTurnedOff, setisBeingTurnedOff] = useState(false);

  const topFormWrapper = classNames(
    styles.wholeFormContainer,
    isBeingTurnedOff ? styles.turnOffForm : ""
  );

  return (
    <FormProvider {...formMethods}>
      <div className={topFormWrapper}>
        <div className={styles.header}>
          Panini Creator
          <button className={styles.randomizeButton}>
            <Dices className={styles.dices} />
            randomize panini
          </button>
        </div>
        <div className={styles.formElementsContainer} key={formReset}>
          <FormModuleBase name="Configure Base" />
          <FormModuleExtras name="Configure Extras" />
          <FormModuleFinal
            name="Finalize Order"
            onReset={handleReset}
            onOrder={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </FormProvider>
  );
}

export default FormScreen;



