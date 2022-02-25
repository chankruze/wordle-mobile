/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Feb 25 2022 18:17:05 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { StyleSheet, Platform } from "react-native";
import { colors } from "./constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  title: {
    color: colors.lightgrey,
    textTransform: "uppercase",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 7,
  },
  map: {
    alignSelf: "stretch",
    marginVertical: 20,
  },
  row: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
  },
  cell: {
    borderWidth: 3,
    borderColor: colors.darkgrey,
    flex: 1,
    maxWidth: 70,
    aspectRatio: 1,
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    color: colors.lightgrey,
    fontWeight: "bold",
    fontSize: 28,
    textTransform: "uppercase",
  },
});
