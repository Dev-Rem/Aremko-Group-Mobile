import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import IMG_8165 from "../assets/images/SignUpBackground.jpg";
import { Button } from "@rneui/themed";

export function SignUpScreen() {
  const [value, setValue] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleTextChange = (text) => {
    // Remove non-numeric characters using regular expression
    const numericValue = text.replace(/[^0-9]/g, "");
    setValue(numericValue);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
    }

    if (!passwordPattern.test(password)) {
      Alert.alert(
        "Invalid Password",
        "Password must contain at least 8 characters, including one lowercase letter, one uppercase letter, one digit, and one special character."
      );
    }
  };
  return (
    // <KeyboardAvoidingView
    //   style={{ flex: 2 }}
    //   behavior={Platform.OS === "ios" ? "padding" : undefined}
    //   keyboardVerticalOffset={10}
    // >
    <ImageBackground source={IMG_8165} style={styles.backgroundImage}>
      <View style={styles.signupContainer}>
        <Text style={styles.signupMessage}> SIGN UP</Text>
        {/* <Text> Please kindly provide accurate information </Text> */}

        <View style={styles.signupContainer.nameContainer}>
          <View>
            <Text style={styles.signupContainer.inputContainer.label}>
              First Name
            </Text>

            <TextInput
              style={styles.signupContainer.nameContainer.inputName}
              placeholder="John"
            />
          </View>
          <View>
            <Text style={styles.signupContainer.inputContainer.label}>
              Last Name
            </Text>
            <TextInput
              style={styles.signupContainer.nameContainer.inputName}
              placeholder="Doe"
            />
          </View>
        </View>
        <View style={styles.signupContainer.inputContainer}>
          <Text style={styles.signupContainer.inputContainer.label}>Email</Text>
          <TextInput
            style={styles.signupContainer.input}
            placeholder="example@email.com"
            value={email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.signupContainer.inputContainer}>
          <Text style={styles.signupContainer.inputContainer.label}>
            Phone Number
          </Text>
          <TextInput
            style={styles.signupContainer.input}
            placeholder="+234 7832479232"
            value={value}
            onChangeText={handleTextChange}
            keyboardType="phone-pad"
            maxLength={15}
          />
        </View>
        <View style={styles.signupContainer.nameContainer}>
          <View>
            <Text style={styles.signupContainer.inputContainer.label}>
              Password
            </Text>
            <TextInput
              style={styles.signupContainer.nameContainer.inputName}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={handlePasswordChange}
            />
          </View>
          <View>
            <Text style={styles.signupContainer.inputContainer.label}>
              Confirm password
            </Text>
            <TextInput
              style={styles.signupContainer.nameContainer.inputName}
              placeholder="Confirm password"
              secureTextEntry
            />
          </View>
        </View>
        <Button
          style={styles.signupContainer.loginButton}
          title="SIGN UP"
          titleStyle={{ fontWeight: "bold", color: "white" }}
          type="clear"
          onPress={validateEmail}
        />
      </View>
    </ImageBackground>
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    marginTop: 45,
    flex: 1,
    resizeMode: "contain",
    width: 450,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  signupMessage: {
    color: "black",
    fontSize: 35,
  },
  signupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    inputContainer: {
      marginBottom: 10,
    },
    label: {
      fontSize: 12,
      fontWeight: "bold",
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: "#922268",
      padding: 10,
      borderRadius: 5,
      fontSize: 15,
      width: 350,
      backgroundColor: "white",
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    loginButton: {
      width: 150,
      marginTop: 15,
      backgroundColor: "#922268",
      borderColor: "white",
      borderRadius: 5,
    },
    nameContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: 350,
      marginBottom: 10,
      inputName: {
        borderWidth: 1,
        borderColor: "#922268",
        padding: 10,
        borderRadius: 5,
        fontSize: 15,
        width: 170,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
    },
  },
});
