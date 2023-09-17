import React, { useState } from "react";
import styles from "./Multiselect.module.css";
import classNames from "classnames";

interface MultiselectProps {
  text: string;
  initialState?: boolean;
  onStateChange?: (newState: boolean) => void;
}

const Multiselect: React.FC<MultiselectProps> = (props) => {
  const [state, setState] = useState(true);

  const clickHandler = () => {
    const newState = !state;
    setState(newState);

    if (props.onStateChange) {
      props.onStateChange(newState);
    }
  };

  const selectStyle = classNames(
    styles.multiselectTopWrap,
    state ? styles.on : styles.off
  );

  return (
    <div className={selectStyle} onClick={clickHandler}>
      {props.text}
    </div>
  );
};

export default Multiselect;
