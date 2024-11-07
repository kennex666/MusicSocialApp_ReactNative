import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../constants/color";
import { SCREEN_NAME } from "../constants/screen";
import HomeScreen from "../screens/HomeScreen";
import TestingScreen from "../screens/TestingScreen";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.TESTING}
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
    </Stack.Navigator>
  );
};

export default Navigator;
