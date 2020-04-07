import React from "react";
import { View, ScrollView, Text, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ItemText } from "./style";
import Discover from "./Discover/Discover";
import FeedList from "../Common/FeedList/FeedList";
import Search from "../Common/Search/Search";

export default ({ handlePress, feeds, handleStory }) => {
  return (
    <View backgroundColor={"white"}>
      <ScrollView>
        <View paddingTop={"13%"}>
          <ItemText>My feeds</ItemText>
          <FeedList
            feeds={feeds.all}
            disableTick={true}
            handleStory={handleStory}
            section={"all"}
          />
          <Discover feeds={feeds.discover} handleStory={handleStory} />
        </View>
      </ScrollView>
      <View
        style={{
          display: "flex",
          alignSelf: "flex-end",
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        <TouchableWithoutFeedback onPress={handlePress}>
          <AntDesign name="pluscircle" size={35} color="#01ADED" />
        </TouchableWithoutFeedback>
      </View>

      <View
        style={{
          flex: 1,
          width: "100%",
          position: "absolute",
          top: 0,
          marginTop: -5,
          backgroundColor: "white",
        }}
      >
        <Search />
        <View
          style={{
            marginTop: 13,
            height: 1,
            backgroundColor: "rgba(0,0,0,0.15)",
          }}
        ></View>
      </View>
    </View>
  );
};
