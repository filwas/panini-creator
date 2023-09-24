import React, { useState } from "react";
import styles from "./TextInput.module.css";
import classNames from "classnames";

interface TextInputProps {
  textOptions: {
    placeholder: string;
    errorMessage: string;
    maxChars: number;
  };
}

const TextInput = (props: TextInputProps) => {
  const [currentValue, setCurrentValue] = useState("");
  const [error, setError] = useState(false);
  const wrapStyle = classNames(styles.wrapper);
  const inputStyle = classNames(styles.input);


  //same way i handled this in Fischkapp
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (newValue.length > props.textOptions.maxChars) {
      setError(true);
    } else {
      setError(false);
    }
    setCurrentValue(newValue);
  };

  return (
    <div className={wrapStyle}>
      <input
        type="text"
        className={inputStyle}
        placeholder={props.textOptions.placeholder}
        value={currentValue}
        onChange={handleChange}
      />
      {error && <div className={styles.errorText}>{props.textOptions.errorMessage}</div>}
    </div>
  );
};

export default TextInput;
