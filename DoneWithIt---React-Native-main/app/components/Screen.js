import React from "react";
import Constant from "expo-constants";
import { StyleSheet, View } from "react-native";

function Screen({ children, style }) {
  return <View style={[styles.screen, style]}>{children}</View>;
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constant.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
