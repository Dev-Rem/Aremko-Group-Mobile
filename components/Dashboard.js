import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import AremkoPay from "../assets/images/AremkoPAY.png";
import JamiyaFX from "../assets/images/JamiyaFX.png";
import AremkoInv from "../assets/images/AremkoINV.png";
import AremkoRE from "../assets/images/AremkoRE.png";
import PeerClan from "../assets/images/Peerclan.png";
import AremkoCON from "../assets/images/AremkoCON.png";

import { Image } from "expo-image";
import { BottomIconMenu } from "./Utils/BottomIconMenu";
import { Icon } from "@rneui/themed";
import { Avatar } from "@rneui/themed";

import * as Clipboard from "expo-clipboard";

const { width, height } = Dimensions.get("window");

export function DashboardScreen({ navigation }) {
  const [showAccountNumber, setShowAccountNumber] = React.useState(true);
  const sensitiveInfo = showAccountNumber ? "******" : "200,000";

  const handleCopyToClipboard = async (text) => {
    await Clipboard.setStringAsync(text);
  };
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
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
            <Text style={{ fontSize: 40 }}>Dashboard</Text>
            <Avatar
              size={50}
              rounded
              source={require("../assets/AremkoLogo3.png")}
            />
          </View>

          <View style={styles.balanceCard}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#bfbfbf" }}>Total wallet balance</Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "white", fontSize: 40, marginTop: 3 }}>
                &#8358;{sensitiveInfo}
              </Text>
              <TouchableOpacity
                onPress={() => setShowAccountNumber(!showAccountNumber)}
              >
                {showAccountNumber ? (
                  <>
                    <Icon
                      name="eye-outline"
                      type="material-community"
                      color="white"
                      size={30}
                      style={{ marginTop: 10 }}
                    />
                  </>
                ) : (
                  <>
                    <Icon
                      name="eye-off-outline"
                      type="material-community"
                      color="white"
                      size={30}
                      style={{ marginTop: 10 }}
                    />
                  </>
                )}
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <View style={{ marginRight: 20 }}>
                <Text style={{ color: "#bfbfbf", fontSize: 11 }}>
                  Account Number
                </Text>
                <Text style={{ color: "white" }}>{"234 123 4565"}</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => handleCopyToClipboard("234 123 4565")}
                >
                  <Text style={{ color: "#bfbfbf", fontSize: 11 }}>Copy</Text>
                  <Icon
                    name="content-copy"
                    type="material-community"
                    color="white"
                    size={18}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={{ fontSize: 30, marginBottom: 10 }}>Services</Text>
          <View style={styles.servicesContainer}>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={AremkoPay}
                  placeholder={blurhash}
                  contentFit="fit"
                  transition={1000}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={AremkoInv}
                  placeholder={blurhash}
                  contentFit="fit"
                  transition={1000}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={JamiyaFX}
                  placeholder={blurhash}
                  contentFit="fit"
                  transition={1000}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={AremkoRE}
                  placeholder={blurhash}
                  contentFit="fit"
                  transition={1000}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={AremkoCON}
                  placeholder={blurhash}
                  contentFit="fit"
                  transition={1000}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={PeerClan}
                  placeholder={blurhash}
                  contentFit="fit"
                  transition={1000}
                />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <BottomIconMenu navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: width * 1.0,
    height: height * 1.0,
    paddingHorizontal: 20,
    marginTop: 45,
  },
  balanceCard: {
    flex: 1,
    height: 150,
    backgroundColor: "#922268",
    borderRadius: 5,
    marginBottom: 20,
    padding: 30,
    marginTop: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
    minWidth: "100%",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch",
    backgroundColor: "white",
    minWidth: "100%",
    height: 150,
    borderRadius: 5,
    marginBottom: 30,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    height: 70,
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
  },
});
