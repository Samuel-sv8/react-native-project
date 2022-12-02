import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

import bolo from "../../assets/brigadeiro.png";

export default function Item({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={bolo} style={styles.photo} />
        <Text style={styles.title}>
          Bolo de chocolate com calda de brigadeiro
        </Text>
        <Text style={styles.description}>
          O que você recebe em casa: Creme de leite +Leite Moça + chocolate em
          pó garoto + chocolate ao leite garoto + leite Ninho forte + integral +
          farinha de trigo dona benta + fermento em pó dona benta + receita!
        </Text>
        <Text style={styles.price}>R$ 40,50</Text>
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
    fontSize: 16,
    textAlign: "left",
    fontFamily: "tahoma",
    fontWeight: "bold",
    paddingTop: 15,
    paddingLeft: 8,
  },
  description: {
    width: "100%",
    fontSize: 12,
    textAlign: "left",
    fontFamily: "tahoma",
    fontWeight: "400",
    paddingVertical: 5,
    paddingLeft: 8,
    color: '#191919'
  },
  price: {
    width: "100%",
    fontSize: 14,
    textAlign: "left",
    fontFamily: "tahoma",
    fontWeight: "bold",
    paddingVertical: 10,
    paddingLeft: 8,
  },
  photo: {
    width: "100%",
    height: "100%"
  },
});
