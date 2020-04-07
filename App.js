/*eslint-disable*/

import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import Login from "./Components/Login";
import Home from "./Components/Home";
import Scanner from "./Components/Scanner";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2C93D6",
  },
};

const screenOptions = {
  headerStyle: {
    backgroundColor: "#2C93D6",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#2C93D6" />

      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Welcome" }}
          />

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Scanner" component={Scanner} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
