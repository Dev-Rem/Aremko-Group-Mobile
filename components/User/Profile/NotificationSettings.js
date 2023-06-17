import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import { ListItem } from "@rneui/themed";
import { Switch } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "../../Utils/Styles";

const NotificationSettingsOverlay = () => {
  const [open, setOpen] = React.useState(false);

  const [data, setData] = React.useState({
    email: false,
    transaction: false,
    payment: false,
  });

  const handleChange = async (key) => {
    if (data[key] !== true) {
      setData((prevState) => {
        const updatedState = { ...prevState, [key]: true };
        AsyncStorage.setItem("Notifications", JSON.stringify(updatedState));
        return updatedState;
      });
    } else {
      setData((prevState) => {
        const updatedState = { ...prevState, [key]: false };
        AsyncStorage.setItem("Notifications", JSON.stringify(updatedState));
        return updatedState;
      });
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await AsyncStorage.getItem("Notifications");
      if (response !== null) {
        const parsedResponse = JSON.parse(response);
        setData(parsedResponse);
      }
    };
    fetchData();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.overlayContainer, { padding: 0 }]}>
        <Text style={[styles.overlayHeaderText, { paddingLeft: 12 }]}>
          Notification Settings
        </Text>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Subtitle>Email announcements</ListItem.Subtitle>
          </ListItem.Content>
          <Switch
            color="#922268"
            value={data.email}
            onValueChange={() => handleChange("email")}
          />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Subtitle>Transaction notifications</ListItem.Subtitle>
          </ListItem.Content>
          <Switch
            color="#922268"
            value={data.transaction}
            onValueChange={() => handleChange("transaction")}
          />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Subtitle>Payment notifications</ListItem.Subtitle>
          </ListItem.Content>
          <Switch
            color="#922268"
            value={data.payment}
            onValueChange={() => handleChange("payment")}
          />
        </ListItem>
      </View>
    </ScrollView>
  );
};

export default NotificationSettingsOverlay;
