import React, { useState } from "react";
import {
  ScrollView,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Button } from "@rneui/themed";
import { styles } from "../../Utils/Styles";
const AddWithdrawalAccountOverlay = () => {
  const [data, setData] = React.useState({
    bank_name: "",
    account_name: "",
    account_number: "",
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
      <View style={[styles.overlayContainer, { flex: 0, padding: 0 }]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 30 }}
        >
          <Text style={styles.overlayHeaderText}>Add Withdrawal Account</Text>
          <Text style={{ marginTop: 5, fontSize: 12 }}>
            Kindly make sure account details provided are correct in order to
            avoid withdrawal issues.
          </Text>
          <Text style={{ marginTop: 5, fontSize: 12 }}>
            Fields with asterisk (*) are required.
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Bank name</Text>

            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
              }}
              style={{ width: "100%" }}
            >
              <TextInput
                style={styles.input}
                editable={false}
                placeholder="Your bank name"
                value={data.bank_name}
                onChangeText={(text) => handleChange("bank_name", text)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Account name</Text>
            <TextInput
              style={styles.input}
              placeholder="Your account name"
              value={data.account_name}
              onChangeText={(text) => handleChange("account_name", text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Account number</Text>
            <TextInput
              style={styles.input}
              placeholder="Your account number"
              value={data.account_number}
              onChangeText={(text) => handleChange("account_number", text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Passowrd</Text>
            <TextInput
              style={styles.input}
              placeholder="Your login password"
              value={data.password}
              onChangeText={(text) => handleChange("password", text)}
            />
          </View>
          <Button
            style={styles.button}
            title="ADD"
            titleStyle={{ fontWeight: "bold", color: "white" }}
            type="clear"
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddWithdrawalAccountOverlay;
