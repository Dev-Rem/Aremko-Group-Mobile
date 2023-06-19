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
import { styles } from "../Utils/Styles";
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
        <View style={styles.headerMessageContainer}>
          <Text
            style={{
              color: "black",
              fontSize: 35,
            }}
          >
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

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email *</Text>
          <TextInput
            style={styles.input}
            placeholder="example@email.com"
            keyboardType="email-address"
            value={data.email}
            onChangeText={(text) => handleChange("email", text)}
          />
        </View>
        <Button
          style={styles.button}
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
