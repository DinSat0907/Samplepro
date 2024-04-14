import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "expo-status-bar";
import Login from './Login';
import Home from './Home';


const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
