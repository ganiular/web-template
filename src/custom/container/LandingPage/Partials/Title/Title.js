import styles from "./Title.module.css";
import FloatingIcon from "../Float/Float";

export default function Title(props) {
    return (
        <h2  {...props} className={`${styles.root} ${props.className}`}>
            {!props.hide && <FloatingIcon className={styles.floatingIcon} />}
            {props.children}
        </h2>
    );
}