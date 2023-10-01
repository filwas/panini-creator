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

function FormScreen() {
  const formMethods = useForm<PaniniFormData>();
  const { handleSubmit } = formMethods;
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<PaniniFormData> = async (data) => {
    try {
      const parsedData = paniniSchema.parse(formatData(data));
      console.log(parsedData);
      const serverResponse = await postPayload(parsedData);
      console.log(serverResponse);
      setisBeingTurnedOff(true);
      setTimeout(() => {
        navigate("/success", {state: {imageUrl: serverResponse.imageUrl}});
      }, 1000);
    } catch (error) {
      alert(fromZodError(error)); //using a library to make the error message readable to user
    }
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
          <button className={styles.randomizeButton}>
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
          />
        </div>
      </div>
    </FormProvider>
  );
}

export default FormScreen;

function formatData(data: PaniniFormData) {
  const returnObject: SandwichPayload = {
    sandwichName: data.sandwichName.toString(),
    cutlery: data.cutlery[0] ? true : false,
    napkins: data.napkins[0] ? true : false,
    base: {
      bread: data.bread.toString(),
      cheese: data.cheese,
      meat: data.meat,
      dressing: data.dressing,
      vegetables:
        data.vegetables[0].length > 0 ? data.vegetables[0].split(",") : [],
    },
    extras: {
      egg: data.egg,
      spreads: data.spreads[0].length > 0 ? data.spreads[0].split(",") : [],
      serving: data.serving.toString(),
      topping: data.topping[0].length > 0 ? data.topping[0] : null,
    },
  };

  return returnObject;
}


const postPayload = async (payload: any) => {
  const url = 'https://training.nerdbord.io/api/v1/panini-creator/order';
  const headers = {
    'Authorization': 'secret_token',
    'Content-Type': 'application/json'
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return await response.json();
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation: ', error);
  }
};
