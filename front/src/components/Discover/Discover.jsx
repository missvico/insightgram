import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  FlatList
} from "react-native";

import { Title, Search } from "../Feeds/style";

import { Divider } from "react-native-elements";
import FeedList from "../Common/FeedList/FeedList";
import Constants from "expo-constants";
import FeedIconContainer from "../Common/FeedIcon/FeedIconContainer";
export default ({ feeds }) => {
  return (
    <View>
      <Title style={Title}>insightgram</Title>
      <Divider style={{ height: 1, backgroundColor: "grey" }} />
      <Text>Discover</Text>
      <Search placeholder='Search' onChange={e => console.log(e)} />
      <ScrollView>
        <SafeAreaView>
          <FlatList
            style={{ marginLeft: 10, marginBottom: 10 }}
            numColumns={4}
            data={feeds}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <FeedIconContainer />}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};
