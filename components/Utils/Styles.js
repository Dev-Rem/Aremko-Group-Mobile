import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  backgroundImage: {
    marginTop: 45,
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    flexDirection: "column",
  },
  loginInfoContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 30,
  },
  // form input label
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  // form input
  input: {
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
    width: "100%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  // purple button
  button: {
    minWidth: "100%",
    marginTop: 15,
    backgroundColor: "#922268",
    borderColor: "white",
    borderRadius: 10,
  },
  headerMessageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 50,
  },
  signupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 30,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },

  // overlay
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

  // major screen container
  // dashboard, wallet,
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
  // Profile container
  profileContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "flex-start",
    width: width * 1.0,
  },
  avatarContainer: {
    marginTop: 10,
    width: width * 1.0,
    paddingHorizontal: 20,
    flexDirection: "row",
    avatarText: {
      marginTop: 20,
      fontSize: 30,
      marginLeft: 20,
    },
  },

  debitCardContainer: {
    justifyContent: "space-between",
    height: 200,
    backgroundColor: "#922268",
    borderRadius: 10,
    marginTop: 10,
    padding: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  debitCardDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  miniCardContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 20,
  },
  miniCard: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  miniCardPurple: {
    backgroundColor: "#922268",
  },
  miniCardWhite: {
    backgroundColor: "white",
  },
  transactionListItem: {
    backgroundColor: "white",
    height: 70,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  balanceCard: {
    flex: 1,
    height: 150,
    backgroundColor: "#922268",
    borderRadius: 10,
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
    borderRadius: 10,
    marginBottom: 30,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    height: 70,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
});