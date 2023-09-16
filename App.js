/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from './src/views/RegisterScreen';
import LoginScreen from './src/views/LoginScreen';
// import BottomNav from './src/views/BottomNav'

const Stack = createNativeStackNavigator();

const App = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="RegisterSreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
