import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import AccountScreen from '../../screens/AccountScreen';
import MessagesScreen from '../../screens/MessagesScreen';

const Stack = createStackNavigator();

const AccountNavigator = ()=> (
    <Stack.Navigator mode="modal" screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

    }} >
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} options={{headerShown: true}}/>
    </Stack.Navigator>
);

export default AccountNavigator;