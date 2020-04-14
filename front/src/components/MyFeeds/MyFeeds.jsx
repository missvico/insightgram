import React, { Component } from "react";
import { View } from "react-native";
import { Grid } from "./style";
import FeedIconContainer from "../Common/FeedIcon/FeedIconContainer";

export default ({ feeds, handleStory }) => {
  return (
    <View>
      <Grid
        numColumns={3}
        data={feeds}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(feed) => {
          return (
            <FeedIconContainer
              size={"big"}
              disableTick={true}
              feed={feed.item}
              handleStory={handleStory}
              section={"all"}
            />
          );
        }}
      />
    </View>
  );
};
