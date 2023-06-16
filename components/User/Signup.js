import React from "react";
import {
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
import { styles } from "../Utils/Styles";
export function SignUpScreen({ navigation }) {
  const [checked, setChecked] = React.useState(false);
  const [data, setData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
    t_and_c: false,
  });

  const handleChange = (key, value) => {
    setData((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numericValue = /[^0-9]/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(data.email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
    }

    if (!passwordPattern.test(data.password)) {
      Alert.alert(
        "Invalid Password",
        "Password must contain at least 8 characters, including one lowercase letter, one uppercase letter, one digit, and one special character."
      );
    }
    if (numericValue.test(data.phone_number)) {
      Alert.alert("Invalid Phone Number", "Please enter a valid phone number.");
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
            SIGN UP
          </Text>
          <Text style={{ color: "#922268", fontSize: 20 }}>
            One account for all our platforms
          </Text>
          <Text style={{ fontSize: 15 }}>
            Please kindly provide accurate information
          </Text>
          <Text style={{ fontSize: 15 }}>As you will need them later on.</Text>
          <Text style={{ marginTop: 5 }}>
            Fields with asterisk (*) are required.
          </Text>
        </View>

        <View style={styles.nameContainer}>
          <View style={{ flexDirection: "column", width: "47%" }}>
            <Text style={styles.label}>First Name *</Text>

            <TextInput
              style={styles.input}
              placeholder="John"
              value={data.firstname}
              onChangeText={(text) => handleChange("firstname", text)}
            />
          </View>
          <View style={{ flexDirection: "column", width: "47%" }}>
            <Text style={styles.label}>Last Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="Doe"
              value={data.lastname}
              onChangeText={(text) => handleChange("lastname", text)}
            />
          </View>
        </View>
        <View
          style={{ flexDirection: "column", width: "100%", marginBottom: 5 }}
        >
          <Text style={styles.label}>Email *</Text>
          <TextInput
            style={styles.input}
            placeholder="example@email.com"
            keyboardType="email-address"
            value={data.email}
            onChangeText={(text) => handleChange("email", text)}
          />
        </View>
        <View
          style={{ flexDirection: "column", width: "100%", marginBottom: 5 }}
        >
          <Text style={styles.label}>Phone Number *</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.input}
              placeholder="+000 000 000 0000"
              value={data.phone_number}
              onChangeText={(text) => handleChange("phone_number", text)}
              keyboardType="phone-pad"
              maxLength={15}
            />
          </View>
        </View>
        <View style={styles.nameContainer}>
          <View style={{ flexDirection: "column", width: "47%" }}>
            <Text style={styles.label}>Password *</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={data.password}
              onChangeText={(text) => handleChange("password", text)}
            />
          </View>
          <View style={{ flexDirection: "column", width: "47%" }}>
            <Text style={styles.label}>
              Confirm password *
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              secureTextEntry
              value={data.confirm_password}
              onChangeText={(text) => handleChange("confirm_password", text)}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Checkbox
            style={{ width: 15, height: 15, marginRight: 5 }}
            value={data.t_and_c}
            onValueChange={() => handleChange("t_and_c", !data.t_and_c)}
            color={data.terms_and_conditions ? "#922268" : undefined}
          />

          <Text>I agree to the terms and conditions</Text>
        </View>
        <Button
          style={styles.button}
          title="SIGN UP"
          titleStyle={{ fontWeight: "bold", color: "white" }}
          type="clear"
          onPress={() => navigation.navigate("Kyc")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
