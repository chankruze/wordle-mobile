import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Platform } from "react-native";
import { colors } from "./constants";
import Keyboard from "./components/Keyboard/Keyboard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {/* title */}
      <Text style={styles.title}>wordle</Text>
      {/* map */}
      
      {/* keyboard */}
      <Keyboard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
});
