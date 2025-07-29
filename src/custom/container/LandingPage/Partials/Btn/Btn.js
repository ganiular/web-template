import styles from "./Btn.module.css";

export default function Button(props) {
    return (
        <button className={`${styles.root} ${props.className}`}>
            <span>{props.children}</span>
            <i className={styles.icon}>↗</i>
        </button>
    );
}