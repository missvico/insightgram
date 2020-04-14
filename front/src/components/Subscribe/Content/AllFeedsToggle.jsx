import React from "react";
import { FlatList, View } from "react-native";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";

import styles from "./style";
import FeedList from "../../Common/FeedList/FeedList";
import { BACKGROUND } from "../../../styles";

const AllFeedsToggle = ({ feeds }) => {
  return (
    <View style={{ flex: 1, backgroundColor: BACKGROUND }}>
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
