import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Colors from '../config/Colors';

function ListItemDeleteAction({onpress}) {
    return (
        <TouchableWithoutFeedback onPress={onpress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="trash-can" size={35} color={Colors.white}/>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ListItemDeleteAction;