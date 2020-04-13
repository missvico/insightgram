import React, { Component } from "react";
import { ScrollView, SafeAreaView, FlatList, View, Text } from "react-native";
import { ItemText } from "./style";
import FeedList from "../../Common/FeedList/FeedList";
import { connect } from "react-redux";
import { BACKGROUND } from "../../../styles";

const MyFeedsToggle = ({ feedsUnfiltered }) => {
  const feeds = feedsUnfiltered ? filter(feedsUnfiltered) : null;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: BACKGROUND }}>
      {feeds ? (
        <FlatList
          data={feeds}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <ItemText>{item.group}</ItemText>
              <FeedList feeds={item.feeds} />
            </View>
          )}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
};
const filter = (feeds) => {
  let filteredFeeds = [];
  for (let i = 0; i < feeds.length; i++) {
    let filteredFeed = {};
    filteredFeed.group = feeds[i].group;
    filteredFeed.feeds = feeds[i].feeds.filter((feed) => {
      return feed.is_suscribed;
    });
    filteredFeeds.push(filteredFeed);
  }
  return filteredFeeds;
};

const mapStateToProps = (state, ownProps) => {
  return {
    feedsUnfiltered: state.feeds.feeds.feeds,
  };
};

export default connect(mapStateToProps, null)(MyFeedsToggle);
