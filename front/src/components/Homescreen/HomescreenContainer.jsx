import React, { useState, useEffect, useRef } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";

import Homescreen from "./Homescreen";
import { fetchFeedsByUser } from "../../../redux/actions/feeds";
import { getItemStorage } from "../../../assets/js/AsyncStorage";

const HomescreenContainer = ({ navigation, fetchFeedsByUser }) => {
  const [userHome, setUserHome] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchInfo();
  }, [refreshing]);

  const fetchInfo = () => {
    getItemStorage("@Token").then((token) => {
      fetchFeedsByUser(token).then((data) => {
        setUserHome(data);
        setRefreshing(false);
      });
    });
  };

  useEffect(() => {
    if (Object.keys(userHome).length == 0) {
      fetchInfo();
    } else {
      return;
    }
  }, [setUserHome]);

  const handlePress = () => {
    navigation.navigate("Feeds");
  };

  const handleStory = (storyprops) => {
    navigation.navigate("Stories", storyprops);
  };

  const handleMyFeeds = () => {
    navigation.navigate("MyFeeds");
  };

  return (
    <View>
      {userHome && userHome.feeds ? (
        <View>
          <Homescreen
            feeds={userHome.feeds}
            handlePress={handlePress}
            handleStory={handleStory}
            handleMyFeeds={handleMyFeeds}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        </View>
      ) : (
        <Spinner visible={true} />
      )}
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    homeUserStore: state.feeds.homeUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFeedsByUser: (token) => dispatch(fetchFeedsByUser(token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomescreenContainer);
