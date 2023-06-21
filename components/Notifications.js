import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { handleCopyToClipboard } from "./Utils/CopyToClipboard";

import { Icon } from "@rneui/themed";
import { Avatar } from "@rneui/themed";

import { styles } from "./Utils/Styles";

export function NotificationScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 30,
            }}
          >
            <Text style={{ fontSize: 40 }}>Notificantions</Text>
            <Avatar
              size={50}
              rounded
              source={require("../assets/AremkoLogo3.png")}
            />
          </View>
          <View style={{ minWidth: "100%" }} />
        </ScrollView>
      </View>
      {/* <BottomIconMenu navigation={navigation} /> */}
    </View>
  );
}
