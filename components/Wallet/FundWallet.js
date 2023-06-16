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
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.headText}>
          How would you like to fund your wallet?
        </Text>
        <Text style={{ marginTop: 5, fontSize: 12 }}>
          Fund with card or bank transfer, find your wallet details below.
        </Text>

        <View style={styles.formContainer}>
          <Text style={styles.subTitle}>Your wallet details</Text>
          <Text>Bank name: {data.bank_name}</Text>
          <Text>Account number: {data.account_number}</Text>
          <Text>Account name: {data.account_name}</Text>

          <Text style={styles.subTitle}>Fund with your card</Text>
          <Text style={styles.label}>Card Number</Text>
          <TextInput
            style={styles.input}
            placeholder="0000 0000 0000 0000"
            value={cardDetails.card_number}
            maxLength={16}
            onChangeText={(text) => handleCardChange("card_number", text)}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.label}>CVV</Text>
              <TextInput
                style={[styles.input, styles.input.smallInput]}
                placeholder="123 "
                value={cardDetails.cvv}
                maxLength={3}
                onChangeText={(text) => handleCardChange("cvv", text)}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.label}>Valid Thru</Text>
              <TextInput
                style={[styles.input, styles.input.smallInput]}
                secureTextEntry
                placeholder="00/00"
                value={cardDetails.valid_thru}
                onChangeText={(text) => handleCardChange("valid_thru", text)}
              />
            </View>
          </View>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.input}
            placeholder="0.00"
            value={cardDetails.amount}
            maxLength={16}
            onChangeText={(text) => handleCardChange("amount", text)}
          />
        </View>
        <Button
          style={styles.button}
          title="SAVE"
          titleStyle={{ fontWeight: "bold", color: "white" }}
          type="clear"
        />
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
    backgroundColor: "white",
    height: height * 0.8,
    width: width * 1.0,
    justifyContent: "flex-start",
    paddingHorizontal: 30,
  },
  formContainer: {
    justifyContent: "center",
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  label: {
    fontSize: 10,
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
    shadowOpacity: 0.4,
    shadowRadius: 4,
    marginBottom: 10,
    smallInput: {
      width: 150,
    },
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
    borderRadius: 10,
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
export default FundWalletOverlay;
