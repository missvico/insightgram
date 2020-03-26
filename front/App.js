import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./redux/index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "./src/components/Login/LoginForm";
import HomescreenContainer from "./src/components/Homescreen/HomescreenContainer";
import FeedsContainer from "./src/components/Feeds/FeedsContainer";

const store = configureStore();
const Stack = createStackNavigator();
const RootStack = createStackNavigator();

function FeedsStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomescreenContainer}
        options={{ title: "Insightgram" }}
      />
      <Stack.Screen
        name="Feeds"
        component={FeedsContainer}
        options={{ title: "Insightgram" }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator headerMode="none" initialRouteName="Login">
          <RootStack.Screen name="Login" component={LoginForm} />
          <RootStack.Screen name="FeedsStack" component={FeedsStack} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
