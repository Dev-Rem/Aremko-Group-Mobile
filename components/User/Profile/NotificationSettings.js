import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import { ListItem } from "@rneui/themed";
import { Switch } from "@rneui/themed";
const { width, height } = Dimensions.get("window");

const NotificationSettingsOverlay = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.headText}>Notification Settings</Text>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Subtitle>Email announcements</ListItem.Subtitle>
          </ListItem.Content>
          <Switch value={open} onValueChange={setOpen} color="#922268" />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Subtitle>Transaction notifications</ListItem.Subtitle>
          </ListItem.Content>
          <Switch value={open} onValueChange={setOpen} color="#922268" />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Subtitle>Payment notifications</ListItem.Subtitle>
          </ListItem.Content>
          <Switch value={open} onValueChange={setOpen} color="#922268" />
        </ListItem>
      </View>
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
});
export default NotificationSettingsOverlay;
