import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formcontainerwrap: {
    marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
  },
  logo: {
    width: 300,
    height: 180,
    resizeMode: "contain",
    marginTop: 40,
  },
  padding50: {
    padding: 50,
  },
  Itemsicon: {
    color: "#ed683d",
  },
  formitems: {
    marginBottom: 20,
    paddingLeft: 10,
    paddingVertical: 1,
    width: "100%",
  },
  buttonBG: {
    backgroundColor: "#2E3092",
  },
  whiteText: {
    color: "#fff",
  },
  poweredBY: {
    color: "#ed683d",
    textAlign: "center",
    fontSize: 17,
    marginTop: 100,
  },
});
