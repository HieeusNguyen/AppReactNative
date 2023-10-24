import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import SearchScreen from "./screens/SearchScreen";
import MapScreen from "./screens/MapScreen";

const Tab = createBottomTabNavigator();

const screenOptions = {
    headerShown: false,
};

const SignedInStack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Categories" component={CategoriesScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default SignedInStack;
