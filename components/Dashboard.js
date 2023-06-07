import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import AremkoPay from "../assets/images/AremkoPay.png";
import JamiyaFX from "../assets/images/JamiyaFX.png";
import AremkoInv from "../assets/images/AremkoInv.png";
import AremkoRE from "../assets/images/AremkoRE.png";
import { Image } from "expo-image";
import { BottomIconMenu } from "./Utils/BottomIconMenu";

const { width, height } = Dimensions.get("window");

export function DashboardScreen({ navigation }) {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.signupMessageContainer}>
        <Text style={styles.signupMessageContainer.signupMessage}>
          Lorem Ipsum
        </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.container.image}
            source={AremkoPay}
            placeholder={blurhash}
            contentFit="fit"
            transition={1000}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.container.image}
            source={AremkoInv}
            placeholder={blurhash}
            contentFit="fit"
            transition={1000}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.container.image}
            source={JamiyaFX}
            placeholder={blurhash}
            contentFit="fit"
            transition={1000}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.container.image}
            source={AremkoRE}
            placeholder={blurhash}
            contentFit="fit"
            transition={1000}
          />
        </TouchableOpacity>
      </View>
      <BottomIconMenu navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  signupMessageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width * 1.0,
    height: height * 0.02,
    signupMessage: {
      color: "black",
      fontSize: width * 0.1,
    },
  },
  container: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: width * 1.0,
    height: height * 0.5,
    padding: 30,
    image: {
      width: width * 0.8,
      height: height * 0.09,
      borderRadius: 5,
      marginBottom: 20,
    },
  },
});
{
}
