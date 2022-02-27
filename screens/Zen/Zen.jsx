/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Feb 26 2022 20:27:30 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Layout from "../../components/Layout";

const Zen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Zen Mode</Text>
        <Text style={styles.subtitle}>Coming Soon!</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "lightgreen",
    fontSize: 48,
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
    fontSize: 24,
  },
});

export default Zen;
