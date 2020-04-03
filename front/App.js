import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Button } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./redux/index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "./src/components/Login/LoginForm";
import HomescreenContainer from "./src/components/Homescreen/HomescreenContainer";
import FeedsContainer from "./src/components/Feeds/FeedsContainer";
import FeedsStoriesContainer from "./src/components/Stories/FeedsStoriesContainer";

const store = configureStore();
const Stack = createStackNavigator();
const RootStack = createStackNavigator();

function FeedsStack({ navigation }) {
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
        options={{
          title: "Subscribe",
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate({ name: "Home" })}
              title="Cancel"
              color="rgb(0, 122, 255)"
            />
          ),
          headerLeft: () => (
            <View>
              {/* <Ionicons
                name="ios-arrow-back"
                color="rgb(0, 122, 255)"
                size={25}
              /> */}
              <Button
                onPress={() => navigation.navigate({ name: "Home" })}
                title="< Home"
              />
            </View>
          )
        }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator headerMode="none" initialRouteName="Login">
          {/* <RootStack.Screen name="Login" component={LoginForm} /> */}
          {/* <RootStack.Screen name="Stories" component={FeedsStoriesContainer} /> */}
          <RootStack.Screen name="FeedsStack" component={FeedsStack} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
