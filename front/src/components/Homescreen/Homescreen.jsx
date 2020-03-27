import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import DiscoverContainer from "../Discover/DiscoverContainer";
import CustomContainer from "../Custom/CustomContainer";
import MyFeedsContainer from "../MyFeeds/MyFeedsContainer";

export default ({ handlePress, feeds }) => {
  return (
    <View>
      <ScrollView>
        <CustomContainer feeds={feeds.custom} />
        <MyFeedsContainer feeds={feeds.all} />
        <DiscoverContainer discover={feeds.discover} />
      </ScrollView>

      <View
        style={{
          display: "flex",
          alignSelf: "flex-end",

          position: "absolute",
          bottom: 0,
          right: 20
        }}
      >
        <TouchableWithoutFeedback onPress={handlePress}>
          <AntDesign name="pluscircle" size={35} color="#01ADED" />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
