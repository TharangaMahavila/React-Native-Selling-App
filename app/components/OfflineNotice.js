import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import Colors from '../config/Colors';
import AppText from './AppText';
import  Constants  from 'expo-constants';

function OfflineNotice(props) {

    const netInfo = useNetInfo();

    if(netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
        <View style={styles.container}>
            <AppText style={styles.text}>No Internet Connection</AppText>
        </View>
    );

    return null;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: Constants.statusBarHeight,
        zIndex: 1,
        width: "100%"
    },
    text: {
        color: Colors.white
    }
})

export default OfflineNotice;