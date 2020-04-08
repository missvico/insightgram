import React from "react";
import { View } from "react-native";
import { DiscoverGrid, ItemText } from "./style";

import FeedIconContainer from "../../Common/FeedIcon/FeedIconContainer";
export default ({ feeds, handleStory }) => {
  return (
    <View>
      <ItemText>Discover</ItemText>
      <DiscoverGrid
        numColumns={4}
        data={feeds}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(feed) => {
          return (
            <FeedIconContainer
              disableTick={true}
              feed={feed.item}
              handleStory={handleStory}
              section={"discover"}
            />
          );
        }}
      />
    </View>
  );
};
