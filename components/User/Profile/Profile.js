import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { BottomIconMenu } from "../../Utils/BottomIconMenu";
import { Avatar } from "@rneui/themed";
import { ListItem } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import { Switch } from "@rneui/themed";
import AccountSettingsOverlay from "./AccountSettings";
import TwoFactorAuthenticationOverlay from "./TwoFactorAuthentication";
import ContactUsOverlay from "./ContactUs";
const { width, height } = Dimensions.get("window");

export function ProfileScreen({ navigation }) {
  const [open, setOpen] = React.useState(false);

  const [showOverlay, setShowOverlay] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const openOverlay = (item) => {
    setSelectedItem(item);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <View style={{ flex: 1, marginTop: 45 }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleTextContainer}>
            <Text style={styles.titleTextContainer.titleText}>Account</Text>
          </View>
          <View style={styles.avatarContainer}>
            <Avatar
              size={80}
              rounded
              source={require("../../../assets/AremkoLogo.jpg")}
            />
            <Text style={styles.avatarContainer.avatarText}>Aremko Group</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity onPress={() => openOverlay("accountSettings")}>
              <ListItem bottomDivider>
                <Icon name="person" type="material" color="#922268" size={30} />
                <ListItem.Content>
                  <ListItem.Subtitle>Account Settings</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <ListItem bottomDivider>
                <Icon
                  name="payment"
                  type="material"
                  color="#922268"
                  size={30}
                />
                <ListItem.Content>
                  <ListItem.Subtitle>Card Settings</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <ListItem bottomDivider>
                <Icon
                  name="asterisk"
                  type="material-community"
                  color="#922268"
                  size={30}
                />
                <ListItem.Content>
                  <ListItem.Subtitle>Hide Wallet Balances</ListItem.Subtitle>
                </ListItem.Content>
                <Switch value={open} onValueChange={setOpen} color="#922268" />
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <ListItem bottomDivider>
                <Icon
                  name="fingerprint"
                  type="material"
                  color="#922268"
                  size={30}
                />
                <ListItem.Content>
                  <ListItem.Subtitle>
                    Enable FaceID/Fingerprint unlock
                  </ListItem.Subtitle>
                </ListItem.Content>
                <Switch value={open} onValueChange={setOpen} color="#922268" />
              </ListItem>
            </TouchableOpacity>

            <TouchableOpacity>
              <ListItem bottomDivider>
                <Icon
                  name="contrast-outline"
                  type="ionicon"
                  color="#922268"
                  size={30}
                />
                <ListItem.Content>
                  <ListItem.Subtitle>Dark Mode</ListItem.Subtitle>
                </ListItem.Content>
                <Switch value={open} onValueChange={setOpen} color="#922268" />
              </ListItem>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openOverlay("2fa")}>
              <ListItem bottomDivider>
                <Icon
                  name="two-factor-authentication"
                  type="material-community"
                  color="#922268"
                  size={30}
                />
                <ListItem.Content>
                  <ListItem.Subtitle>
                    Turn on Two-Factor-Authentication{" "}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openOverlay("contactUs")}>
              <ListItem bottomDivider>
                <Icon name="info" type="material" color="#922268" size={30} />
                <ListItem.Content>
                  <ListItem.Subtitle>Help Center/Contact Us</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>

            <TouchableOpacity>
              <ListItem bottomDivider>
                <Icon name="logout" type="material" color="red" size={30} />
                <ListItem.Content>
                  <ListItem.Subtitle>Log Out </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>

            <Modal
              visible={showOverlay}
              animationType="slide"
              transparent={true}
            >
              <View style={styles.overlay}>
                <View style={styles.overlayContent}>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={closeOverlay}
                  >
                    <Icon
                      name="close"
                      type="material"
                      color="black"
                      size={30}
                    />
                  </TouchableOpacity>
                  {selectedItem === "accountSettings" ? (
                    <AccountSettingsOverlay />
                  ) : (
                    <></>
                  )}
                  {selectedItem === "2fa" ? (
                    <TwoFactorAuthenticationOverlay />
                  ) : (
                    <></>
                  )}
                  {selectedItem === "contactUs" ? <ContactUsOverlay /> : <></>}
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </View>

      <BottomIconMenu navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "flex-start",
    width: width * 1.0,
  },

  titleTextContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 30,
    width: "auto",
    titleText: {
      paddingLeft: 10,
      fontSize: 45,
    },
  },
  avatarContainer: {
    marginTop: 10,
    width: width * 1.0,
    padding: 5,
    flexDirection: "row",
    avatarText: {
      marginTop: 20,
      fontSize: 30,
      marginLeft: 20,
    },
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  overlayContent: {
    backgroundColor: "#d6d6d6",
    width: "100%",
    borderRadius: 8,
    paddingTop: 40,
    flexDirection: "column",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});
