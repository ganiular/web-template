import React, { useState } from 'react';
import styles from './MyAuthenticationPage.module.css';
import logo from '../../../assets/logos/full-color-logo.png';
import LanguageDropdown from '../../components/LanguageDropdown';
import { FieldTextInput, Form, NamedLink } from '../../../components';
import * as validators from '../../../util/validators';
import { FormattedMessage, useIntl } from '../../../util/reactIntl';
import AuthErrorBox from './AuthErrorBox';

export default function MySignUpPage({
    className,
    onLoginClicked,
    formId,
    handleSubmit,
    signupError,
    inProgress,
    invalid,
    preselectedUserType,
    userTypes,
    userFields,
    values,
    onOpenTermsOfService,
    onOpenPrivacyPolicy,
}) {
    const [selectedUserType, setSelectedUserType] = useState(null);
    // const intl = useIntl();

    // // email
    // const emailRequired = validators.required(
    //     intl.formatMessage({
    //         id: 'SignupForm.emailRequired',
    //     })
    // );
    // const emailValid = validators.emailFormatValid(
    //     intl.formatMessage({
    //         id: 'SignupForm.emailInvalid',
    //     })
    // );


    // // // password
    // // const passwordRequiredMessage = intl.formatMessage({
    // //     id: 'SignupForm.passwordRequired',
    // // });
    // // const passwordMinLengthMessage = intl.formatMessage(
    // //     {
    // //         id: 'SignupForm.passwordTooShort',
    // //     },
    // //     {
    // //         minLength: validators.PASSWORD_MIN_LENGTH,
    // //     }
    // // );
    // // const passwordMaxLengthMessage = intl.formatMessage(
    // //     {
    // //         id: 'SignupForm.passwordTooLong',
    // //     },
    // //     {
    // //         maxLength: validators.PASSWORD_MAX_LENGTH,
    // //     }
    // // );
    // // const passwordMinLength = validators.minLength(
    // //     passwordMinLengthMessage,
    // //     validators.PASSWORD_MIN_LENGTH
    // // );
    // // const passwordMaxLength = validators.maxLength(
    // //     passwordMaxLengthMessage,
    // //     validators.PASSWORD_MAX_LENGTH
    // // );
    // // const passwordRequired = validators.requiredStringNoTrim(passwordRequiredMessage);
    // // const passwordValidators = validators.composeValidators(
    // //     passwordRequired,
    // //     passwordMinLength,
    // //     passwordMaxLength
    // // );

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
                        name="LoginPage"
                        className={`${styles.roleBtn} ${styles.active}`}>
                        Login
                    </NamedLink> */}
                    <button className={`${styles.roleBtn} ${styles.active}`} onClick={onLoginClicked}>Login</button>
                </div>
            </header>

            <div className={styles.formBox}>
                <h1 className={styles.title}>Sign Up</h1>
                <p className={styles.subtitle}>Let’s Get You Started</p>

                <Form className={styles.form} onSubmit={handleSubmit} noValidate={true}>
                    <fieldset className={styles.roleSelectorWrapper}>
                        <legend className={styles.label}>Select a user type</legend>
                        <div className={styles.roleSelector}>
                            {userTypes.map(({ userType, label }) => (
                                <div className={styles.inputWrapper}>
                                    <label
                                        key={userType}
                                        className={`${styles.roleBtn} ${selectedUserType === userType ? styles.active : ''}`}
                                    >
                                        {label}
                                        <input
                                            type="radio"
                                            name="userType"
                                            value={userType}
                                            required={true}
                                            checked={selectedUserType === userType}
                                            onChange={(e) => setSelectedUserType(e.target.value)}
                                            className={styles.hiddenInput}
                                        />
                                    </label>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                    <div className={styles.rowIfLong}>
                        <div className={styles.inputWrapper}>
                            <input type="text" name='fname' required={true} onInput={clearValidateMessage} placeholder="First name" className={styles.input} id={formId ? `${formId}.fname` : 'fname'} minLength={1} maxLength={1000} />
                        </div>
                        <div className={styles.inputWrapper}>
                            <input type="text" name='lname' required={true} onInput={clearValidateMessage} placeholder="Last name" className={styles.input} id={formId ? `${formId}.lname` : 'lname'} minLength={1} maxLength={1000} />
                        </div>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="email" name='email' required={true} onInput={clearValidateMessage} placeholder="Email" className={styles.input} id={formId ? `${formId}.email` : 'email'} />

                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="password" name='password' required={true} onInput={clearValidateMessage} placeholder="Password" className={styles.input} id={formId ? `${formId}.password` : 'password'} minLength={8} maxLength={256} />
                    </div>

                    <label className={styles.terms}>
                        <input type="checkbox" name='terms' required={true} />
                        <span>
                            I accept the
                            <span
                                role="button"
                                tabIndex={0}
                                onClick={onOpenTermsOfService}
                                className={styles.link}
                            >
                                Terms of Service
                            </span> and the <span
                                role="button"
                                tabIndex={0}
                                onClick={onOpenPrivacyPolicy}
                                className={styles.link}
                            >
                                Privacy Policy
                            </span>
                        </span>
                    </label>



                    {signupError === null ? '' : <AuthErrorBox errors={signupError.apiErrors} />}

                    <button type="submit" className={`${styles.submitBtn} ${inProgress ? styles.loading : ''}`} disabled={inProgress}>Sign Up</button>
                </Form>
            </div>
        </div>
    );
}
