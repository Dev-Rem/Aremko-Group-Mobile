import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  View,
  Dimensions,
} from "react-native";
import { ListItem } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import UpdateAccountInfoOverlay from "./UpdateAccountInfo";
import UpdateKycOverlay from "./UpdateKyc";
import ChangePasswordOverlay from "./ChangePassword";
import UpdateEmailAddressOverlay from "./UpdateEmailAddress";
const { width, height } = Dimensions.get("window");

const AccountSettingsOverlay = () => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const openOverlay = (item) => {
    setSelectedItem(item);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.headText}>Account Settings</Text>
        <TouchableOpacity onPress={() => openOverlay("accountInfoUpdate")}>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Subtitle>Account info update </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openOverlay("updateKyc")}>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Subtitle>Update KYC </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openOverlay("changePassword")}>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Subtitle>Change Password </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openOverlay("updateEmail")}>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Subtitle>Update Email Address </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openOverlay("updateKyc")}>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Subtitle>Notification Settings </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      </View>

      <Modal visible={showOverlay} animationType="slide" transparent={true}>
        <View style={styles.overlay}>
          <View style={styles.overlayContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeOverlay}>
              <Icon name="close" type="material" color="black" size={30} />
            </TouchableOpacity>
            {selectedItem === "accountInfoUpdate" ? (
              <UpdateAccountInfoOverlay />
            ) : (
              <></>
            )}
            {selectedItem === "updateKyc" ? <UpdateKycOverlay /> : <></>}
            {selectedItem === "updateEmail" ? (
              <UpdateEmailAddressOverlay />
            ) : (
              <></>
            )}

            {selectedItem === "changePassword" ? (
              <ChangePasswordOverlay />
            ) : (
              <></>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headText: {
    backgroundColor: "white",
    paddingLeft: 12,
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    height: height * 0.7,
    width: width * 1.0,
    justifyContent: "flex-start",
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
export default AccountSettingsOverlay;
