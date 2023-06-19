import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "@rneui/themed";

import { styles } from "../../Utils/Styles";

const ChangePasswordOverlay = () => {
  const [data, setData] = React.useState({
    old_password: "",
    new_password: "",
    confirm_new_password: "",
  });

  const handleChange = (key, value) => {
    setData((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const validatePassword = () => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(data.password)) {
      Alert.alert(
        "Invalid Password",
        "Password must contain at least 8 characters, including one lowercase letter, one uppercase letter, one digit, and one special character."
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.overlayContainer}>
          <Text style={styles.overlayHeaderText}>Change Password</Text>
          <Text style={{ marginTop: 5, fontSize: 12 }}>
            Password must include a capital letter a number and a special
            character.
          </Text>
          <Text style={{ marginTop: 5, fontSize: 12 }}>
            Fields with asterisk (*) are required.
          </Text>
          <View style={{ margin: 10 }} />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Old Password *</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Old password"
              value={data.old_password}
              onChangeText={(text) => handleChange("old_password", text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>New Password *</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="New password"
              value={data.new_password}
              onChangeText={(text) => handleChange("new_password", text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm NewPassword *</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Confirm new password"
              value={data.confirm_new_password}
              onChangeText={(text) =>
                handleChange("confirm_new_password", text)
              }
            />
          </View>

          <Button
            style={styles.button}
            title="SAVE"
            titleStyle={{ fontWeight: "bold", color: "white" }}
            type="clear"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ChangePasswordOverlay;
