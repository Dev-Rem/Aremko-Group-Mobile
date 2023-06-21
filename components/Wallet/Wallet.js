import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal } from "react-native";

import FundWalletOverlay from "./FundWallet";
import WithdrawOverlay from "./Withdraw";
import { Avatar } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import { handleCopyToClipboard } from "../Utils/CopyToClipboard";
import * as Clipboard from "expo-clipboard";

import { styles } from "../Utils/Styles";

export function WalletScreen() {
  const [showCardDetails, setShowCardDetails] = React.useState(true);
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const [data, setData] = React.useState({});

  const sensitiveInfo = showCardDetails
    ? "**** **** **** 3637"
    : "2334 4453 3454 3637";

  const openOverlay = (item) => {
    setSelectedItem(item);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
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
            <Text style={{ fontSize: 40 }}>Wallet</Text>
            <Avatar
              size={50}
              rounded
              source={require("../../assets/AremkoLogo3.png")}
            />
          </View>
          <View style={styles.debitCardContainer}>
            <View style={styles.debitCardDetailsContainer}>
              <TouchableOpacity
                onPress={() => setShowCardDetails(!showCardDetails)}
              >
                {showCardDetails ? (
                  <>
                    <Icon
                      name="eye-outline"
                      type="material-community"
                      color="white"
                      size={35}
                    />
                  </>
                ) : (
                  <>
                    <Icon
                      name="eye-off-outline"
                      type="material-community"
                      color="white"
                      size={35}
                    />
                  </>
                )}
              </TouchableOpacity>
              <Text style={{ color: "#bfbfbf", fontSize: 12 }}>
                Tap on details to copy
              </Text>
            </View>
            <View style={styles.debitCardDetailsContainer}>
              <TouchableOpacity
                onPress={() => {
                  handleCopyToClipboard("2334  4453  3454  3637");
                }}
              >
                <Text style={{ color: "#bfbfbf", fontSize: 10 }}>
                  CARD NUMBER
                </Text>
                <Text style={{ fontSize: 25, color: "white" }}>
                  {showCardDetails
                    ? "****  ****  ****  3637"
                    : "2334  4453  3454  3637"}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.debitCardDetailsContainer}>
              <TouchableOpacity
                onPress={() => {
                  handleCopyToClipboard("564");
                }}
              >
                <Text style={{ color: "#bfbfbf", fontSize: 10 }}>CVV</Text>
                <Text style={{ fontSize: 15, color: "white" }}>
                  {showCardDetails ? "***" : "564"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleCopyToClipboard("05/26");
                }}
              >
                <Text style={{ color: "#bfbfbf", fontSize: 10 }}>
                  VALID THRU
                </Text>
                <Text style={{ fontSize: 15, color: "white" }}>
                  {showCardDetails ? "****" : "05/26"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ minWidth: "100%" }}></View>
          <View style={styles.miniCardContainer}>
            <TouchableOpacity onPress={() => openOverlay("fundWallet")}>
              <View style={[styles.miniCard, styles.miniCardPurple]}>
                <Text style={{ fontSize: 15, color: "white" }}>
                  Fund wallet
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openOverlay("withdraw")}>
              <View style={[styles.miniCard, styles.miniCardWhite]}>
                <Text style={{ fontSize: 15, color: "#922268" }}>Withdraw</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 30, marginTop: 10 }}>
            Recent Transactions
          </Text>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              <Text style={{ color: "#922268" }}>Generate Statement </Text>
              <Icon
                name="calendar-clock"
                type="material-community"
                color="#922268"
                size={20}
              />
            </View>
          </TouchableOpacity>

          <View>
            <TouchableOpacity>
              <View style={styles.transactionListItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.transactionListItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.transactionListItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.transactionListItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.transactionListItem}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.transactionListItem}></View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View>
          <Modal visible={showOverlay} animationType="slide" transparent={true}>
            <View style={styles.overlay}>
              <View style={styles.overlayContent}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={closeOverlay}
                >
                  <Icon name="close" type="material" color="black" size={50} />
                </TouchableOpacity>
                {selectedItem === "fundWallet" ? <FundWalletOverlay /> : <></>}
                {selectedItem === "withdraw" ? <WithdrawOverlay /> : <></>}
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}
