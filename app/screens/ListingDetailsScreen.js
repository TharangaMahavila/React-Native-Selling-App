import React from 'react';
import {View,StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import AppText from '../components/AppText';
import Colors from '../config/Colors';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ContactSellerForm from '../components/ContactSellerForm';

function ListingDetailsScreen({route}) {

    const listing = route.params;

    return (
        <Screen>
            <KeyboardAvoidingView
        behavior='position'
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        >
            <Image style={styles.image} resizeMode="contain" preview={{uri: listing.images[0].thumbnailUrl}} uri={listing.images[0].url} tint="light" />
            <View style={styles.container}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>{listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require('../assets/Tharanga.png')}
                        title="Tharanga Mahavila"
                        subTitle="5 Listings"
                    />
                </View>
                <ContactSellerForm listing={listing} />
            </View>
        </KeyboardAvoidingView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        color: Colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    userContainer: {
        
    }
})

export default ListingDetailsScreen;