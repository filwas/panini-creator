import React, { useState } from 'react';
import styles from './Checkbox.module.css'

interface CheckboxProps {
    initialState?: boolean;
    onStateChange?: (newState: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const [state, setState] = useState(true);

    const clickHandler = () => {
      const newState = !state;
      setState(newState);
  
      if (props.onStateChange) {
        props.onStateChange(newState);
      }
    };
    return (
        <div className={styles.checkboxWrapper} onClick={clickHandler}>
            {state && <div className={styles.innerSquare} />}
        </div>
    );
};

export default Checkbox;
