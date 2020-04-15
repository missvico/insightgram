import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import Homescreen from "./Homescreen";
import {
  fetchFeedsByUser,
  filterHomeFeeds,
} from "../../../redux/actions/feeds";
import { View } from "react-native";
import { getItemStorage } from "../../../assets/js/AsyncStorage";

const HomescreenContainer = ({
  navigation,
  fetchFeedsByUser,
  homeUserStore,
  filterFeeds,
}) => {
  const [userHome, setUserHome] = useState({});
  const [filteredUserHome, setFilteredUserHome] = useState({});
  useEffect(() => {
    if (Object.keys(userHome).length == 0) {
      getItemStorage("@Token").then((token) => {
        fetchFeedsByUser(token).then((data) => {
          setUserHome(data);
          setFilteredUserHome(JSON.parse(JSON.stringify(data)));
        });
      });
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
  const handleSearch = (evt, target) => {
    if (target === "home") {
      let input = evt.nativeEvent.text;
      let searchMyFeeds = userHome.feeds.all;
      let searchDiscoverFeeds = userHome.feeds.discover;
      let myFeeds = searchMyFeeds.filter((elemento) =>
        elemento.name.includes(input)
      );
      let Discover = searchDiscoverFeeds.filter((elemento) =>
        elemento.name.includes(input)
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
          />
        </View>
      ) : (
        <Text>Loading...</Text>
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
