import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Dimensions,
  Keyboard,
  Modal,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "../../Utils/Styles";

const UpdateKycOverlay = () => {
  const [selectedItem, setSelectedItem] = React.useState("");
  const [isTypeOfIdPickerVisible, setIsTypeOfIdPickerVisible] =
    React.useState(false);
  const [data, setData] = React.useState({
    bvn: "",
    type_of_id: "",
    id_number: "",
    front_of_id: "",
    back_of_id: "",
    password: "",
  });

  const handleChange = (key, value) => {
    setData((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const handleClosePicker = () => {
    setIsTypeOfIdPickerVisible(false);
  };

  const handleConfirmPicker = () => {
    setIsTypeOfIdPickerVisible(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.overlayContainer}>
          <Text style={styles.overlayHeaderText}>Update KYC</Text>
          <Text style={{ marginTop: 5, fontSize: 12 }}>
            Kindly make sure all uploaded documents are clear.
          </Text>
          <Text style={{ marginTop: 5, fontSize: 12 }}>
            Fields with asterisk (*) are required.
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Bank Verification Number (BVN) *</Text>
            <TextInput
              style={styles.input}
              placeholder="12345678901"
              maxLength={11}
              value={data.bvn}
              onChangeText={(text) => handleChange("bvn", text)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Type of Identification (ID) *</Text>
            <TouchableOpacity
              onPress={() => {
                setIsTypeOfIdPickerVisible(true);
                Keyboard.dismiss();
              }}
              style={{ minWidth: "100%" }}
            >
              <TextInput
                style={styles.input}
                maxLength={11}
                value={selectedItem}
                editable={false}
                placeholder="Type of Identification"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>ID No *</Text>
            <TextInput
              style={styles.input}
              placeholder="12345678901"
              maxLength={11}
              value={data.id_number}
              onChangeText={(text) => handleChange("id_number", text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
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
      {/* <Modal
        isVisible={isTypeOfIdPickerVisible}
        onBackdropPress={handleClosePicker}
        onBackButtonPress={handleClosePicker}
        useNativeDriverForBackdrop
        style={{ margin: 0, justifyContent: "flex-end" }}
      >
        <View style={{ backgroundColor: "white" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              backgroundColor: "#e5e5e5",
            }}
          >
            <Button title="Confirm" onPress={handleConfirmPicker} />
          </View>

          <Picker
            selectedValue={data.type_of_id}
            onValueChange={(value) => handleChange("type_of_id", value)}
          >
            <Picker.Item label="Select Type of ID" value="" />
            <Picker.Item
              label="International Passport"
              value="International Passport"
            />
            <Picker.Item
              label="National Identification Number"
              value="National Identification Number"
            />
            <Picker.Item label="Driver's License" value="Driver's License" />
          </Picker>
        </View>
      </Modal> */}
    </KeyboardAvoidingView>
  );
};

export default UpdateKycOverlay;
