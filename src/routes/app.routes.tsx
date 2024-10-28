import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../global/styles/pages/welcome";
import { Home } from "../global/styles/pages/home";
import { About } from "../global/styles/pages/about";

const Stack = createNativeStackNavigator()
export function AppRoutes(){
    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='About' component={About} />
    </Stack.Navigator>
}