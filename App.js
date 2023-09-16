/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { Component } from "react";
import { Image, useState } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";

import RegisterScreen from "./src/views/RegisterScreen";
import LoginScreen from "./src/views/LoginScreen";
import SearchScreen from "./src/views/SearchScreen";
import LibraryScreen from "./src/views/LibraryScreen";
import SettingScreen from "./src/views/SettingScreen";

import Home from "./src/views/Home";
// import BottomNav from './src/views/BottomNav';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarInactiveTintColor: "#000",
                tabBarActiveTintColor: "#085728",
                tabBarStyle: { backgroundColor: "#F1F1F1" },
            }}
            activeColor="#f0edf6"
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="search1" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Library"
                component={LibraryScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="bars" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="setting" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const App = function () {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="Home" component={MyTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
