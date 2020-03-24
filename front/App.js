import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./redux/index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "./src/components/Login/LoginForm";
const store = configureStore();
const Stack = createStackNavigator();
import HomescreenContainer from "./src/components/Homescreen/HomescreenContainer";
import FeedsContainer from "./src/components/Feeds/FeedsContainer";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomescreenContainer} />
          <Stack.Screen name="Feeds" component={FeedsContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  }
});
