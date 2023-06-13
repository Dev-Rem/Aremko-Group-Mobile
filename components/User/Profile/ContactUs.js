import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
const { width, height } = Dimensions.get("window");

const ContactUsOverlay = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <Text style={style.headText}>Help Center / Contact Us</Text>
        <View style={style.formContainer}>
          <Text style={style.label}>Website:</Text>
          <Text style={style.info}> www.aremkogroup.com</Text>
        </View>
        <View style={style.formContainer}>
          <Text style={style.label}>Contact:</Text>
          <Text style={style.info}> +234 802 526 0000</Text>
        </View>
        <View style={style.formContainer}>
          <Text style={style.label}>Email:</Text>
          <Text style={style.info}> info@aremkogroup.com</Text>
        </View>
        <View style={style.formContainer}>
          <Text style={style.label}>Address:</Text>
          <Text style={style.info}>
            Area 11, 871 Tafawa Balewa Way, Garki 900001, Abuja FCT, Nigeria.
          </Text>
        </View>
        <View style={style.formContainer}>
          <Text style={style.label}>Opening Hours:</Text>
          <Text style={style.info}> Monday - Friday</Text>
          <Text style={style.info}> 08:00 AM - 05:00 PM (WAT)</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: height * 0.8,
    width: width * 1.0,
    justifyContent: "flex-start",
    padding: 30,
  },
  headText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  formContainer: {
    marginTop: 50,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  info: {
    fontSize: 18,
  },
});

export default ContactUsOverlay;
