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
import CustomContainer from "../Custom/CustomContainer";
import MyFeedsContainer from "../MyFeeds/MyFeedsContainer";

export default ({ handlePress, feeds }) => {
  return (
    <View>
      <CustomContainer feeds={feeds.custom} />
      <MyFeedsContainer feeds={feeds.all} />
      <DiscoverContainer discover={feeds.discover} />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          margin: 10,
          marginBottom: 0,
          alignItems: "flex-end"
        }}
      >
        <TouchableWithoutFeedback onPress={handlePress}>
          <AntDesign name='pluscircle' size={35} color='#01ADED' />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
