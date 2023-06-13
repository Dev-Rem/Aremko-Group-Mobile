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

const { width, height } = Dimensions.get("window");

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
        <View style={styles.container}>
          <Text style={styles.headText}> Account Info Update</Text>
          <Text style={{ marginTop: 5, fontSize: 12 }}>
            Fields with asterisk (*) are required.
          </Text>

          <View style={styles.formContainer}>
            <Text style={styles.label}>First Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="John"
              value={data.firstname}
              onChangeText={(text) => handleChange("firstname", text)}
            />
            <Text style={styles.label}>Last Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="Doe"
              value={data.lastname}
              onChangeText={(text) => handleChange("lastname", text)}
            />

            <Text style={styles.label}>Phone Number *</Text>
            <TextInput
              style={styles.input}
              placeholder="000 0000 0000"
              value={data.phone_number}
              keyboardType="numeric"
              onChangeText={(text) => handleChange("phone_number", text)}
            />
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

const styles = StyleSheet.create({
  headText: {
    backgroundColor: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    height: height * 0.7,
    width: width * 1.0,
    justifyContent: "flex-start",
    padding: 30,
  },
  formContainer: {
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    padding: 10,
    borderRadius: 5,
    fontSize: 15,
    width: "100%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#922268",
    borderColor: "white",
    borderRadius: 5,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  overlayContent: {
    backgroundColor: "#d6d6d6",
    width: "100%",
    borderRadius: 8,
    paddingTop: 40,
    flexDirection: "column",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});
export default UpdateAccountInfoOverlay;
