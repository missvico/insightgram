import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./redux/index";
import LoginForm from "./src/components/Login/LoginForm";
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <LoginForm />
        <Text> Aca va la navigation</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
