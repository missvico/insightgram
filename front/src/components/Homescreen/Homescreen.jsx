import React from "react";
import { View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

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
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          marginRight: 20
        }}
      >
        <TouchableWithoutFeedback onPress={handlePress}>
          <AntDesign name="pluscircle" size={35} color="#01ADED" />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
