import React, { useState } from "react";
import {
  ScrollView,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "@rneui/themed";
import { styles } from "../../Utils/Styles";

const UpdateEmailAddressOverlay = () => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (key, value) => {
    setData((prevState) => {
      return { ...prevState, [key]: value };
    });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.overlayContainer}>
          <Text style={styles.overlayHeaderText}>Update Email</Text>
          <Text style={{ marginTop: 5, fontSize: 12 }}>
            Fields with asterisk (*) are required.
          </Text>
          <View style={{ margin: 10 }} />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>New Email Address *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. example@email.com"
              value={data.new_email}
              onChangeText={(text) => handleChange("email", text)}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password *</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="your login password"
              value={data.password}
              onChangeText={(text) => handleChange("password", text)}
            />
          </View>

          <Button
            style={styles.button}
            title="VERIFY EMAIL"
            titleStyle={{ fontWeight: "bold", color: "white" }}
            type="clear"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UpdateEmailAddressOverlay;
