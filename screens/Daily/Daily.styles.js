/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Feb 25 2022 18:17:05 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { StyleSheet, Platform } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  map: {
    alignSelf: "stretch",
    // marginVertical: 10,
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
