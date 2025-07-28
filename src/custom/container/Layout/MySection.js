import styles from './layout.module.css';

export default function MySection({ children, className }) {
    return (
        <section className={`${styles.section} ${className || ''}`}>
            {children}
        </section>
    );
}
