import React, { useState } from "react";
import { ScrollView, TouchableOpacity, Text, Modal, View } from "react-native";
import { ListItem } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import UpdateAccountInfoOverlay from "./UpdateAccountInfo";
import UpdateKycOverlay from "./UpdateKyc";
import ChangePasswordOverlay from "./ChangePassword";
import UpdateEmailAddressOverlay from "./UpdateEmailAddress";
import NotificationSettingsOverlay from "./NotificationSettings";
import ViewWithdrawalAccountsOverlay from "./ViewWithdrawalAccounts";

import { styles } from "../../Utils/Styles";

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
      <View style={[styles.overlayContainer, { padding: 0 }]}>
        <Text style={[styles.overlayHeaderText, { padding: 12 }]}>
          Account Settings
        </Text>
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
        <TouchableOpacity onPress={() => openOverlay("notificationSettings")}>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Subtitle>Notification Settings </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openOverlay("viewWithdrawalAccounts")}>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Subtitle>View withdrawal accounts</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      </View>

      <Modal visible={showOverlay} animationType="slide" transparent={true}>
        <View style={styles.overlay}>
          <View style={styles.overlayContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeOverlay}>
              <Icon name="close" type="material" color="black" size={50} />
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
            {selectedItem === "notificationSettings" ? (
              <NotificationSettingsOverlay />
            ) : (
              <></>
            )}
            {selectedItem === "viewWithdrawalAccounts" ? (
              <ViewWithdrawalAccountsOverlay />
            ) : (
              <></>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default AccountSettingsOverlay;
