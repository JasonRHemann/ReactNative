import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Platform,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  console.log(useDeviceOrientation());

  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{ backgroundColor: "dodgerblue", width: "100%", height: "30%" }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
