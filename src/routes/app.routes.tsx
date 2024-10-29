import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../pages/welcome";
import { Home } from "../pages/home";
import { About } from "../pages/about";

const Stack = createNativeStackNavigator()
export function AppRoutes(){
    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='About' component={About} />
    </Stack.Navigator>
}