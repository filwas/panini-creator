import React from "react";
import styles from "./Toggle.module.css";
import classNames from "classnames";

interface ToggleProps {
  state: boolean;
  onStateChange: () => void;
}

const Toggle = (props: ToggleProps) => {

  const circle = classNames(
    styles.circle,
    props.state ? styles.circleOn : styles.circleOff
  );

  return (
    <div className={styles.toggleWrapper} onClick={props.onStateChange}>
      <div className={circle} />
    </div>
  );
};

export default Toggle;
