import React, { useState } from "react";
import styles from "./Multiselect.module.css";
import classNames from "classnames";

interface MultiselectProps {
  multiOptions: string[];
  initialState?: boolean;
  onStateChange?: (newState: boolean) => void;
}

const Multiselect = (props: MultiselectProps) => {
  return (
    <div className={styles.multiTopWrap}>
      {props.multiOptions.map((item, index) => (
        <MultiselectItem text={item} />
      ))}
    </div>
  );
};

export default Multiselect;

interface MultiselectItemProps {
  text: string;
}

const MultiselectItem = (props: MultiselectItemProps) => {
  const [state, setState] = useState(false);

  const clickHandler = () => {
    const newState = !state;
    setState(newState);
  };

  const selectStyle = classNames(
    styles.multiItemWrap,
    state ? styles.on : styles.off
  );

  return (
    <div className={selectStyle} onClick={clickHandler}>
      {props.text}
    </div>
  );
};
