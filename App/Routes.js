import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SplashScreen,
  LoginScreen,
  HomeScreen,
  CovidTestScreen,
  Imunisasi,
  Ehac,
} from "./Pages";

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CovidTestScreen"
        component={CovidTestScreen}
        options={{ headerShown: true, title: "COVID - 19 Test Results" }}
      />
      <Stack.Screen
        name="Imunisasi"
        component={Imunisasi}
        options={{ headerShown: true, title: "Vaksin dan Imunisasi" }}
      />
      <Stack.Screen
        name="Ehac"
        component={Ehac}
        options={{
          headerShown: true,
          title: "EHAC",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};
