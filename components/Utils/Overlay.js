import React from "react";
import { View, Modal, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import AccountSettings from "..//User/Profile/AccountSettings";

export function Overlay({ showOverlay, children, item }) {
  return (
    <Modal visible={showOverlay} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.overlayContent}>
          <TouchableOpacity style={styles.closeButton} onPress={closeOverlay}>
            <Icon name="close" type="material" color="black" size={30} />
          </TouchableOpacity>
          {/* Content of the overlay screen */}
          {children}
          <AccountSettings />
        </View>
      </View>
    </Modal>
  );
}
