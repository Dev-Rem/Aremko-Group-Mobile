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
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
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
});
