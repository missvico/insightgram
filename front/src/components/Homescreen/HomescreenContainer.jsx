import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";

import Homescreen from "./Homescreen";
import {
  fetchFeedsByUser,
  filterHomeFeeds,
} from "../../../redux/actions/feeds";
import { getItemStorage } from "../../../assets/js/AsyncStorage";

const HomescreenContainer = ({
  navigation,
  fetchFeedsByUser,
  filterHomeFeeds,
  homeUserStore,
}) => {
  const [userHome, setUserHome] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [filteredUserHome, setFilteredUserHome] = useState({});

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchInfo();
  }, [refreshing]);

  const fetchInfo = () => {
    getItemStorage("@Token").then((token) => {
      fetchFeedsByUser(token).then((data) => {
        setUserHome(data);
        setRefreshing(false);
        setFilteredUserHome(JSON.parse(JSON.stringify(data)));
      });
    });
  };

  useEffect(() => {
    if (Object.keys(filteredUserHome).length == 0) {
      fetchInfo();
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    setFilteredUserHome(JSON.parse(JSON.stringify(homeUserStore)));
  }, [homeUserStore]);

  const handlePress = () => {
    navigation.navigate("Feeds");
  };
  const handleStory = (storyprops) => {
    navigation.navigate("Stories", storyprops);
  };
  const handleMyFeeds = () => {
    navigation.navigate("MyFeeds");
  };
  const handleSearch = (evt, target) => {
    if (target === "home") {
      let input = evt.nativeEvent.text.toLowerCase();
      let searchMyFeeds = userHome.feeds.all;
      let searchDiscoverFeeds = userHome.feeds.discover;
      let myFeeds = searchMyFeeds.filter((elemento) =>
        elemento.name.toLowerCase().includes(input)
      );
      let Discover = searchDiscoverFeeds.filter((elemento) =>
        elemento.name.toLowerCase().includes(input)
      );
      let newfilteredUserHome = Object.assign(
        {},
        filteredUserHome,
        { ...(filteredUserHome.feeds["all"] = myFeeds) },
        { ...(filteredUserHome.feeds["discover"] = Discover) }
      );
      setFilteredUserHome(newfilteredUserHome);
      filterHomeFeeds(filteredUserHome);
    }
  };

  return (
    <View>
      {filteredUserHome && filteredUserHome.feeds ? (
        <View>
          <Homescreen
            feeds={filteredUserHome.feeds}
            handlePress={handlePress}
            handleStory={handleStory}
            handleMyFeeds={handleMyFeeds}
            handleSearch={handleSearch}
            handleTarget={"home"}
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
    filterHomeFeeds: (data) => dispatch(filterHomeFeeds(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomescreenContainer);
