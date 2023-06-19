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

const UpdateAccountInfoOverlay = () => {
  const [data, setData] = React.useState({
    firstname: "",
    lastname: "",
    phone_number: "",
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
          <Text style={styles.overlayHeaderText}> Account Info Update</Text>
          <Text style={{ marginTop: 5, fontSize: 12 }}>
            Fields with asterisk (*) are required.
          </Text>
          <View style={{ margin: 10 }} />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="John"
              value={data.firstname}
              onChangeText={(text) => handleChange("firstname", text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="Doe"
              value={data.lastname}
              onChangeText={(text) => handleChange("lastname", text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number *</Text>
            <TextInput
              style={styles.input}
              placeholder="000 0000 0000"
              value={data.phone_number}
              keyboardType="numeric"
              onChangeText={(text) => handleChange("phone_number", text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password*</Text>
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
            title="SAVE"
            titleStyle={{ fontWeight: "bold", color: "white" }}
            type="clear"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UpdateAccountInfoOverlay;
