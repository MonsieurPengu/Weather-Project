import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        color="white"
        size={25}
      />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListItemDeleteAction;
