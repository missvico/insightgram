import React, { Component } from "react";
import { ScrollView, SafeAreaView, FlatList, View, Text } from "react-native";
import { ItemText } from "./style";
import FeedList from "../Common/FeedList/FeedList";
import { connect } from "react-redux";

const AllFeedsToggle = ({ feeds }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <FlatList
          data={feeds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <ItemText>{item.group}</ItemText>
              <FeedList feeds={item.feeds} />
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    feeds: state.feeds.feeds.feeds,
  };
};

export default connect(mapStateToProps, null)(AllFeedsToggle);
