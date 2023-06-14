import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Keyboard,
  Button as DefaultButton,
  TouchableWithoutFeedback,
} from "react-native";
import Modal from "react-native-modal";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import Checkbox from "expo-checkbox";
import { Button } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";

export function KycScreen({ navigation }) {
  const [isPickerVisible, setIsPickerVisible] = React.useState(false);
  const [images, setImages] = React.useState({ front: {}, back: {} });
  const [checked, setChecked] = React.useState({ front: false, back: false });
  const [name, setName] = React.useState("front");
  const [data, setData] = React.useState({
    bvn: "",
    type_of_id: "",
    id_number: "",
    front_of_id: "",
    back_of_id: "",
  });

  const handleChange = (key, value) => {
    setData((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const handleClosePicker = () => {
    setIsPickerVisible(false);
  };

  const handleConfirmPicker = () => {
    setIsPickerVisible(false);
  };

  const pickImage = async (name) => {
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
            Make sure uploaded documents are clear
          </Text>
          <Text style={{ fontSize: 12 }}>
            Fields with asterisk (*) are required
          </Text>
        </View>

        <View style={styles.signupContainer.inputContainer}>
          <Text style={styles.signupContainer.label}>
            Bank Verification Number (BVN) *
          </Text>
          <TextInput
            style={styles.signupContainer.input}
            placeholder="12345678901"
            maxLength={11}
            underlineColor="transparent"
            value={data.bvn}
            onChangeText={(text) => handleChange("bvn", text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.signupContainer.inputContainer}>
          <Text style={styles.signupContainer.label}>
            Type of Identification (ID) *
          </Text>

          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              setIsPickerVisible(true);
            }}
          >
            <TextInput
              style={styles.signupContainer.input}
              maxLength={11}
              editable={false}
              placeholder="Type of Identification"
              value={data.type_of_id}
            />
          </TouchableOpacity>

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
          <Text style={styles.signupContainer.label}>ID No *</Text>
          <TextInput
            style={styles.signupContainer.input}
            placeholder="12345678901"
            maxLength={20}
            value={data.id_number}
            onChangeText={(text) => handleChange("id_number", text)}
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
