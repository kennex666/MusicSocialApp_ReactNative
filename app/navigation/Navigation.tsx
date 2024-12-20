import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../constants/color";
import { SCREEN_NAME } from "../constants/screen";
import HomeScreen from "../screens/HomeScreen";
import TestingScreen from '../screens/TestingScreen';
import AlbumControlScreen from '../screens/AlbumControlScreen/index';
import AlbumScreen from "../screens/AlbumScreen";
import BottomTabBar from "../screens/BottomTabScreen";
import TabNavigator from "./TabNavigation";
import PlaylistScreen from '../screens/PlaylistScreen/index';
import StartScreen from "../screens/StartScreen";
import SignUpEmailScreen from "../screens/SignUpEmailScreen";
import SignUpPasswordScreen from "../screens/SignUpPasswordScreen";
import SignUpGenderScreen from "../screens/SignUpGenderScreen";
import SignUpNameScreen from "../screens/SignUpNameScreen";
import LoginScreen from "../screens/LoginScreen";

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
      {/* <Stack.Screen name={SCREEN_NAME.HOME} component={HomeScreen} /> */}
      {/* <Stack.Screen name={SCREEN_NAME.LOGIN} component={HomeScreen} /> */}
      {/* <Stack.Screen name={SCREEN_NAME.REGISTER} component={HomeScreen} /> */}
      <Stack.Screen name={SCREEN_NAME.START} component={StartScreen} />
      <Stack.Screen name={SCREEN_NAME.SIGNUP_EMAIL} component={SignUpEmailScreen} />
      <Stack.Screen name={SCREEN_NAME.SIGNUP_PASSWORD} component={SignUpPasswordScreen} />
      <Stack.Screen name={SCREEN_NAME.SIGNUP_GENDER} component={SignUpGenderScreen} />
      <Stack.Screen name={SCREEN_NAME.SIGNUP_NAME} component={SignUpNameScreen} />
      <Stack.Screen name={SCREEN_NAME.LOGIN} component={LoginScreen} />
      <Stack.Screen name={SCREEN_NAME.HOME} component={HomeScreen} />
      <Stack.Screen name={SCREEN_NAME.TESTING} component={TestingScreen} />
      <Stack.Screen name={SCREEN_NAME.BOTTOM_TAB} component={TabNavigator} />
      <Stack.Screen name={SCREEN_NAME.AlbumScreen} component={AlbumScreen} />
      <Stack.Screen
        name={SCREEN_NAME.PlaylistScreen}
        component={PlaylistScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
