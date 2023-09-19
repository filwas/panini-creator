import React, { useState } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  checkboxOptions: string[];
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <div className={styles.checkboxTopWrap}>
      {props.checkboxOptions.map((item, index) => (
        <SingleCheckbox text={item} initialState={false} />
      ))}
    </div>
  );
};

interface SingleCheckboxProps {
  initialState: boolean;
  text: string;
}

const SingleCheckbox = (props: SingleCheckboxProps) => {
  const [state, setState] = useState(props.initialState);

  const clickHandler = () => {
    const newState = !state;
    setState(newState);

  };
  //two different onClicks assigned here to achieve the effect where im able to click 
  //the text and the checkbox itself, but not the space between them
  return (
    <div className={styles.checkboxTextWrap} >
      <div className={styles.textPointer} onClick={clickHandler}>{props.text}</div>
      <div className={styles.checkboxBoxWrap} onClick={clickHandler}>
        {state && <div className={styles.innerSquare} />}
      </div>
    </div>
  );
};

export default Checkbox;
