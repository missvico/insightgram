import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cecece"
  },
  input: {
    height: 40,
    backgroundColor: "#fff"
  }
});
