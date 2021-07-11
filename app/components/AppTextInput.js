import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../config/Colors';
import defaultStyles from '../config/Styles'

function AppTextInput({icon, width="100%", ...otherProps}) {
    return (
        <View style={[styles.container, {width}]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={Colors.medium} style={styles.icon} />}
            <TextInput placeholderTextColor={defaultStyles.Colors.medium} style={defaultStyles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
})

export default AppTextInput;