import React from 'react'
import { createStackNavigator, TransitionPreset, CardStyleInterpolators } from "@react-navigation/stack";
import ListingScreen from '../../screens/ListingScreen';
import ListingDetailsScreen from '../../screens/ListingDetailsScreen';

const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 30,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

const Stack = createStackNavigator();

const FeedNavigator = ()=> (
    <Stack.Navigator headerMode="float" mode="modal" screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        gestureDirection: "vertical",
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        // transitionSpec: {
        //     open: config,
        //     close: config
        // }
    }} >
        <Stack.Screen name="Listings" component={ListingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
);

export default FeedNavigator;