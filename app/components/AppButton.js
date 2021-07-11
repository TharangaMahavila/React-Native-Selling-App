import { upperCase } from 'lodash';
import React from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native'

import Colors from '../config/Colors';

function AppButton({title,onPress,width="100%", color="primary"}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: Colors[color]}, width={width}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        padding: 15,
        marginVertical: 10
    },
    text: {
        color: Colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: 'bold'
    }
})

export default AppButton;