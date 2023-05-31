import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import IMG_8165 from "../assets/images/background.jpg";

export function SignUpScreen() {
  return (
    <ImageBackground source={IMG_8165} style={styles.backgroundImage}>
      <View></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    marginTop: 45,
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    flexDirection: "column",
  },
});
