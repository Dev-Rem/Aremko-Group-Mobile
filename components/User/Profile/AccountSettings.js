import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ListItem } from "@rneui/themed";
import { Icon } from "@rneui/themed";

const AccountSettingsOverlay = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={style.headText}>Account Settings</Text>
      <TouchableOpacity>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Subtitle>Account info update </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Subtitle>Update KYC </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Subtitle>Change Password </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Subtitle>Update Email Address </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Subtitle>Notification Settings </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Subtitle>View BVN </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  headText: {
    backgroundColor: "white",
    paddingLeft: 12,
    paddingTop: 10,
    fontSize: 20,
  },
});
export default AccountSettingsOverlay;
