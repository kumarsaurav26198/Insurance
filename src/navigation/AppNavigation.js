import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../pages/beforeLogin/LogIn';
import Home from '../pages/afterLogin/Home';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

export const SignedInStack = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export const SignedOutStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LogIn" screenOptions={screenOptions}>
                <Stack.Screen name="LogIn" component={LogIn} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20,
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'black',
    },
    headerStyle: {
        backgroundColor: '#f4511e',
    },
});