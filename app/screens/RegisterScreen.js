import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup'

import Screen from '../components/Screen';
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms';
import usersApi from '../api/users';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import ActivityIndicator from '../components/ActivityIndicator';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function RegisterScreen(props) {

    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (userInfo)=> {
        const result = await registerApi.request(userInfo);
        console.log(result)

        // if(!result.ok){
        //     if(result.data) setError(result.data.error);
        //     else{
        //         setError("An unexpected error occurred.");
        //         console.log(result);
        //     }
        //     return;
        // }

        // const {data: authToken} = await loginApi.request(
        //     userInfo.email,
        //     userInfo.password
        // );
        // auth.login(authToken);
    }

    return (
        <>
        <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
        <Screen style={styles.container}>
            <AppForm
            initialValues={{name: '', email: '', password: ''}}
            onSubmit={(values)=> handleSubmit(values)}
            validationSchema={validationSchema}
            >
                <ErrorMessage error={error} visible={error} />
                <AppFormField
                name="name" 
                icon="account" 
                placeholder="Name" 
                autoCapitalize="none" 
                autoCorrect={false} />
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
                <SubmitButton title="Register" />
            </AppForm>
        </Screen>
        </>
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

export default RegisterScreen;