import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
} from "react-native";
import { Button } from "@rneui/themed";
import Checkbox from "expo-checkbox";

export function ResetPasswordScreen({ navigation }) {
  const [data, setData] = React.useState({
    email: "",
  });

  const handleChange = (key, value) => {
    setData((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.signupContainer}>
        <View style={styles.signupMessageContainer}>
          <Text style={styles.signupMessageContainer.signupMessage}>
            REST PASSWORD
          </Text>
          <Text
            style={{
              color: "#922268",
              fontSize: 18,
            }}
          >
            An email will be sent to your mail inbox
          </Text>
          <Text style={{ fontSize: 15 }}>
            kindly provide email used during sign up
          </Text>
          <Text style={{ marginTop: 5 }}>
            Fields with asterisk (*) are required
          </Text>
        </View>

        <View style={styles.signupContainer.inputContainer}>
          <Text style={styles.signupContainer.label}>Email *</Text>
          <TextInput
            style={styles.signupContainer.input}
            placeholder="example@email.com"
            keyboardType="email-address"
            value={data.email}
            onChangeText={(text) => handleChange("email", text)}
          />
        </View>
        <Button
          style={styles.signupContainer.loginButton}
          title="SEND EMAIL"
          titleStyle={{ fontWeight: "bold", color: "white" }}
          type="clear"
          onPress={() => {
            Alert.alert(
              "Email Sent",
              "Please check your email inbox and follow the instructions given.",
              [
                {
                  text: "OK",
                  onPress: () => {
                    navigation.navigate("Login");
                  },
                },
              ]
            );
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  signupMessageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 50,
    signupMessage: {
      color: "black",
      fontSize: 35,
    },
  },

  signupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 30,
    inputContainer: {
      marginBottom: 10,
      width: "100%",
    },
    label: {
      fontSize: 12,
      fontWeight: "bold",
      marginBottom: 10,
    },
    input: {
      padding: 10,
      borderRadius: 5,
      fontSize: 15,
      width: "100%",
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
      justifyContent: "space-evenly",
      width: "100%",
      marginBottom: 10,
      inputNameContainer: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
      },
      inputName: {
        padding: 10,
        borderRadius: 5,
        fontSize: 15,
        width: "100%",
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
    },
  },
});
