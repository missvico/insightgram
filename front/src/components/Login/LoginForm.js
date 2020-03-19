import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Alert
} from "react-native";

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  changeEmail(email) {
    this.setState({ email });
  }

  changePassword(password) {
    this.setState({ password });
  }

  buttonPressed() {
    if (this.state.email && this.state.password) {
      Alert.alert("¡Bienvenido!");
    } else {
      Alert.alert("¡ERROR! Completá todos los campos");
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          onChangeText={email => this.changeEmail(email)}
          placeholder="Email"
          value={this.state.email}
          style={styles.input}
        />
        <TextInput
          secureTextEntry={true}
          onChangeText={password => this.changePassword(password)}
          placeholder="Contraseña"
          value={this.state.password}
          style={styles.input}
        />
        <TouchableHighlight
          onPress={() => this.buttonPressed()}
          style={styles.button}
        >
          <Text style={styles.buttonTxt}>Confirmar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  inputTxt: {
    fontSize: 15,
    textAlign: "center",
    paddingBottom: 9
  },
  input: {
    height: 40,
    backgroundColor: "#ecf0f1",
    marginBottom: 20,
    color: "#2c3e50",
    width: 280,
    borderRadius: 20,
    paddingHorizontal: 10
  },
  button: {
    paddingTop: 12,
    paddingBottom: 12,

    backgroundColor: "#27ae60",
    marginBottom: 20,
    width: 280,
    borderRadius: 20,
    paddingHorizontal: 10
  },
  buttonTxt: {
    color: "#ecf0f1",
    fontSize: 16,
    textAlign: "center"
  }
});
