import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Icon } from "@rneui/themed";

const { width, height } = Dimensions.get("window");

export function BottomIconMenu({ navigation }) {
  return (
    <View style={styles.bottomIconMenu}>
      <View style={styles.bottomIconMenu.iconContainer}>
        <Icon
          name="dashboard"
          type="material"
          color="#922268"
          size={30}
          onPress={() => navigation.navigate("Dashboard")}
        />
        <Text style={styles.bottomIconMenu.iconContainer.iconText}>
          Dashboard
        </Text>
      </View>
      <View style={styles.bottomIconMenu.iconContainer}>
        <Icon
          name="wallet-outline"
          type="ionicon"
          color="#922268"
          size={30}
          onPress={() => navigation.navigate("Wallet")}
        />
        <Text style={styles.bottomIconMenu.iconContainer.iconText}>Wallet</Text>
      </View>
      <View style={styles.bottomIconMenu.iconContainer}>
        <Icon
          name="bell"
          type="material-community"
          color="#922268"
          size={30}
          onPress={() => console.log("alerts")}
        />
        <Text style={styles.bottomIconMenu.iconContainer.iconText}>
          Notificantions
        </Text>
      </View>
      <View style={styles.bottomIconMenu.iconContainer}>
        <Icon
          name="account-circle"
          type="material"
          color="#922268"
          size={30}
          onPress={() => navigation.navigate("Profile")}
        />
        <Text style={styles.bottomIconMenu.iconContainer.iconText}>
          Account
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomIconMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#d6d6d6",
    width: width * 1.0,
    height: height * 0.09,
    borderTopColor: "black",
    iconContainer: {
      alignItems: "center",
      iconText: {
        marginTop: 1,
        fontSize: 10,
        color: "#922268",
      },
    },
  },
});
