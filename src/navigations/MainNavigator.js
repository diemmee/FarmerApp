import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";

import SearchDetailsScreen from "../views/SearchDetailsScreen";
import SearchScreen from "../views/SearchScreen";
import OpenCamera from "../views/OpenCamera";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Main" component={TabNavigator} />

                <Stack.Screen name="SearchScreen" component={SearchScreen} />
                <Stack.Screen
                    name="SearchDetailsScreen"
                    component={SearchDetailsScreen}
                />
                <Stack.Screen name="OpenCamera" component={OpenCamera} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;
