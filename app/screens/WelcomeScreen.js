import React from 'react';
import { 
    ImageBackground, 
    StyleSheet, 
    View,
    Button,
    Image,
    Text,
} from 'react-native';
import AppButton from '../components/AppButton';
import routes from '../components/navigation/routes';

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground blurRadius={3} style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                <Text style={styles.tagline}>Sell What you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={()=> navigation.navigate(routes.LOGIN)} />
                <AppButton title="Register" color="secondary" onPress={()=> navigation.navigate(routes.REGISTER)} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        padding: 20,
        width: "100%"
    },
    logo: {
        width: 150,
        height: 150,
    },
    logoContainer: {
        position: "absolute",
        top: 50,
        alignItems: "center",
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    }
})

export default WelcomeScreen;