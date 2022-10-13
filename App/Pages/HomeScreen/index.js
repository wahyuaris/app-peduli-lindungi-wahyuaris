import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
  Linking,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  bel,
  user,
  hand,
  centang,
  scan,
  vaksin,
  covid,
  EMAC,
  dokter,
  travel,
  fasilitas,
  statistic,
  hospital,
} from "../../assets";

const windowHeight = Dimensions.get("window").height;

export default HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.bgMainApp}>
      <View style={styles.container}>
        <Image source={user} style={styles.imgSize} />
        <Text style={styles.hi}>Hi, </Text>
        <Text style={styles.nama}>Rizky Priambodo</Text>
        <Image source={bel} style={styles.imgSize2} />
      </View>

      <View>
        <Image source={user} style={styles.imgSize} />
      </View>

      <View style={styles.kotakBiru}>
        <View>
          <Text style={styles.text1}>Entering A Public Space?</Text>
          <Text style={styles.text2}>Stay Alert To Stay Safe</Text>
        </View>
        <View>
          <Image source={hand} style={styles.logo1} />
        </View>
      </View>

      <View style={styles.kotakPutih}>
        <View style={styles.row}>
          <Image source={centang} style={styles.panah} />
          <Text style={styles.fonthitam}>Check-In Prefence</Text>
        </View>
        <View style={styles.kotakcheck}>
          <View style={styles.row}>
            <Image source={scan} style={styles.scaner} />
            <Text style={styles.fontbiru}>Check-In </Text>
          </View>
        </View>
      </View>

      <View
        style={{ height: 15, backgroundColor: "#D8D8D8", marginTop: -30 }}
      ></View>

      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity onPress={() => navigation.navigate("Imunisasi")}>
            <Image source={vaksin} style={styles.gambar2} />
          </TouchableOpacity>
          <Text style={styles.tulisan}>Vaccine and Immunization</Text>
        </View>
        <View style={styles.column}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CovidTestScreen")}
          >
            <Image source={covid} style={styles.gambar2} />
          </TouchableOpacity>
          <Text style={styles.tulisan}>Covid-19 Test Results</Text>
        </View>
        <View style={styles.column}>
          <TouchableOpacity onPress={() => navigation.navigate("Ehac")}>
            <Image source={EMAC} style={styles.gambar2} />
          </TouchableOpacity>
          <Text style={styles.tulisan}>EHAC</Text>
        </View>
      </View>

      <View style={styles.row1}>
        <View style={styles.column}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Peringatan!!!", "Halaman ini Belum Dibuat", [
                {
                  text: "ok",
                  onPress: () => console.log("ok ditekan"),
                },
              ])
            }
          >
            <Image source={travel} style={styles.gambar2} />
          </TouchableOpacity>
          <Text style={styles.tulisan}>Travel Regulations</Text>
        </View>
        <View style={styles.column}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Peringatan!!!", "Halaman ini Belum Dibuat", [
                {
                  text: "ok",
                  onPress: () => console.log("ok ditekan"),
                },
              ])
            }
          >
            <Image source={dokter} style={styles.gambar2} />
          </TouchableOpacity>
          <Text style={styles.tulisan}>Telemedicine</Text>
        </View>
        <View style={styles.column}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Peringatan!!!", "Halaman ini Belum Dibuat", [
                {
                  text: "ok",
                  onPress: () => console.log("ok ditekan"),
                },
              ])
            }
          >
            <Image source={fasilitas} style={styles.gambar2} />
          </TouchableOpacity>
          <Text style={styles.tulisan}>Healthcare Facility</Text>
        </View>
      </View>

      <View style={styles.row1}>
        <View style={styles.column}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Peringatan!!!", "Halaman ini Belum Dibuat", [
                {
                  text: "ok",
                  onPress: () => console.log("ok ditekan"),
                },
              ])
            }
          >
            <Image source={statistic} style={styles.gambar2} />
          </TouchableOpacity>
          <Text style={styles.tulisan}>Covid-19 Statistic</Text>
        </View>
        <View style={styles.column}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Peringatan!!!", "Halaman ini Belum Dibuat", [
                {
                  text: "ok",
                  onPress: () => console.log("ok ditekan"),
                },
              ])
            }
          >
            <Image source={hospital} style={styles.gambar2} />
          </TouchableOpacity>
          <Text style={styles.tulisan}>Find Hospital Bed</Text>
        </View>
        <View style={styles.column}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgMainApp: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  imgContainer: {
    alignItems: "center",
  },
  container: {
    marginTop: 20,
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
  },
  row1: {
    flexDirection: "row",
    flex: 1,
    marginTop: -40,
    marginRight: 15,
  },
  column: {
    flexDirection: "column",
    flex: 1,
    marginRight: -25,
  },
  tulisan: {
    flex: 1,
    marginTop: 5,
    fontSize: 13,
    resizeMode: "contain",
    textAlign: "center",
  },
  kotakBiru: {
    backgroundColor: "#239BD8",
    padding: 30,
    marginHorizontal: 19,
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#D9D9D9",
    borderBottomWidth: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    paddingBottom: 0,
    paddingEnd: 0,
  },
  kotakPutih: {
    backgroundColor: "white",
    padding: 30,
    marginHorizontal: 19,
    marginTop: -16,
    marginBottom: 60,
    borderWidth: 2,
    borderColor: "#D9D9D9",
    borderTopWidth: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    paddingBottom: 0,
  },
  kotakcheck: {
    backgroundColor: "#EAF5F9",
    borderRadius: 20,
    flexDirection: "row",
    height: 40,
    width: 120,
    marginLeft: 60,
    marginRight: -20,
    marginTop: -15,
  },
  hi: {
    textAlign: "left",
    fontSize: 15,
    marginTop: 4,
    left: 15,
    fontWeight: "bold",
  },
  nama: {
    textAlign: "left",
    fontSize: 15,
    marginTop: 4,
    fontWeight: "bold",
    textDecorationLine: "underline",
    left: 16,
  },
  text1: {
    color: "white",
    fontSize: 15,
    top: -10,
    fontWeight: "bold",
    marginRight: 10,
  },
  text2: {
    fontSize: 12,
    color: "white",
    top: -12,
    opacity: 0.9,
  },
  gambar2: {
    borderRadius: 20,
    marginLeft: 30,
    marginTop: 20,
    height: 80,
    resizeMode: "contain",
    width: 80,
  },
  fonthitam: {
    fontSize: 13,
    marginLeft: -95,
    fontWeight: "bold",
    top: -5,
    color: "#000000",
  },
  fontbiru: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 10,
    fontWeight: "bold",
    color: "#259AD5",
  },
  logo1: {
    resizeMode: "contain",
    height: 60,
    marginLeft: -20,
    top: -15,
    flex: 0,
  },
  panah: {
    resizeMode: "contain",
    height: 20,
    marginLeft: -110,
    top: -5,
    marginBottom: 20,
  },
  scaner: {
    resizeMode: "contain",
    width: 23,
    marginTop: -236,
    color: "#259AD5",
    marginLeft: 15,
  },
  imgStyle: {
    marginTop: windowHeight / 8,
    marginBottom: 20,
  },
  Input: {
    borderWidth: 1,
    borderColor: "#E91E63",
    padding: 7,
    marginStart: 20,
    fontSize: 17,
    marginEnd: 20,
    borderRadius: 10,
    padding: 10,
    fontWeight: "bold",
  },
  InputPass: {
    borderWidth: 1,
    borderColor: "#0f663f",
    padding: 7,
    marginStart: 20,
    fontSize: 17,
    marginTop: 20,
    marginEnd: 20,
    borderRadius: 10,
    padding: 10,
    fontWeight: "bold",
  },
  imgStyle2: {
    flexDirection: "row",
  },
  imgSize: {
    resizeMode: "contain",
    marginRight: -80,
    marginLeft: -50,
    marginTop: 2,
    alignSelf: "flex-start",
    height: 25,
    flex: 1,
  },
  imgSize2: {
    width: null,
    resizeMode: "contain",
    marginRight: -50,
    marginLeft: 50,
    marginTop: 2,
    height: 25,
    flex: 1,
  },
  headerText: {
    textAlign: "left",
    fontSize: 30,
    fontWeight: "bold",
  },

  bodyText: {
    marginTop: 10,
    marginBottom: 50,
    fontSize: 16,
  },
  footherText: {
    marginTop: 100,
    fontSize: 16,
    marginBottom: 0,
  },
  customeButton: {
    marginTop: 30,
    marginRight: 30,
    marginLeft: 30,
  },
});
