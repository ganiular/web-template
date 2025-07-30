import React from "react";
import styles from "./Float.module.css";
import logo from "../../../../../assets/short-logo.png";

export default function FloatingIcon({ className = "", style = {} }) {
    return (
        <div
            className={`${styles.root} ${className}`}
            style={style}
            aria-hidden="true"
        >
            <img src={logo} alt="" className={styles.img} draggable={false} />
        </div>
    );
}