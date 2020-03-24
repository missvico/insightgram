import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./redux/index";
const store = configureStore();
import FeedsContainer from './src/components/Feeds/FeedsContainer'
import LoginForm from './src/components/Login/LoginForm'

import HomescreenContainer from "./src/components/Homescreen/HomescreenContainer.jsx"

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
       <LoginForm />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
