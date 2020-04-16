import React, {useEffect} from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import styles from "./style";
import FeedList from "../../Common/FeedList/FeedList";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
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
              <styles.ItemText>{item.group}</styles.ItemText>
              <FeedList feeds={item.feeds} />
            </View>
          )}
        />
      ) : (
        <Spinner visible={true} />
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
