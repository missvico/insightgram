import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  FlatList
} from "react-native";
import {Title} from "./style"

// import { Title, Search } from "../Feeds/style";

import { Divider } from "react-native-elements";
import FeedList from "../Common/FeedList/FeedList";
import Constants from "expo-constants";
import FeedIconContainer from "../Common/FeedIcon/FeedIconContainer";
export default ({ feeds }) => {
  console.log("COMPONENTE DISCOVER", feeds);

  return (
    <View>
      <Title>Discover</Title>
      <ScrollView>
        <SafeAreaView>
          <FlatList
            style={{ marginLeft: 10, marginBottom: 10 }}
            numColumns={3}
            data={feeds}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <FeedIconContainer />}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};