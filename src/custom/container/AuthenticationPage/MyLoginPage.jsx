import React from 'react';
import styles from './MyAuthenticationPage.module.css';
import logo from '../../../assets/logos/full-color-logo.png';
import LanguageDropdown from '../../components/LanguageDropdown';
import { Form, NamedLink } from '../../../components';
import { FormattedMessage } from 'react-intl';
import AuthErrorBox from './AuthErrorBox';

export default function MyLoginPage({
    formId,
    className,
    onSignupClicked,
    handleSubmit,
    loginError,
    inProgress,
    values,
    errors,
}) {

    function clearValidateMessage(event) {
        event.target.setCustomValidity(' ');
    }

    return (
        <div className={`${styles.container} ${className}`}>
            <header className={styles.header}>
                <NamedLink name="LandingPage"><img src={logo} alt="Standify Logo" className={styles.logo} /></NamedLink>
                <div className={styles.actions}>
                    {/* <LanguageDropdown /> */}
                    {/* <NamedLink
                        name="SignupPage"
                        className={`${styles.roleBtn} ${styles.active}`}>
                        Sign Up
                    </NamedLink> */}
                    <button className={`${styles.roleBtn} ${styles.active}`} onClick={onSignupClicked}>Sign Up</button>
                </div>
            </header>

            <div className={styles.formBox}>
                <h1 className={styles.title}>Login</h1>
                <p className={styles.subtitle}>Welcome back!</p>


                <Form className={styles.form} onSubmit={handleSubmit} noValidate={true}>
                    <div className={styles.inputWrapper}>
                        <input type="email" name='email' required={true} onInput={clearValidateMessage} placeholder="Email" className={styles.input} id={formId ? `${formId}.email` : 'email'} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="password" name='password' required={true} onInput={clearValidateMessage} placeholder="Password" className={styles.input} id={formId ? `${formId}.password` : 'password'} minLength={8} maxLength={256} />
                    </div>
                    <div className={styles.forgetPasswordBox}>
                        <NamedLink
                            name="PasswordRecoveryPage"

                            to={{
                                search:
                                    values?.email && !errors?.email ? `email=${encodeURIComponent(values.email)}` : '',
                            }}
                        >
                            <FormattedMessage id="LoginForm.forgotPassword" />
                        </NamedLink>
                    </div>

                    {loginError?.status === 401 && (
                        <AuthErrorBox
                            errors={loginError.apiErrors}
                            message="You entered an incorrect email or password"
                        />
                    )}

                    <button type="submit" className={`${styles.submitBtn} ${inProgress ? styles.loading : ''}`} disabled={inProgress}>Login</button>
                </Form>
            </div>
        </div>
    );
}
