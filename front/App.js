import React from "react";
import Main from "./src/components/Main";
import { StyleSheet, Text, View } from "react-native";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./src/store/index";
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Main />
      </View>
    </Provider>
  );
}
