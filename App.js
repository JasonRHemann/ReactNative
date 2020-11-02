import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  console.log("App executed");

  return (
    <SafeAreaView style={styles.container}>
      <Text>What up bitches!</Text>
      <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
