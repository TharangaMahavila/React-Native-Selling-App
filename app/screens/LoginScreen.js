import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import authApi from '../api/auth';
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function LoginScreen(props) {

    const {login} = useAuth();

    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({email, password})=> {
        const result = await authApi.login(email, password);
        if(!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        login(result.data);
    }

    return (
        <Screen style={styles.container}>
            <Image 
            style={styles.logo}
            source={require('../assets/logo.png')} />
            <AppForm
            initialValues={{email: '', password: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
                <ErrorMessage error="Invalid email and/or password." visible={loginFailed} />
                <AppFormField
                        name="email" 
                        icon="email" 
                        placeholder="Email" 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        keyboardType="email-address"
                        textContentType="emailAddress"/>
                        <AppFormField
                        name="password" 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Password"
                        textContentType="password"
                        secureTextEntry />
                        <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})

export default LoginScreen;