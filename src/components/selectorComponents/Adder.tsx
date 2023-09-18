import React from 'react';
import styles from "./Adder.module.css"

interface AdderProps {
    direction: "add" | "subtract";
    onClick: () => void;
}

const Adder = (props: AdderProps) => {
    return (
        <div className={styles.adderWrapper} onClick={props.onClick}>
            <div className={styles.horizontalBar} />
            {props.direction == "add" && <div className={styles.verticalBar}/>}
        </div>
    );
};

export default Adder;
