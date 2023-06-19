import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "@rneui/themed";
import { styles } from "../../Utils/Styles";

const TwoFactorAuthenticationOverlay = () => {
  const [data, setData] = React.useState({
    security_question: "",
    secret_answer: "",
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
          <Text style={styles.overlayHeaderText}>
            Set new security question
          </Text>
          <Text style={{ marginTop: 5, fontSize: 12 }}>
            Fields with asterisk (*) are required.
          </Text>
          <View style={{ margin: 10 }} />

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Security question *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. where were you born?"
              value={data.security_question}
              onChangeText={(text) => handleChange("security_question", text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Secret answer *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. name of city"
              value={data.secret_answer}
              onChangeText={(text) => handleChange("secret_answer", text)}
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
            title="SUBMIT"
            titleStyle={{ fontWeight: "bold", color: "white" }}
            type="clear"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TwoFactorAuthenticationOverlay;
