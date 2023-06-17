import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
} from "react-native";
import { ListItem } from "@rneui/themed";
import { Switch } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../Utils/Styles";

const EnableBiometricsOverlay = () => {
  const [useBiometrics, setUseBiometrics] = React.useState({
    login: false,
    transaction: false,
    update: false,
  });

  const handleChange = async (key) => {
    if (useBiometrics[key] !== true) {
      setUseBiometrics((prevState) => {
        const updatedState = { ...prevState, [key]: true };
        AsyncStorage.setItem("Biometrics", JSON.stringify(updatedState));
        return updatedState;
      });
    } else {
      setUseBiometrics((prevState) => {
        const updatedState = { ...prevState, [key]: false };
        AsyncStorage.setItem("Biometrics", JSON.stringify(updatedState));
        return updatedState;
      });
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await AsyncStorage.getItem("Biometrics");
      if (response !== null) {
        const parsedResponse = JSON.parse(response);
        setUseBiometrics(parsedResponse);
      }
    };
    fetchData();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.overlayContainer, { padding: 0 }]}>
        <Text style={[styles.overlayHeaderText, { paddingLeft: 12 }]}>
          Enable Biometrics{" "}
        </Text>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Subtitle>Allow biometrics for login</ListItem.Subtitle>
          </ListItem.Content>
          <Switch
            value={useBiometrics.login}
            onValueChange={() => handleChange("login")}
            color="#922268"
          />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Subtitle>
              Allow biometrics for transactions
            </ListItem.Subtitle>
          </ListItem.Content>
          <Switch
            value={useBiometrics.transaction}
            onValueChange={() => handleChange("transaction")}
            color="#922268"
          />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Subtitle>Allow biometrics for Updates</ListItem.Subtitle>
          </ListItem.Content>
          <Switch
            value={useBiometrics.update}
            onValueChange={() => handleChange("update")}
            color="#922268"
          />
        </ListItem>
      </View>
    </ScrollView>
  );
};

export default EnableBiometricsOverlay;
