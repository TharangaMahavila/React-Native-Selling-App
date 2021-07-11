import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';

import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';
import routes from '../components/navigation/routes';
import Colors from '../config/Colors';
import useAuth from '../auth/useAuth';

const menuItems = [
    {
        title: "My Listing",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: Colors.primary
        },
        targetScreen: routes.MESSAGES,
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: Colors.secondary
        },
        targetScreen: routes.MESSAGES,
    }
]

function AccountScreen({navigation }) {

    const {user, logOut} = useAuth();

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title={user.name}
                    subTitle={user.email}
                    image={require('../assets/Tharanga.png')}/>
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title.toString()}
                    ItemSeparatorComponent={ListItemSeperator}
                    
                    renderItem={({item})=> 
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                            }
                            onPress= {()=> navigation.navigate(item.targetScreen)}
                            />} 
                />
            </View>
            <ListItem 
                title="Log out"
                onPress={()=> logOut()}
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d" />
                } />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: Colors.light
    }
})

export default AccountScreen