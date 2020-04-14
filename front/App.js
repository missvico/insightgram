import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./redux/index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "./src/components/Login/LoginForm";
import HomescreenContainer from "./src/components/Homescreen/HomescreenContainer";
import FeedsStoriesContainer from "./src/components/Stories/FeedsStoriesContainer";
import MyFeedsContainer from "./src/components/MyFeeds/MyFeedsContainer";
import SubscribeContainer from "./src/components/Subscribe/SubscribeContainer";
import {
  Appearance,
  AppearanceProvider,
  useColorScheme,
} from "react-native-appearance";
import { BACKGROUND, TEXT } from "./src/styles";

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
          headerTitleStyle: {
            color: TEXT,
          },
          transparentCard: true,
          headerStyle: {
            borderBottomColor: "#fff",
            backgroundColor: BACKGROUND,
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
          transparentCard: true,
          headerTitleStyle: {
            color: TEXT,
          },
          headerStyle: {
            borderBottomColor: "#fff",
            backgroundColor: BACKGROUND,
            borderBottomWidth: 0,
          },
          headerLeft: () => (
            <View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Ionicons
                  name="ios-arrow-back"
                  color="rgb(0, 122, 255)"
                  size={25}
                  onPress={() => navigation.navigate({ name: "Home" })}
                />
                <Button
                  onPress={() => navigation.navigate({ name: "Home" })}
                  color="rgb(0, 122, 255)"
                  title="Home"
                />
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Feeds"
        component={SubscribeContainer}
        options={{
          title: "Subscribe",
          headerTitleAlign: "center",
          transparentCard: true,
          headerTitleStyle: {
            color: TEXT,
          },
          headerStyle: {
            borderBottomColor: "rgba(163, 163, 163, 0.3)",
            borderBottomWidth: 0.5,
            backgroundColor: BACKGROUND,
          },
          headerRight: () => (
            <View style={{ marginRight: 8 }}>
              <Button
                onPress={() => navigation.navigate({ name: "Home" })}
                title="Cancel"
                color="rgb(0, 122, 255)"
              />
            </View>
          ),
          headerLeft: () => (
            <View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Ionicons
                  name="ios-arrow-back"
                  color="rgb(0, 122, 255)"
                  size={25}
                  onPress={() => navigation.navigate({ name: "Home" })}
                />
                <Button
                  onPress={() => navigation.navigate({ name: "Home" })}
                  color="rgb(0, 122, 255)"
                  title="Home"
                />
              </View>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
const App = () => {
  return (
    <Provider store={store}>
      <AppearanceProvider>
        <NavigationContainer>
          <RootStack.Navigator headerMode="none" initialRouteName="Login">
            <RootStack.Screen
              name="Login"
              component={LoginForm}
              options={{ transparentCard: true }}
            />
            <RootStack.Screen
              name="Stories"
              component={FeedsStoriesContainer}
              options={{ transparentCard: true }}
            />
            <RootStack.Screen
              name="FeedsStack"
              component={FeedsStack}
              options={{ transparentCard: true }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    </Provider>
  );
};

export default () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: BACKGROUND,
    },
  });
  return <App style={styles} />;
};
