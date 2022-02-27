/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Feb 26 2022 19:34:20 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

// react-native navigation
import { NavigationContainer } from "@react-navigation/native";
// drawer navigator
import { createDrawerNavigator } from "@react-navigation/drawer";
// screens
import Daily from "./screens/Daily/Daily";
import Zen from "./screens/Zen/Zen";
// colors
import { colors } from "./constants";
// icons
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Daily"
        defaultStatus="open"
        headerMode="none"
        screenOptions={{
          // headerShown: false,
          headerStyle: {
            backgroundColor: colors.black,
          },
          headerShadowVisible: false,
          headerTintColor: colors.white,
          drawerActiveTintColor: colors.primary,
          drawerInactiveTintColor: colors.lightgrey,
          drawerStyle: {
            backgroundColor: colors.black,
            width: 240,
          },
        }}
      >
        <Drawer.Screen
          name="Daily"
          component={Daily}
          options={{
            title: "Daily Wordle",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="md-calendar-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Zen"
          component={Zen}
          options={{
            title: "Zen Mode",
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name="md-game-controller-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
