import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableHighlight } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";

import configureStore from "./redux/index";
import LoginForm from "./src/components/Login/LoginForm";
import HomescreenContainer from "./src/components/Homescreen/HomescreenContainer";
import FeedsContainer from "./src/components/Feeds/FeedsContainer";
import FeedsStoriesContainer from "./src/components/Stories/FeedsStoriesContainer";
import MyFeedsContainer from "./src/components/MyFeeds/MyFeedsContainer";
import styles from "./src/styles/appStyles";
import { HEADER_FONT_TITLE } from "./src/styles/index";

const store = configureStore();
const Stack = createStackNavigator();
const RootStack = createStackNavigator();

function FeedsStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomescreenContainer}
        options={{
          title: "Insightgram",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: HEADER_FONT_TITLE },
          headerStyle: {
            borderBottomColor: "#fff",
            borderBottomWidth: 0,
          },
        }}
      />
      <Stack.Screen
        name="MyFeeds"
        component={MyFeedsContainer}
        options={{
          title: "My Feeds",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: HEADER_FONT_TITLE },
          headerStyle: {
            borderBottomColor: "#fff",
            borderBottomWidth: 0,
          },
          headerLeft: () => (
            <View>
              <styles.Container>
                <Ionicons
                  name="ios-arrow-back"
                  color="#007aff"
                  size={25}
                  onPress={() => navigation.navigate({ name: "Home" })}
                />
                <TouchableHighlight
                  onPress={() => navigation.navigate({ name: "Home" })}
                >
                  <styles.HeaderButtomText>Cancel</styles.HeaderButtomText>
                </TouchableHighlight>
              </styles.Container>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Feeds"
        component={FeedsContainer}
        options={{
          title: "Subscribe",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: HEADER_FONT_TITLE },
          headerStyle: {
            borderBottomColor: "#a3a3a34d",
            borderBottomWidth: 0.5,
          },
          headerRight: () => (
            <TouchableHighlight
              onPress={() => navigation.navigate({ name: "Home" })}
            >
              <styles.HeaderButtomText>Cancel</styles.HeaderButtomText>
            </TouchableHighlight>
          ),
          headerLeft: () => (
            <View>
              <styles.Container>
                <Ionicons
                  name="ios-arrow-back"
                  color="#007aff"
                  size={25}
                  onPress={() => navigation.navigate({ name: "Home" })}
                />
                <TouchableHighlight
                  onPress={() => navigation.navigate({ name: "Home" })}
                >
                  <styles.HeaderButtomText>Home</styles.HeaderButtomText>
                </TouchableHighlight>
              </styles.Container>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      "SFProText-bold": require("./assets/fonts/SFProText-Bold.ttf"),
      "SFProText-regular": require("./assets/fonts/SFProText-Regular.ttf"),
      "SFProText-semi-bold": require("./assets/fonts/SFProText-Semibold.ttf"),
      "SFProText-medium": require("./assets/fonts/SFProText-Medium.ttf"),
    });

    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator headerMode="none" initialRouteName="Login">
          <RootStack.Screen name="Login" component={LoginForm} />
          <RootStack.Screen name="Stories" component={FeedsStoriesContainer} />
          <RootStack.Screen name="FeedsStack" component={FeedsStack} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
