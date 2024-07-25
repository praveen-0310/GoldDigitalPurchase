/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/home';
import Checkout from './src/checkout';
import UserContext from './src/services/shared/userContext';
const App = () => {
  // Variable which is used to store stack navigator
  const RootStack = createStackNavigator();
  // Variable which is store my gold balance 
  const [myGoldBalance, setMyGoldBalance] = useState(0.0)
  return (
    <UserContext.Provider
      value={{
        myGoldBalance: myGoldBalance,
        setMyGoldBalance: setMyGoldBalance,
      }}
    >
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="home" component={Home} options={{ unmountOnBlur: true }} />
          <RootStack.Screen name="checkout" component={Checkout} options={{ unmountOnBlur: true }} />
        </RootStack.Navigator>
      </NavigationContainer >
    </UserContext.Provider >
  );
};

export default App;
