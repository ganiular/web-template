import { NamedLink } from "../../../../../components";
import styles from "./Btn.module.css";

export default function Button(props) {
    return (
        <button className={`${styles.root} ${props.className}`}>
            <span>{props.children}</span>
            <i className={styles.icon}>↗</i>
        </button>
    );
}


export function MyNamedLinkButton({ className, name, children }) {
    return (
        <NamedLink name={name} className={`${styles.root} ${className}`} >
            <span>{children}</span>
            <i className={styles.icon}>↗</i>
        </NamedLink>
    );
}