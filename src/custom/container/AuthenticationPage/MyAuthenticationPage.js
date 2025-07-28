import MySection from '../Layout/MySection';
import styles from './MyAuthenticationPage.module.css';
import MySignUpPage from './MySignUpPage';
import MyLoginPage from './MyLoginPage';
import { useConfiguration } from '../../../context/configurationContext';
import { pickUserFieldsData, addScopePrefix } from '../../../util/userHelpers';

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

const MyAuthenticationPage = ({ isLogin,
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

    const config = useConfiguration();
    const { userFields, userTypes = [] } = config.user;
    const preselectedUserType = userTypes.find(conf => conf.userType === userType)?.userType || null;

    const validateSignUpFormInput = (form) => {
        const values = {}
        for (var field of form) {
            values[field.name] = field.value;
        }
        return values;
    }

    const handleSubmitSignup = event => {
        event.preventDefault();
        const values = validateSignUpFormInput(event.target);

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

    console.log({ isLogin });

    return (
        <main>
            <MySection className={styles.main}>
                <div className={styles.backgroundContainter}></div>
                <div className={styles.formContainer}>
                    {!isLogin ? <MyLoginPage /> : <MySignUpPage onSubmit={handleSubmitSignup} handleSubmit={handleSubmitSignup}
                        inProgress={authInProgress}
                        termsAndConditions={termsAndConditions}
                        preselectedUserType={preselectedUserType}
                        userTypes={userTypes}
                        userFields={userFields} />}
                </div>
            </MySection>
        </main>
    );
};

export default MyAuthenticationPage;
