import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { IMAGE_RESOURCE } from "../constants/image_resource";
import { COLORS } from "../constants/color";
import HomeScreen from "../screens/HomeScreen";
import { SCREEN_NAME } from "../constants/screen";
import SearchScreen from "../screens/SearchScreen";
import LibraryScreen from "../screens/LibraryScreen";

function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text>Profile Screen</Text>
    </View>
  );
}

// Custom Tab Bar
function MyTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
            {/* Dynamic Icon */}
            <Image
              source={isFocused ? options.iconActive : options.iconInactive}
              style={styles.icon}
            />
            {/* Label */}
            <Text
              style={{
                color: isFocused ? COLORS.primary.text : COLORS.tertiary.text,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            bottom: 0, // Đặt ở đáy
            left: 0,
            right: 0,
            height: 60, // Chiều cao thanh bar
            borderTopWidth: 0, // Loại bỏ viền nếu cần
          },
        }}
        tabBar={(props) => <MyTabBar {...props} />}
      >
        <Tab.Screen
          name={SCREEN_NAME.HOME}
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            iconActive: IMAGE_RESOURCE.button.home.active,
            iconInactive: IMAGE_RESOURCE.button.home.inactive,
          }}
        />
        <Tab.Screen
          name={SCREEN_NAME.SEARCH}
          component={SearchScreen}
          options={{
            tabBarLabel: "Search",
            iconActive: IMAGE_RESOURCE.button.search.active,
            iconInactive: IMAGE_RESOURCE.button.search.inactive,
          }}
        />
        <Tab.Screen
          name={SCREEN_NAME.LIBRARY}
          component={LibraryScreen}
          options={{
            tabBarLabel: "Your Library",
            iconActive: IMAGE_RESOURCE.button.library.active,
            iconInactive: IMAGE_RESOURCE.button.library.inactive,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: COLORS.primary.background,
    paddingVertical: 10,
    borderTopWidth: 1,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 22,
    height: 22,
    marginBottom: 2,
  },
});
