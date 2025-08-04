import React from "react";
import styles from "./Float.module.css";
import logo from "../../../../../assets/short-logo.png";


export default function FloatingIcon({ top = '2%', left = '5%', className = "", style = {} }) {
    // Generate random animation variant (1-6)
    const animationVariant = React.useMemo(() => Math.floor(Math.random() * 6) + 1, []);

    // Generate random duration between 45-90 seconds for very long animations
    const animationDuration = React.useMemo(() => Math.random() * 45 + 45, []);

    // Generate random delay between 0-15 seconds
    const animationDelay = React.useMemo(() => Math.random() * 15, []);

    return (
        <div
            className={`${styles.root} ${styles[`variant${animationVariant}`]} ${className}`}
            style={{
                ...style,
                'top': top,
                'left': left,
                'animationDuration': `${animationDuration}s`,
                'animationDelay': `${animationDelay}s`,
            }}
            aria-hidden="true"
        >
            <img src={logo} alt="" className={styles.img} draggable={false} />
        </div>
    );
}