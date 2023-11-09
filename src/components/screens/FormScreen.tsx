import React, { useState } from "react";
import styles from "./FormScreen.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";
import Dices from "../icons/Dices";
import {
  FormDataType,
  PaniniFormData,
  SandwichPayload,
  paniniSchema,
} from "../enumFaces/enumFaces";
import FormModuleBase from "../modularForm/FormModuleBase";
import FormModuleExtras from "../modularForm/FormModuleExtras";
import FormModuleFinal from "../modularForm/FormModuleFinal";
import classNames from "classnames";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  UseFormReturn,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { fromZodError } from "zod-validation-error";
import { formatData } from "../../api/formatters";
import { postPayload } from "../../api/client";

import { data } from "../../data/Data";

function FormScreen() {
  const defaultValues: PaniniFormData = {
    sandwichName: [""],
    cutlery: [],
    napkins: [],
    bread: [data(FormDataType.Bread)[0]],
    cheese: [data(FormDataType.Cheese)[0]],
    meat: [data(FormDataType.Meat)[0]],
    dressing: [data(FormDataType.Dressing)[0]],
    vegetables: [],
    egg: [data(FormDataType.Egg)[0]],
    spreads: [],
    serving: [data(FormDataType.Serving)[0]],
    topping: [],
  };
  const formMethods = useForm<PaniniFormData>({
    defaultValues,
  });
  const { handleSubmit, reset } = formMethods;
  const navigate = useNavigate();

  const [refresher, toggleRefresher] = useState(false);
  const onSubmit: SubmitHandler<PaniniFormData> = async (
    data: PaniniFormData
  ) => {       
    try {      
      const parsedData = paniniSchema.parse(
        formatData(data)
      ) as SandwichPayload;

      const serverResponse = await postPayload(parsedData);      

      setisBeingTurnedOff(true);
      setTimeout(() => {
        navigate("/success", { state: { imageUrl: serverResponse.imageUrl } });
      }, 1000);
    } catch (error) {
      alert(fromZodError(error)); //using a library to make the error message readable to user
      
    }
  };


  const randomHandler = () => {
    reset(randomForm());
    toggleRefresher(!refresher);
  };

  const handleStartAgain = () => {
    reset(defaultValues);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    toggleRefresher(!refresher);
  };


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
          <button className={styles.randomizeButton} onClick={randomHandler} data-testid={"randomize-button"}>
            <Dices className={styles.dices} />
            randomize panini
          </button>
        </div>

        <div className={styles.formElementsContainer}>

          <FormModuleBase name="Configure Base" />
          <FormModuleExtras name="Configure Extras" />
          <FormModuleFinal
            name="Finalize Order"
            onOrder={handleSubmit(onSubmit)}
            onReset={handleStartAgain}
          />
        </div>
      </div>
    </FormProvider>
  );
}

export default FormScreen;

function randomForm() {
  const randomForm: PaniniFormData = {
    sandwichName: [],
    cutlery: [],
    napkins: [],
    bread: [],
    cheese: [],
    meat: [],
    dressing: [],
    vegetables: [],
    egg: [],
    spreads: [],
    serving: [],
    topping: [],
  };

  for (const key in randomForm) {
    const ingredient = key as keyof PaniniFormData;
    const ingredientType = key as FormDataType;

    switch (ingredientType) {
      //single-value cases
      case FormDataType.Bread:
      case FormDataType.Name:
      case FormDataType.Serving:
        randomForm[ingredient] = [randomValue(ingredientType)];
        break;
      //booleable cases
      case FormDataType.Cutlery:
      case FormDataType.Napkins:
      case FormDataType.Topping:
        {
          const isTrue = Math.random() >= 0.5;
          randomForm[ingredient] = isTrue ? [randomValue(ingredientType)] : [];
        }
        break;
      //non-repeating cases
      case FormDataType.Spreads:
      case FormDataType.Vegetables:
        {
          const dataArray = data(ingredientType);
          for (let index = 0; index < dataArray.length; index++) {
            const isTrue = Math.random() >= 0.5;
            randomForm[ingredient][index] = isTrue ? dataArray[index] : "";
          }
        }
        break;
      //all remaining cases
      default:
        {
          const randomNumber = Math.ceil(Math.random() * 4);
          for (let index = 0; index < randomNumber; index++) {
            randomForm[ingredient][index] = randomValue(ingredientType);
          }
        }
        break;
    }
  }
  return randomForm;
}

function randomValue(type: FormDataType) {
  const array = data(type);
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
