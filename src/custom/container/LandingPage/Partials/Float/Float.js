import React from "react";
import styles from "./Float.module.css";
import logo from "../../../../../assets/short-logo.png";


export default function FloatingIcon({ top = '2%', left = '5%', className = "", style = {} }) {

    return (
        <div
            className={`${styles.root} ${className}`}
            style={{
                ...style,
                'top': top,
                'left': left,
            }}
            aria-hidden="true"
        >
            <img src={logo} alt="" className={styles.img} draggable={false} />
        </div>
    );
}