import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { styles } from "../../Utils/Styles";
import { ListItem } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import AddWithdrawalAccountOverlay from "./AddWithdrawalAccount";

const ViewWithdrawalAccountsOverlay = () => {
  const [showOverlay, setShowOverlay] = React.useState(false);

  const [data, setData] = React.useState([
    {
      bank_name: "lorem",
      account_name: "aboris nisi ",
      account_number: "342454346342",
    },
    {
      bank_name: "lorem",
      account_name: "aboris nisi ",
      account_number: "342454346342",
    },
    {
      bank_name: "lorem",
      account_name: "aboris nisi ",
      account_number: "342454346342",
    },
  ]);

  const openOverlay = () => {
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.overlayContainer, { padding: 0 }]}>
          <Text style={[styles.overlayHeaderText, { padding: 12 }]}>
            Withdrawal Accounts
          </Text>
          <Text style={{ marginTop: 5, fontSize: 15, paddingHorizontal: 12 }}>
            You can add, delete or edit your withdrawal acocunts
          </Text>
          <TouchableOpacity onPress={openOverlay}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 18,
                  paddingHorizontal: 12,
                  color: "#922268",
                }}
              >
                Add withdrawal account
              </Text>
              <Icon
                name="plus-circle"
                type="material-community"
                color="#922268"
                size={30}
              />
            </View>
          </TouchableOpacity>

          {data.map((item) => (
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  Account name: {item.account_name}
                </ListItem.Title>
                <ListItem.Subtitle>Bank: {item.bank_name}</ListItem.Subtitle>
                <ListItem.Subtitle>
                  Account number: {item.account_number}
                </ListItem.Subtitle>
              </ListItem.Content>
              <TouchableOpacity>
                <Icon
                  name="pencil"
                  type="material-community"
                  color="#922268"
                  size={30}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="delete-outline"
                  type="material-community"
                  color="#922268"
                  size={30}
                />
              </TouchableOpacity>
            </ListItem>
          ))}
        </View>
        <Modal visible={showOverlay} animationType="slide" transparent={true}>
          <View style={styles.overlay}>
            <View style={styles.overlayContent}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={closeOverlay}
              >
                <Icon name="close" type="material" color="black" size={50} />
              </TouchableOpacity>
              <AddWithdrawalAccountOverlay />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ViewWithdrawalAccountsOverlay;
