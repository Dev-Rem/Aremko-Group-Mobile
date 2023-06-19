import React, { useState } from "react";
import {
  ScrollView,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "@rneui/themed";

import { styles } from "../Utils/Styles";

const FundWalletOverlay = () => {
  const [data, setData] = React.useState({
    bank_name: "Wema",
    account_number: "3487239223",
    account_name: "Lorem Ipsum",
  });
  const [cardDetails, setCardDetails] = React.useState({
    card_number: "",
    cvv: "",
    valid_thru: "",
    amount: "",
  });

  const handleChange = (key, value) => {
    setData((prevState) => {
      return { ...prevState, [key]: value };
    });
  };
  const handleCardChange = (key, value) => {
    setCardDetails((prevState) => {
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
          <Text style={styles.overlayHeaderText}>
            How would you like to fund your wallet?
          </Text>
          <Text style={{ marginTop: 5, fontSize: 12 }}>
            Fund with card or bank transfer, find your wallet details below.
          </Text>

          <View style={styles.inputContainer}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginBottom: 10,
                marginTop: 20,
              }}
            >
              Your wallet details
            </Text>
            <Text>Bank name: {data.bank_name}</Text>
            <Text>Account number: {data.account_number}</Text>
            <Text>Account name: {data.account_name}</Text>

            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginBottom: 10,
                marginTop: 20,
              }}
            >
              Fund with your card
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Card Number</Text>
              <TextInput
                style={styles.input}
                placeholder="0000 0000 0000 0000"
                value={cardDetails.card_number}
                maxLength={16}
                onChangeText={(text) => handleCardChange("card_number", text)}
              />
            </View>

            <View style={[styles.nameContainer, { marginTop: 20 }]}>
              <View style={{ flexDirection: "column", width: 150 }}>
                <Text style={styles.label}>CVV</Text>
                <TextInput
                  style={styles.input}
                  placeholder="123"
                  value={cardDetails.cvv}
                  maxLength={3}
                  onChangeText={(text) => handleCardChange("cvv", text)}
                />
              </View>
              <View style={{ flexDirection: "column", width: 150 }}>
                <Text style={styles.label}>Valid Thru</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  placeholder="MM/YY"
                  value={cardDetails.valid_thru}
                  onChangeText={(text) => handleCardChange("valid_thru", text)}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Amount</Text>
              <TextInput
                style={styles.input}
                placeholder="0.00"
                value={cardDetails.amount}
                maxLength={16}
                onChangeText={(text) => handleCardChange("amount", text)}
              />
            </View>
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

export default FundWalletOverlay;
