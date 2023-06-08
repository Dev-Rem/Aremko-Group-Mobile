import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Button } from "@rneui/themed";
import Checkbox from "expo-checkbox";

export function SignUpScreen({ navigation }) {
  const [value, setValue] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checked, setChecked] = React.useState(false);

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
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.signupContainer}>
        <View style={styles.signupMessageContainer}>
          <Text style={styles.signupMessageContainer.signupMessage}>
            SIGN UP
          </Text>
          <Text style={{ color: "#922268", fontSize: 20 }}>
            One account for all our platforms
          </Text>
          <Text style={{ fontSize: 15 }}>
            Please kindly provide accurate information
          </Text>
          <Text style={{ fontSize: 15 }}>As you will need them later on.</Text>
        </View>

        <View style={styles.signupContainer.nameContainer}>
          <View style={styles.signupContainer.nameContainer.inputNameContainer}>
            <Text style={styles.signupContainer.inputContainer.label}>
              First Name *
            </Text>

            <TextInput
              style={styles.signupContainer.nameContainer.inputName}
              placeholder="John"
            />
          </View>
          <View style={styles.signupContainer.nameContainer.inputNameContainer}>
            <Text style={styles.signupContainer.inputContainer.label}>
              Last Name *
            </Text>
            <TextInput
              style={styles.signupContainer.nameContainer.inputName}
              placeholder="Doe"
            />
          </View>
        </View>
        <View style={styles.signupContainer.inputContainer}>
          <Text style={styles.signupContainer.inputContainer.label}>
            Email *
          </Text>
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
            Phone Number *
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.signupContainer.input}
              placeholder="+234 7832479232"
              value={value}
              onChangeText={handleTextChange}
              keyboardType="phone-pad"
              maxLength={15}
            />
          </View>
        </View>
        <View style={styles.signupContainer.nameContainer}>
          <View style={styles.signupContainer.nameContainer.inputNameContainer}>
            <Text style={styles.signupContainer.inputContainer.label}>
              Password *
            </Text>
            <TextInput
              style={styles.signupContainer.nameContainer.inputName}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={handlePasswordChange}
            />
          </View>
          <View style={styles.signupContainer.nameContainer.inputNameContainer}>
            <Text style={styles.signupContainer.inputContainer.label}>
              Confirm password *
            </Text>
            <TextInput
              style={styles.signupContainer.nameContainer.inputName}
              placeholder="Confirm password"
              secureTextEntry
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Checkbox
            style={{ width: 15, height: 15, marginRight: 5 }}
            value={checked}
            onValueChange={setChecked}
            color={checked ? "#922268" : undefined}
          />

          <Text>I agree to the terms and conditions</Text>
        </View>
        <Button
          style={styles.signupContainer.loginButton}
          title="SIGN UP"
          titleStyle={{ fontWeight: "bold", color: "white" }}
          type="clear"
          onPress={() => navigation.navigate("Kyc")}
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
