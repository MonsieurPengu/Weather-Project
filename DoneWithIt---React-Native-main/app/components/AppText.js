import React from "react";
import { Text } from "react-native";

import defultStyles from "../config/styles";

function AppText({ children, style }) {
  return <Text style={[defultStyles.text, style]}>{children}</Text>;
}

export default AppText;
