import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
