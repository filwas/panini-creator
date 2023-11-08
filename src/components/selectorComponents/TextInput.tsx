import React, { useState } from "react";
import styles from "./TextInput.module.css";
import { FormDataType } from "../enumFaces/enumFaces";
import { useFormContext } from "react-hook-form";

interface TextInputProps {
  formField: FormDataType;
  textOptions: {
    placeholder: string;
    errorMessage: string;
    maxChars: number;
  };
}

const TextInput = (props: TextInputProps) => {
  const context = useFormContext();
  const [error, setError] = useState(false);


  //same way i handled this in Fischkapp
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (newValue.length > props.textOptions.maxChars) {
      setError(true);
    } else {
      setError(false);
    }
    context.setValue(`${props.formField}`, newValue)
  };
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.input}
        placeholder={props.textOptions.placeholder}
        value={context.watch(props.formField)}
        onChange={handleChange}
        data-testid={"textValue"}
      />
      {error && (
        <div className={styles.errorText}>{props.textOptions.errorMessage}</div>
      )}
    </div>
  );
};

export default TextInput;
