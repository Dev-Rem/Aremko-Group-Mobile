import React from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "../../Utils/Styles";

const ContactUsOverlay = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.overlayContainer}>
        <Text style={styles.overlayHeaderText}>Help Center / Contact Us</Text>
        <View style={{ margin: 10 }} />
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Website:
          </Text>
          <Text style={{ fontSize: 18 }}> www.aremkogroup.com</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Contact:
          </Text>
          <Text style={{ fontSize: 18 }}> +234 802 526 0000</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Email:
          </Text>
          <Text style={{ fontSize: 18 }}> info@aremkogroup.com</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Address:
          </Text>
          <Text style={{ fontSize: 18 }}>
            Area 11, 871 Tafawa Balewa Way, Garki 900001, Abuja FCT, Nigeria.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Opening Hours:
          </Text>
          <Text style={{ fontSize: 18 }}>Monday - Friday</Text>
          <Text style={{ fontSize: 18 }}> 08:00 AM - 05:00 PM (WAT)</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactUsOverlay;
