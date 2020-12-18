import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

function useForm({ initialValues }) {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (txt) => {
      setValues({
        ...values,
        nativeID: txt,
      });
    },
  ];
}
const styles = StyleSheet.create({
  container: {},
});
export default useForm;
