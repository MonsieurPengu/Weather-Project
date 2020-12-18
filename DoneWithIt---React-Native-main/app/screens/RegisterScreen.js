import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.conatiner}>
      <AppForm
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          placeholder="Name"
          maxLength={255}
          icon="account"
        />
        <AppFormField
          name="email"
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry={true}
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    padding: 10,
  },
});

export default RegisterScreen;
