import React from "react";
import {
  View,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { BottomIconMenu } from "../../Utils/BottomIconMenu";
import { Avatar } from "@rneui/themed";
import { ListItem } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import { Switch } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AccountSettingsOverlay from "./AccountSettings";
import TwoFactorAuthenticationOverlay from "./TwoFactorAuthentication";
import ContactUsOverlay from "./ContactUs";
import EnableBiometricsOverlay from "./EnableBiometrics";
import { styles } from "../../Utils/Styles";

export function ProfileScreen({ navigation }) {
  const [useDarkmode, setUseDarkmode] = React.useState(false);
  const [hideBalance, setHideBalance] = React.useState(false);

  const [showOverlay, setShowOverlay] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const openOverlay = (item) => {
    setSelectedItem(item);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };
  const handleWalletBalanceChange = async () => {
    if (hideBalance !== true) {
      await AsyncStorage.setItem("HideWalletBalance", "true");
      setHideBalance(true);
    } else {
      await AsyncStorage.setItem("HideWalletBalance", "false");
      setHideBalance(false);
    }
  };

  const handleDarkmodeChange = async () => {
    if (useDarkmode !== true) {
      await AsyncStorage.setItem("DarkMode", "true");
      setUseDarkmode(true);
    } else {
      await AsyncStorage.setItem("DarkMode", "false");
      setUseDarkmode(false);
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const hideWalletBalance = await AsyncStorage.getItem("HideWalletBalance");

      const darkMode = await AsyncStorage.getItem("DarkMode");

      setHideBalance(JSON.parse(hideWalletBalance));
      setUseDarkmode(JSON.parse(darkMode));
    };

    fetchData();
  }, [useDarkmode, hideBalance]);
  return (
    <View style={{ flex: 1, marginTop: 45 }}>
      <View style={styles.profileContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
              paddingTop: 30,
            }}
          >
            <Text style={{ fontSize: 40 }}>Account</Text>
            <Avatar
              size={50}
              rounded
              source={require("../../../assets/AremkoLogo3.png")}
            />
          </View>
          <View style={styles.avatarContainer}>
            <Avatar
              size={80}
              rounded
              source={require("../../../assets/IMG_6271.jpg")}
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
                <Switch
                  value={hideBalance}
                  onValueChange={handleWalletBalanceChange}
                  color="#922268"
                />
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openOverlay("enableBiometrics")}>
              <ListItem bottomDivider>
                <Icon
                  name="fingerprint"
                  type="material"
                  color="#922268"
                  size={30}
                />
                <ListItem.Content>
                  <ListItem.Subtitle>Enable Biometrics</ListItem.Subtitle>
                </ListItem.Content>
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
                <Switch
                  value={useDarkmode}
                  onValueChange={handleDarkmodeChange}
                  color="#922268"
                />
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

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
                      size={50}
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
                  {selectedItem === "enableBiometrics" ? (
                    <EnableBiometricsOverlay />
                  ) : (
                    <></>
                  )}
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
