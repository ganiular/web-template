import React from "react";
import styles from "./Float.module.css";
import logo from "../../../../../assets/short-logo.png";

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

export default function FloatingIcon({ className = "", style = {} }) {
    const [pos, setPos] = React.useState({ x: 0, y: 0 });
    const angleRef = React.useRef(getRandom(0, 2 * Math.PI));
    const speedRef = React.useRef(getRandom(0.3, 1.2));
    const radiusRef = React.useRef(getRandom(18, 32));

    React.useEffect(() => {
        const interval = setInterval(() => {
            let angle = angleRef.current;
            let speed = speedRef.current;
            let radius = radiusRef.current;

            angle += getRandom(-0.03, 0.03);
            speed += getRandom(-0.01, 0.01);
            speed = Math.max(0.2, Math.min(speed, 1.5));
            radius += getRandom(-0.2, 0.2);
            radius = Math.max(16, Math.min(radius, 36));

            angleRef.current = angle;
            speedRef.current = speed;
            radiusRef.current = radius;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            setPos({ x, y });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`${styles.root} ${className}`}
            style={{
                ...style,
                transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px)`,
            }}
            aria-hidden="true"
        >
            <img src={logo} alt="" className={styles.img} draggable={false} />
        </div>
    );
}