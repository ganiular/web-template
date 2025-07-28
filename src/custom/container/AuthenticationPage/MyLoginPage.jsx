import React from 'react';
import styles from './MyAuthenticationPage.module.css';
import logo from '../../../assets/logos/full-color-logo.png';
import LanguageDropdown from '../../components/LanguageDropdown';

export default function MyLoginPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img src={logo} alt="Standify Logo" className={styles.logo} />
                <LanguageDropdown />
            </header>

            <div className={styles.formBox}>
                <h1 className={styles.title}>Login</h1>
                <p className={styles.subtitle}>Welcome back!</p>



                <form className={styles.form}>
                    <div className={styles.inputWrapper}>
                        <input type="email" placeholder="Enter email" className={styles.input} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="password" placeholder="Enter Password" className={styles.input} />
                    </div>
                    <div className={styles.forgetPasswordBox}>
                        <a href="#">Forgot Password?</a>
                    </div>



                    <button type="submit" className={styles.submitBtn}>Sign Up</button>
                </form>
            </div>
        </div>
    );
}
