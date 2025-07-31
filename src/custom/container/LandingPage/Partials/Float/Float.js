import React from "react";
import styles from "./Float.module.css";
import logo from "../../../../../assets/short-logo.png";


export default function FloatingIcon({ className = "" }) {
    return (
        <div
            className={`${styles.root} ${className}`}
            aria-hidden="true"
        >
            <img src={logo} alt="" className={styles.img} draggable={false} />
        </div>
    );
}