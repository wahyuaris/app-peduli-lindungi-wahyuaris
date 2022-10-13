import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SplashScreen,
  LoginScreen,
  HomeScreen,
  ImmunScreen,
  EhacScreen,
  CovidTestScreen
} from './Pages';

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="ImmunScreen" component={ImmunScreen} options={{headerShown: false}} />
      <Stack.Screen name="EhacScreen" component={EhacScreen} options={{headerShown: false}} />
      <Stack.Screen name="CovidTestScreen" component={CovidTestScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};