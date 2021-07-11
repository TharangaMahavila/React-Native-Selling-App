import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../config/Colors';

function NewListingButton({onpress}) {
    return (
        <TouchableOpacity onPress={onpress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name="plus-circle" color={Colors.white} size={40} />
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        borderColor: Colors.white,
        borderWidth: 10,
        alignItems: "center",
        justifyContent: "center",
        bottom: 30,
        height: 80,
        width: 80,
        borderRadius: 40,
    }
})

export default NewListingButton;