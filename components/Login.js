import { StatusBar } from "expo-status-bar";
import React from "react";
import IMG_8165 from "../assets/images/background.jpg";
import { Button } from "@rneui/themed";
import { Input, Icon } from "@rneui/themed";

import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
} from "react-native";

export function LoginPage() {
  return (
    <ImageBackground source={IMG_8165} style={styles.backgroundImage}>
      <View style={styles.loginInfoContainer}>
        <View style={styles.loginInfoContainer.inputContainer}>
          <Text style={styles.loginInfoContainer.label}>Email</Text>
          <TextInput
            style={styles.loginInfoContainer.input}
            placeholder="john.doe@email.com"
          />
        </View>
        <View style={styles.loginInfoContainer.inputContainer}>
          <Text style={styles.loginInfoContainer.label}>Password</Text>
          <TextInput
            style={styles.loginInfoContainer.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Button
            style={styles.loginInfoContainer.loginButton}
            title="LOG IN"
            titleStyle={{ fontWeight: "bold", color: "white" }}
            type="clear"
            onPress={() => console.log("aye")}
          />
        </View>
        <Text style={styles.loginInfoContainer.bottomText}>
          Dont't have an account?{" "}
          <Text style={styles.loginInfoContainer.signUpLink}>SIGN UP</Text>
        </Text>
      </View>
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
  loginInfoContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 80,
    inputContainer: {
      marginBottom: 10,
    },
    label: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
      color: "white",
    },
    input: {
      borderWidth: 1,
      borderColor: "gray",
      padding: 10,
      borderRadius: 5,
      width: 250,
      backgroundColor: "white",
    },
    loginButton: {
      width: 150,
      marginTop: 15,
      marginLeft: 50,
      backgroundColor: "#d8439f",
      borderColor: "white",
      borderRadius: 5,
    },
    bottomText: {
      marginTop: 15,
      color: "white",
    },
    signUpLink: {
      color: "#e845a9",
    },
  },
});
