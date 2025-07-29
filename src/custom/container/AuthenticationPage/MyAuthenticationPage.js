import MySection from '../Layout/MySection';
import styles from './MyAuthenticationPage.module.css';
import flipStyle from './flipbox.module.css';
import MySignUpPage from './MySignUpPage';
import MyLoginPage from './MyLoginPage';
import { useConfiguration } from '../../../context/configurationContext';
import { pickUserFieldsData, addScopePrefix } from '../../../util/userHelpers';
import { useState } from 'react';

const getNonUserFieldParams = (values, userFieldConfigs) => {
    const userFieldKeys = userFieldConfigs.map(({ scope, key }) => addScopePrefix(scope, key));

    return Object.entries(values).reduce((picked, [key, value]) => {
        const isUserFieldKey = userFieldKeys.includes(key);

        return isUserFieldKey
            ? picked
            : {
                ...picked,
                [key]: value,
            };
    }, {});
};

const MyAuthenticationPage = ({
    isLogin,
    showFacebookLogin,
    showGoogleLogin,
    userType,
    from,
    submitLogin,
    loginError,
    idpAuthError,
    signupError,
    authInProgress,
    submitSignup,
    termsAndConditions, }) => {

    const [flipBack, setFlipBack] = useState(!isLogin);

    const config = useConfiguration();
    const { userFields, userTypes = [] } = config.user;
    const preselectedUserType = userTypes.find(conf => conf.userType === userType)?.userType || null;

    const validateSignUpFormInput = (form) => {
        const values = {}
        for (var field of form) {
            field.setCustomValidity('');
            values[field.name] = field.value;
        }
        return values;
    }

    const handleSubmitSignup = event => {
        event.preventDefault();
        const form = event.target;
        const values = validateSignUpFormInput(form);

        // Native DOM validation
        if (!form.checkValidity()) {
            form.reportValidity(); // shows browser tooltips
            return;
        }


        const { userType, email, password, fname, lname, displayName, ...rest } = values;
        const displayNameMaybe = displayName ? { displayName: displayName.trim() } : {};

        const params = {
            email,
            password,
            firstName: fname.trim(),
            lastName: lname.trim(),
            ...displayNameMaybe,
            publicData: {
                userType,
                ...pickUserFieldsData(rest, 'public', userType, userFields),
            },
            privateData: {
                ...pickUserFieldsData(rest, 'private', userType, userFields),
            },
            protectedData: {
                ...pickUserFieldsData(rest, 'protected', userType, userFields),
                ...getNonUserFieldParams(rest, userFields),
            },
        };

        submitSignup(params);
    };

    console.log({ flipBack });


    return (
        <main>
            <MySection className={styles.main}>
                <div className={styles.backgroundContainter}></div>
                <div className={`${styles.formContainer} ${flipStyle.flipBox} `}>
                    {/* <div className={`${flipStyle.flipBoxInner} ${flipBack ? flipStyle.flipBoxBack : ''}`}> */}

                    {flipBack ?
                        <MySignUpPage
                            className={`${flipStyle.flipBoxBack} ${flipStyle.flipBoxBackFace}`}
                            onLoginClicked={() => setFlipBack(!flipBack)}
                            handleSubmit={handleSubmitSignup}
                            signupError={signupError}
                            inProgress={authInProgress}
                            termsAndConditions={termsAndConditions}
                            preselectedUserType={preselectedUserType}
                            userTypes={userTypes}
                            userFields={userFields} />
                        :

                        <MyLoginPage
                            className={flipStyle.flipBoxFront}
                            onSignupClicked={() => setFlipBack(!flipBack)}
                            handleSubmit={submitLogin}
                            loginError={loginError}
                            inProgress={authInProgress} />
                    }
                </div>

                {/* </div> */}
            </MySection>
        </main>
    );
};

export default MyAuthenticationPage;
