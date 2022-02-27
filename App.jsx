/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Feb 26 2022 19:34:20 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Home from "./screens/Home/Home";

// material bottom tab
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// react-native navigation
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "./constants";
import Zen from "./screens/Zen/Zen";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{
          // borderTopWidth: 1,
          // borderTopColor: colors.darkgrey,
          backgroundColor: colors.black,
        }}
        shifting={true}
        // labeled={true}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Daily",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="calendar-today" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Zen"
          component={Zen}
          options={{
            tabBarLabel: "Zen",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="gamepad" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
