import React, { Component } from "react";
import { ScrollView, SafeAreaView, FlatList, View, Text } from "react-native";
import { Grid } from "./style";
import FeedIconContainer from "../Common/FeedIcon/FeedIconContainer";
import { connect } from "react-redux";

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

