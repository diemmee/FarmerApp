import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";

import HomeScreen from "../views/HomeScreen";
import SearchScreen from "../views/SearchScreen";
import SettingScreen from "../views/SettingScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarInactiveTintColor: "grey",
                tabBarActiveTintColor: "#085728",
                tabBarStyle: { backgroundColor: "#fff" },
            }}
        >
            <Tab.Screen
                name="HomScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="search1" color={color} size={25} />
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
};

export default TabNavigator;
