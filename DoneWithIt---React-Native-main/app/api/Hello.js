import React, { useRef } from "react";
import { Text, View } from "react-native";

function Hello() {
  const renders = useRef(0);
  console.log("Hello renders: ", renders.current++);
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

export default Hello;
