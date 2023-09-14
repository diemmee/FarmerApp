/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import RegisterScreen from './src/views/RegisterScreen';
// import Loader from './src/views/components/Loader';
// import BottomNav from './src/views/BottomNav'

const App = function () {
  return (
    <>
      <RegisterScreen />
    </>
  );
};

export default App;
