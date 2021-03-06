import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import NavigationTheme from './app/components/navigation/NavigationTheme';
import AppNavigator from './app/components/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/components/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/components/navigation/rootNavigation';

export default function App() {

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async ()=> {
      const user = await authStorage.getUser();
      if(user) setUser(user);
  }

  if(!isReady)
    return (<AppLoading startAsync={restoreUser} onFinish={()=> setIsReady(true)} onError={(error)=>console.log('Error in restoring token',error)} />);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <OfflineNotice />
    </AuthContext.Provider>
  );
}
