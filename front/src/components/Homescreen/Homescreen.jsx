import React from "react";
import { View, ScrollView } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Discover from "../Common/Discover/Discover";
import FeedList from "../Common/FeedList/FeedList";

export default ({ handlePress, feeds, handleStory }) => {
  return (
    <View>
      <ScrollView>
        <FeedList
          title={"Custom"}
          feeds={feeds.custom}
          disableTick={true}
          handleStory={handleStory}
          section={"custom"}
        />
        <FeedList
          title={"myFeeds"}
          feeds={feeds.all}
          disableTick={true}
          handleStory={handleStory}
          section={"all"}
        />
        <Discover feeds={feeds.discover} handleStory={handleStory} grid={3} />
      </ScrollView>

      <View
        style={{
          display: "flex",
          alignSelf: "flex-end",

          position: "absolute",
          bottom: 20,
          right: 20
        }}
      >
        <TouchableWithoutFeedback onPress={handlePress}>
          <AntDesign name='pluscircle' size={35} color='#01ADED' />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
