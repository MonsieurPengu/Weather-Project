import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import Hello from "./Hello";
import { useFetch } from "./useFetch";

function TestList(props) {
  const number = Math.floor(Math.random() * 1000);
  const [count, setCount] = useState(number);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  const [showHello, setShowHello] = useState(true);
  const inputRef = useRef();
  return (
    <View style={styles.container}>
      {/* <Button
        title="New Fact"
        onPress={() => setCount(Math.floor(Math.random() * 1000))}
      />
      <View style={styles.fact}>
        <Text style={styles.txt}>
          {loading ? "Getting a fun fact..." : data}
        </Text>
      </View> */}
      <View style={styles.fact}>{showHello && <Hello />}</View>
      <Button title="Toggle" onPress={() => setShowHello(!showHello)} />
      <TextInput ref={inputRef} style={styles.textInput} placeholder="Email" />
      <Button title="Focus" onPress={() => inputRef.current.focus()} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  txt: {
    fontSize: 30,
  },
  textInput: {
    padding: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 10,
  },
  fact: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: 10,
    padding: 10,
    borderRadius: 2,
  },
});
export default TestList;
