import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";

import bolo from "../../assets/bolo.png";
import bolomilho from "../../assets/bolomilho.png";
import bolofofo from "../../assets/bolofofo.png";
import bolomorango from "../../assets/bolomorango.png";

export default function Home({ navigation }) {

  const handleNavigation = () => {
		navigation.navigate('Item');
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Cardápio</Text>
        <View style={styles.itemContainer}>
          <TouchableOpacity style={styles.item} onPress={handleNavigation}>
            <Image source={bolo} style={styles.photo} />
            <Text style={styles.itemTitle}>Chocolate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={handleNavigation}>
            <Image source={bolomilho} style={styles.photo} />
            <Text style={styles.itemTitle}>Milho</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={handleNavigation}>
            <Image source={bolofofo} style={styles.photo} />
            <Text style={styles.itemTitle}>Fofo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={handleNavigation}>
            <Image source={bolomorango} style={styles.photo} />
            <Text style={styles.itemTitle}>Morango</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#F5FCFF",
    alignItems: "side",
    justifyContent: "side",
  },
  title: {
    width: "100%",
    fontSize: 22,
    textAlign: "center",
    fontFamily: "tahoma",
    fontWeight: "bold",
    paddingVertical: 20
  },
  itemTitle: {
    fontSize: 14,
    fontFamily: "tahoma",
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  item: {
    width: "50%",
    alignSelf: "center"
   
  },
  photo: {
    width: 120,
    height: 120,
    alignSelf: "center"
  },
});
