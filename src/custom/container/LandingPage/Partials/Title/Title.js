import styles from "./Title.module.css";

export default function Title(props) {
    return (
        <h2  {...props} className={`${styles.root} ${props.className}`}>
            {props.children}
        </h2>
    );
}