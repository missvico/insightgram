import React from "react";
import { render } from "react-dom";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  FlatList
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Title, Search } from "./style";

import { Divider } from "react-native-elements";
import FeedList from "../Common/FeedList/FeedList";
import Constants from "expo-constants";
import DiscoverContainer from "../Discover/DiscoverContainer";

export default ({ handlePress, feeds }) => {
  return (
    <View>
      {/* <SafeAreaView>
        <FlatList
          data={feeds ? feeds : {}}
          keyExtractor={item => (item.id ? item.id : {})}
          renderItem={({ item }) => (
            <FeedList
              title={item.group ? item.group : ""}
              feeds={item.feeds ? item.feeds : []}
            />
          )}
        />
      </SafeAreaView>*/}
      <View
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end"
        }}
      >
        <DiscoverContainer discover={feeds.discover} />
        <TouchableWithoutFeedback onPress={handlePress}>
          <AntDesign name='pluscircle' size={35} color='#01ADED' />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
