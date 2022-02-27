/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Feb 26 2022 19:43:07 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants";

const Toolbar = () => {
  return (
    <View style={styles.toolbar}>
      {/* settings */}
      {/* TODO: implement settings modal opeining */}
      {/* <Ionicons name="md-settings-outline" size={32} style={styles.settings} /> */}
      {/* title */}
      <Text style={styles.title}>wordle mobile</Text>
      {/* help */}
      {/* TODO: implement help modal opening */}
      <TouchableOpacity onPress={() => console.log("help me!")}>
        <Ionicons name="md-help-circle-outline" size={32} style={styles.help} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    padding: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    flex: 1,
    color: colors.lightgrey,
    textTransform: "capitalize",
    fontSize: 24,
    fontWeight: "bold",
    // textAlign: "center",
  },
  help: {
    color: colors.darkgrey,
    // padding: 4
  },
});

export default Toolbar;
