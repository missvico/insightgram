import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import LoginForm from "./LoginForm";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Insightgram</Text>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cecece"
  },
  title: {
    color: "#fff",
    fontSize: "23px",
    textAlign: center,
    width: 160
  },
  formContainer: {}
});
