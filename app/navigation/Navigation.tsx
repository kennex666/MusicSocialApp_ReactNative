import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../constants/color";
import { SCREEN_NAME } from "../constants/screen";
import HomeScreen from "../screens/HomeScreen";
import TestingScreen from '../screens/TestingScreen';
import StartScreen from "../screens/StartScreen";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.START}
      screenOptions={{
        headerShown: false,
        // cardStyle: {
        //   backgroundColor: COLORS.primary.background,
        // },
      }}
    >
      <Stack.Screen name={SCREEN_NAME.HOME} component={HomeScreen} />
      <Stack.Screen name={SCREEN_NAME.LOGIN} component={HomeScreen} />
      <Stack.Screen name={SCREEN_NAME.REGISTER} component={HomeScreen} />
      <Stack.Screen name={SCREEN_NAME.TESTING} component={TestingScreen} />
      <Stack.Screen name={SCREEN_NAME.START} component={StartScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
