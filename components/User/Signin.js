import React from "react";
import IMG_8165 from "../../assets/images/LoginBackground.jpg";
import { Button } from "@rneui/themed";
import { styles } from "../Utils/Styles";

import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Keyboard,
} from "react-native";

export function SigninScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (key, value) => {
    setData((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
    } else {
      // Email is valid, perform further actions
      // e.g., submit form, call API, etc.
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ImageBackground source={IMG_8165} style={styles.backgroundImage}>
        <View style={styles.loginInfoContainer}>
          <View style={{ flexDirection: "column", width: "100%", margin: 10 }}>
            <Text style={[styles.label, { color: "white" }]}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="john.doe@email.com"
              value={data.email}
              onChangeText={(text) => handleChange("email", text)}
              keyboardType="email-address"
            />
          </View>
          <View style={{ flexDirection: "column", width: "100%", margin: 10 }}>
            <Text style={[styles.label, { color: "white" }]}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => handleChange("password", text)}
            />
            <Button
              style={styles.button}
              title="SIGN IN"
              titleStyle={{ fontWeight: "bold", color: "white" }}
              type="clear"
              onPress={() => navigation.navigate("Dashboard")}
            />
          </View>
          <Text
            style={{
              color: "white",
            }}
          >
            Forgot password?
            <TouchableOpacity
              onPress={() => navigation.navigate("Reset-Password")}
            >
              <Text
                style={{
                  color: "#e845a9",
                }}
              >
                Reset Now
              </Text>
            </TouchableOpacity>
          </Text>
          <Text
            style={{
              color: "white",
            }}
          >
            Dont't have an account?{"  "}
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text
                style={{
                  color: "#e845a9",
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
