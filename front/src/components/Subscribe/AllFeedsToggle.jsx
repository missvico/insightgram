import React, { Component } from "react";
import { ScrollView, SafeAreaView, FlatList, View, Text } from "react-native";
import { ItemText } from "./style";
import FeedList from "../Common/FeedList/FeedList";
import { connect } from "react-redux";
import {BACKGROUND} from "../../styles"

const AllFeedsToggle = ({ feeds }) => {
  return (
    <View style={{ flex: 1, backgroundColor: BACKGROUND }}>
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
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    feeds: state.feeds.feeds.feeds,
  };
};

export default connect(mapStateToProps, null)(AllFeedsToggle);
