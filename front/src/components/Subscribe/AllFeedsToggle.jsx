import React, { Component } from "react";
import { ScrollView, SafeAreaView, FlatList, View, Text } from "react-native";
import styles from "./style";
import FeedList from "../Common/FeedList/FeedList";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";

const AllFeedsToggle = ({ feeds }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {feeds ? (
        <FlatList
          data={feeds}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <styles.ItemText>{item.group}</styles.ItemText>
              <FeedList feeds={item.feeds} />
            </View>
          )}
        />
      ) : (
        <Spinner visible={true} />
      )}
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    feeds: state.feeds.feeds.feeds,
  };
};

export default connect(mapStateToProps, null)(AllFeedsToggle);
