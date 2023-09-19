import React from "react";
import styles from "./TextInput.module.css";
import classNames from "classnames";

interface TextInputProps {
  placeholder?: string;
}

const TextInput = (props: TextInputProps) => {
  const wrapStyle = classNames(styles.wrapper);
  const inputStyle = classNames(styles.input);

  return (
    <div className={wrapStyle}>
      <input type="text" className={inputStyle}></input>
    </div>
  );
};

export default TextInput;
