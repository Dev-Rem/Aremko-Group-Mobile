import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput as DefaultTextInput,
  Keyboard,
  Button as DefaultButton,
  TouchableWithoutFeedback,
} from "react-native";
import Modal from "react-native-modal";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import Checkbox from "expo-checkbox";
import { Button } from "@rneui/themed";

export function KycScreen({ navigation }) {
  const [selectedItem, setSelectedItem] = React.useState("");
  const [isPickerVisible, setIsPickerVisible] = React.useState(false);
  const [images, setImages] = React.useState({ front: {}, back: {} });
  const [checked, setChecked] = React.useState({ front: false, back: false });
  const [name, setName] = React.useState("front");

  const handleClosePicker = () => {
    setIsPickerVisible(false);
  };

  const handleConfirmPicker = () => {
    setIsPickerVisible(false);
  };

  const pickImage = async (name) => {
    console.log(name);
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const { uri, fileName, type } = result;
        // Do something with the selected image
        setImages((prevState) => {
          return { ...prevState, [name]: result };
        });
        setChecked((prevState) => {
          return { ...prevState, [name]: true };
        });
        setName("back");
      }
    }
  };

  const undoUpload = (name) => {
    setImages((prevState) => {
      return { ...prevState, [name]: {} };
    });
    setChecked((prevState) => {
      return { ...prevState, [name]: false };
    });
    setName("front");
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.signupContainer}>
        <View style={styles.signupMessageContainer}>
          <Text style={styles.signupMessageContainer.signupMessage}>
            Proof Of Identity
          </Text>
          <Text style={{ color: "#922268", fontSize: 15 }}>
            Kindly make sure all uploaded documents are clear.
          </Text>
        </View>

        <View style={styles.signupContainer.inputContainer}>
          <Text style={styles.signupContainer.inputContainer.label}>
            Bank Verification Number (BVN) *
          </Text>
          <DefaultTextInput
            style={styles.signupContainer.input}
            placeholder="12345678901"
            maxLength={11}
            placeholderTextColor="#bfbfbf"
            underlineColor="transparent"
          />
        </View>
        <View style={styles.signupContainer.inputContainer}>
          <Text style={styles.signupContainer.inputContainer.label}>
            Type of Identification (ID) *
          </Text>

          <TextInput
            placeholder="Type of Identification"
            style={{
              marginTop: 2,
              backgroundColor: "white",
              borderRadius: 5,
              height: 40,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
            }}
            value={selectedItem}
            editable={false}
            underlineColor="transparent"
            placeholderTextColor="#bfbfbf"
            right={
              <TextInput.Icon
                icon="arrow-down-drop-circle-outline"
                style={{ marginTop: 10 }}
                onPress={() => {
                  Keyboard.dismiss();
                  setIsPickerVisible(true);
                }}
              />
            }
          />

          <View>
            <Modal
              isVisible={isPickerVisible}
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
                  selectedValue={selectedItem}
                  onValueChange={(value) => setSelectedItem(value)}
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
                  <Picker.Item
                    label="Driver's License"
                    value="Driver's License"
                  />
                </Picker>
              </View>
            </Modal>
          </View>
        </View>
        <View style={styles.signupContainer.inputContainer}>
          <Text style={styles.signupContainer.inputContainer.label}>
            {" "}
            ID No *
          </Text>
          <DefaultTextInput
            style={styles.signupContainer.input}
            placeholder="12345678901"
            maxLength={11}
            underlineColor="transparent"
            placeholderTextColor="#bfbfbf"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            width: "100%",
            marginBottom: 5,
          }}
        >
          <Text>Front of ID </Text>
          <Checkbox
            style={{ width: 15, height: 15 }}
            value={checked.front}
            disabled={true}
          />
          <Text style={{ fontSize: 10, marginLeft: 10 }}>
            {images.front.assets ? images.front.assets[0].fileName : ""}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Text>Back of ID </Text>
          <Checkbox
            style={{ width: 15, height: 15 }}
            value={checked.back}
            disabled={true}
          />
          <Text style={{ fontSize: 10, marginLeft: 10 }}>
            {images.back.assets ? images.back.assets[0].fileName : ""}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <DefaultButton
            title="Upload"
            onPress={() => pickImage(name)}
            style={{
              marginRight: 10,
              backgroundColor: "#c13cab",
              borderRadius: 5,
              height: 30,
              paddingTop: 0,
            }}
          />
          <DefaultButton
            title="Undo"
            onPress={() => undoUpload(name)}
            style={{
              backgroundColor: "#c13cab",
              borderRadius: 5,
              height: 30,
              paddingTop: 0,
            }}
          />
        </View>

        <Button
          style={styles.signupContainer.loginButton}
          title="SUBMIT"
          titleStyle={{ fontWeight: "bold", color: "white" }}
          type="clear"
          onPress={() => navigation.navigate("Dashboard")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  signupMessageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 50,
    signupMessage: {
      color: "black",
      fontSize: 35,
    },
  },
  signupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 30,
    inputContainer: {
      marginBottom: 10,
      width: "100%",
    },
    dropdown: {
      borderColor: "white",
      width: 350,
    },
    label: {
      fontSize: 12,
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
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    loginButton: {
      width: 150,
      marginTop: 15,
      backgroundColor: "#922268",
      borderColor: "white",
      borderRadius: 5,
    },
    nameContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: "100%",
      marginBottom: 10,
      inputNameContainer: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
      },
      inputName: {
        padding: 10,
        borderRadius: 5,
        fontSize: 15,
        width: "100%",
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
    },
  },
});
