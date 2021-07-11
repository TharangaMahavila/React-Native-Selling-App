import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../config/Colors';
import defaultStyles from '../config/Styles'
import AppText from './AppText';
import PickerItem from './PickerItem';

import Screen from './Screen';
import { FlatList } from 'react-native-gesture-handler';

function AppPicker({icon, placeholder,numberOfColumns=1, items, width="100%", onSelectItem, selectedItem, PickerItemComponent=PickerItem}) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={[styles.container, {width}]}>
                {icon && <MaterialCommunityIcons name={icon} size={20} color={Colors.medium} style={styles.icon}/>}
                {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}
                <MaterialCommunityIcons name="chevron-down" size={20} color={Colors.medium} />
            </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={()=> setModalVisible(false)} />
                    <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({item})=>
                    <PickerItemComponent
                    item={item}
                    label={item.label} onPress={()=>{
                        setModalVisible(false);
                        onSelectItem(item)
                    }}/>} />
                </Screen>
            </Modal>
        </>
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
    placeholder: {
        color: defaultStyles.Colors.medium,
        flex: 1,
    },
    text: {
        flex: 1
    }
})

export default AppPicker;