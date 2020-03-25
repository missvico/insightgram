import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  FlatList
} from "react-native";

import { Title, Search } from "./style";

import { Divider } from "react-native-elements";
import FeedList from "../Common/FeedList/FeedList";
import Constants from "expo-constants";

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default ({ onChange, inputValue, feeds }) => {
  return (
    <View>
      <Title>insightgram</Title>
      <Divider style={{ height: 1, backgroundColor: "grey" }} />
      <Search
        placeholder='Search'
        onChange={e => onChange(e)}
        value={inputValue}
      />

      <SafeAreaView>
        <FlatList
          data={feeds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <FeedList title={item.group} feeds={item.feeds} />
          )}
        />
      </SafeAreaView>
    </View>
  );
};
