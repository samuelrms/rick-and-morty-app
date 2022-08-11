import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Character } from "../pages/Character";
import { Home } from "../pages/Home";
import { Welcome } from "../pages/Welcome";

const Stack = createNativeStackNavigator()

export function AppRoutes ({routes}) {
    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Character" component={Character}/>
    </Stack.Navigator>
}