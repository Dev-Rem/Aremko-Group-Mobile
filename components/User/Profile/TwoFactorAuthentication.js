import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import { Button } from "@rneui/themed";
const { width, height } = Dimensions.get("window");

const TwoFactorAuthenticationOverlay = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <Text style={style.headText}>Set new security question</Text>

        <View style={style.formContainer}>
          <Text style={style.label}>Security question</Text>
          <TextInput
            style={style.input}
            placeholder="e.g. where were you born?"
          />
          <Text style={style.label}>Secret answer</Text>
          <TextInput
            style={style.input}
            secureTextEntry
            placeholder="e.g. name of city"
          />
          <Text style={style.label}>Password</Text>
          <TextInput
            style={style.input}
            secureTextEntry
            placeholder="your login password"
          />
        </View>
        <Button
          style={style.button}
          title="SUBMIT"
          titleStyle={{ fontWeight: "bold", color: "white" }}
          type="clear"
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: height * 0.6,
    width: width * 1.0,
    justifyContent: "flex-start",
    padding: 30,
  },
  headText: {
    fontSize: 20,
  },

  formContainer: {
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    padding: 10,
    borderRadius: 5,
    fontSize: 15,
    width: "100%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  button: {
    // width: 150,
    marginTop: 20,
    backgroundColor: "#922268",
    borderColor: "white",
    borderRadius: 5,
  },
});

export default TwoFactorAuthenticationOverlay;
