import React from "react";
import IMG_8165 from "../../assets/images/LoginBackground.jpg";
import { Button } from "@rneui/themed";

import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

export function LoginScreen({ navigation }) {
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
          <View style={styles.loginInfoContainer.inputContainer}>
            <Text style={styles.loginInfoContainer.label}>Email</Text>
            <TextInput
              style={styles.loginInfoContainer.input}
              placeholder="john.doe@email.com"
              value={data.email}
              onChangeText={(text) => handleChange("email", text)}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.loginInfoContainer.inputContainer}>
            <Text style={styles.loginInfoContainer.label}>Password</Text>
            <TextInput
              style={styles.loginInfoContainer.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => handleChange("password", text)}
            />
            <Button
              style={styles.loginInfoContainer.loginButton}
              title="LOG IN"
              titleStyle={{ fontWeight: "bold", color: "white" }}
              type="clear"
              onPress={() => navigation.navigate("Dashboard")}
            />
          </View>
          <Text style={styles.loginInfoContainer.bottomText}>
            Forgot password?{"  "}
            <TouchableOpacity
              onPress={() => navigation.navigate("Reset-Password")}
            >
              <Text style={styles.loginInfoContainer.signUpLink}>
                Reset Now
              </Text>
            </TouchableOpacity>
          </Text>
          <Text style={styles.loginInfoContainer.bottomText}>
            Dont't have an account?{"  "}
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.loginInfoContainer.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    marginTop: 40,
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    flexDirection: "column",
  },
  loginInfoContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 50,
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
      padding: 10,
      borderRadius: 5,
      width: 250,
      backgroundColor: "white",
    },
    loginButton: {
      width: 150,
      marginTop: 15,
      marginLeft: 50,
      backgroundColor: "#922268",
      borderColor: "white",
      borderRadius: 5,
    },
    bottomText: {
      color: "white",
    },
    signUpLink: {
      color: "#e845a9",
    },
  },
});
