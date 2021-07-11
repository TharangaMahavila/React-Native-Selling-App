import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import listingApi from '../api/listings';
import Screen from '../components/Screen';
import routes from '../components/navigation/routes';
import Card from '../components/Card'
import Colors from '../config/Colors';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

function ListingScreen({navigation}) {

    const getListingApi = useApi(listingApi.getListings);

    useEffect(()=> {
        getListingApi.request();
    }, []);

    return (
        <>
        <ActivityIndicator visible={getListingApi.loading} color="black" size="large" />
        <Screen style={styles.screen}>
           { getListingApi.error && (<>
                <AppText style={styles.errorText}>Couldn't retrieve the listings.</AppText>
                <AppButton title="Retry" onPress={getListingApi.request} />
           </>)}
           <FlatList
           data={getListingApi.data}
           keyExtractor={listing => listing.id.toString()}
           renderItem={({item})=>
           <Card
                title={item.title}
                subTitle={"Rs"+item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                imageUrl={item.images[0].url}
                thumbnailUrl={item.images[0].thumbnailUrl}
                onPress={()=> navigation.navigate(routes.LISTING_DETAILS, item)} />
           } />
        </Screen>
       </>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.light,
    },
    errorText: {
        alignSelf: "center"
    }
})

export default ListingScreen;