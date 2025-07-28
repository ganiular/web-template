import React from 'react';
import styles from './MyAuthenticationPage.module.css';
import logo from '../../../assets/logos/full-color-logo.png';
import LanguageDropdown from '../../components/LanguageDropdown';
import { FieldTextInput, Form } from '../../../components';
import * as validators from '../../../util/validators';
import { FormattedMessage, useIntl } from '../../../util/reactIntl';

export default function MySignUpPage({
    formId,
    handleSubmit,
    inProgress,
    invalid,
    termsAndConditions,
    preselectedUserType,
    userTypes,
    userFields,
    values,
}) {
    const intl = useIntl();

    // email
    const emailRequired = validators.required(
        intl.formatMessage({
            id: 'SignupForm.emailRequired',
        })
    );
    const emailValid = validators.emailFormatValid(
        intl.formatMessage({
            id: 'SignupForm.emailInvalid',
        })
    );

    // password
    const passwordRequiredMessage = intl.formatMessage({
        id: 'SignupForm.passwordRequired',
    });
    const passwordMinLengthMessage = intl.formatMessage(
        {
            id: 'SignupForm.passwordTooShort',
        },
        {
            minLength: validators.PASSWORD_MIN_LENGTH,
        }
    );
    const passwordMaxLengthMessage = intl.formatMessage(
        {
            id: 'SignupForm.passwordTooLong',
        },
        {
            maxLength: validators.PASSWORD_MAX_LENGTH,
        }
    );
    const passwordMinLength = validators.minLength(
        passwordMinLengthMessage,
        validators.PASSWORD_MIN_LENGTH
    );
    const passwordMaxLength = validators.maxLength(
        passwordMaxLengthMessage,
        validators.PASSWORD_MAX_LENGTH
    );
    const passwordRequired = validators.requiredStringNoTrim(passwordRequiredMessage);
    const passwordValidators = validators.composeValidators(
        passwordRequired,
        passwordMinLength,
        passwordMaxLength
    );
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img src={logo} alt="Standify Logo" className={styles.logo} />
                <LanguageDropdown />
            </header>

            <div className={styles.formBox}>
                <h1 className={styles.title}>Sign Up</h1>
                <p className={styles.subtitle}>Let’s Get You Started</p>

                <Form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.roleSelectorWrapper}>
                        <p>Select a user type</p>
                        <div className={styles.roleSelector}>
                            <button className={`${styles.roleBtn} ${styles.active}`}>Vendor</button>
                            <button className={styles.roleBtn}>Exhibitor</button>
                            <button className={styles.roleBtn}>Organizer</button>
                        </div>
                    </div>
                    <div className={styles.rowIfLong}>
                        <div className={styles.inputWrapper}>
                            <input type="text" name='fname' placeholder="First name" className={styles.input} id={formId ? `${formId}.fname` : 'fname'} />
                        </div>
                        <div className={styles.inputWrapper}>
                            <input type="text" name='lname' placeholder="Last name" className={styles.input} id={formId ? `${formId}.lname` : 'lname'} />
                        </div>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="email" name='email' placeholder="Email" className={styles.input} id={formId ? `${formId}.email` : 'email'} />

                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="password" name='password' placeholder="Password" className={styles.input} id={formId ? `${formId}.password` : 'password'} />
                    </div>

                    <label className={styles.terms}>
                        <input type="checkbox" />
                        <span>
                            I accept the <a href="">Terms of Service</a> and the <a href="">Privacy Policy</a>

                        </span>
                    </label>

                    <button type="submit" className={styles.submitBtn}>Sign Up</button>
                </Form>
            </div>
        </div>
    );
}
