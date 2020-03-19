import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import LoginForm from "./LoginForm";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>INSIGHTGRAM</Text>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "700",
    paddingBottom: 10
  },
  formContainer: {}
});
