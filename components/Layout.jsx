/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Feb 26 2022 19:44:14 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { colors } from "../constants";
import Toolbar from "./Toolbar/Toolbar";

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {/* <Toolbar /> */}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    // paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default Layout;
