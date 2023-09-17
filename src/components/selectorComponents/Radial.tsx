import React, { useState } from "react";
import styles from "./Radial.module.css";
import classNames from "classnames";

interface RadialProps {
  initialState?: boolean;
  onStateChange?: (newState: boolean) => void;
}

const Radial: React.FC<RadialProps> = (props) => {
  const [state, setState] = useState(true);

  const clickHandler = () => {
    const newState = !state;
    setState(newState);

    if (props.onStateChange) {
      props.onStateChange(newState);
    }
  };
  return (
    <div className={styles.radialWrapper} onClick={clickHandler}>
      <div className={classNames(state && styles.radialDot)} />
    </div>
  );
};

export default Radial;
