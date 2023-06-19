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
import { styles } from "../Utils/Styles";
const WithdrawOverlay = () => {
  const [data, setData] = React.useState({
    amount: "",
    password: "",
    withdrawl_account_id: "",
    otp_2fa: "",
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
          <Text style={styles.overlayHeaderText}>Withdraw from wallet</Text>
          <Text style={{ marginTop: 5, fontSize: 12 }}>
            You can only withdraw to saved withdrawal accounts.
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Choose Withdrawal Account</Text>

            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
              }}
              style={{ width: "100%" }}
            >
              <TextInput
                style={styles.input}
                editable={false}
                placeholder="bank name, account number, account name"
                value={data.withdrawl_account_id}
                onChangeText={(text) =>
                  handleChange("withdrawl_account_id", text)
                }
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Amount to withdraw</Text>
            <TextInput
              style={styles.input}
              placeholder="0.00"
              value={data.amount}
              onChangeText={(text) => handleChange("amount", text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>OTP / 2FA</Text>
            <TextInput
              style={styles.input}
              placeholder="OTP code / 2FA answer"
              value={data.otp_2fa}
              onChangeText={(text) => handleChange("otp_2fa", text)}
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
            title="PROCEED"
            titleStyle={{ fontWeight: "bold", color: "white" }}
            type="clear"
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default WithdrawOverlay;
