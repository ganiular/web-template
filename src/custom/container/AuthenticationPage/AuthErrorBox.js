import { useEffect, useState } from "react";
import styles from './AuthErrorBox.module.css';

const errorNames = {
    email: 'Email',
    password: 'Password',
    firstName: 'First name',
    lastName: 'Last name',
};

export default function AuthErrorBox({ errors }) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (errors.length > 0) {
            setAnimate(true);
            const timeout = setTimeout(() => setAnimate(false), 400);
            return () => clearTimeout(timeout);
        }
    }, [errors]);

    return (
        <div className={`${styles.errorBox} ${animate ? styles.shake : ''}`}>
            {errors.map((error, i) => {
                const fieldNames = error.source?.path
                    ?.map(key => errorNames[key] || key)
                    .join(' ');
                return (
                    <div key={i} className={styles.errorItem}>
                        {fieldNames ? `${fieldNames}: ` : ''}{error.title}
                    </div>
                );
            })}
        </div>
    );
}
