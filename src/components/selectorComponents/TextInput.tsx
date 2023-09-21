import React, { useState } from "react";
import styles from "./TextInput.module.css";
import classNames from "classnames";

interface TextInputProps {
  placeholder: string;
}

const TextInput = (props: TextInputProps) => {
  const [currentValue, setCurrentValue] = useState("");
  const [error, setError] = useState(false)
  const wrapStyle = classNames(styles.wrapper);
  const inputStyle = classNames(styles.input);


  //same way i handled this in Fischkapp
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (newValue.length > 35) {
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
        placeholder={props.placeholder}
        value={currentValue}
        onChange={handleChange}
      />
      {error && (
        <div className={styles.errorText}>
          Name is too long. Max 35 characters.
        </div>
      )}
    </div>
  );
};

export default TextInput;
