import React, { useState } from "react";
import styles from "./Toggle.module.css";
import classNames from "classnames";

interface ToggleProps {
  initialState?: boolean;
  onStateChange?: (newState: boolean) => void;
}

const Toggle = (props: ToggleProps) => {
  const [state, setState] = useState(true);

  const clickHandler = () => {
    const newState = !state;
    setState(newState);

    if (props.onStateChange) {
      props.onStateChange(newState);
    }
  };

  const circle = classNames(
    styles.circle,
    state ? styles.circleOn : styles.circleOff
  );

  return (
    <div className={styles.toggleWrapper} onClick={clickHandler}>
      <div className={circle} />
    </div>
  );
};

export default Toggle;
