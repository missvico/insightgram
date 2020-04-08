import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import Homescreen from "./Homescreen";
import { fetchFeedsByUser } from "../../../redux/actions/feeds";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { getItemStorage } from "../../../assets/js/AsyncStorage";

const HomescreenContainer = ({
  navigation,
  fetchFeedsByUser,
  homeUserStore,
}) => {
  const [userHome, setUserHome] = useState({});

  useEffect(() => {
    if (Object.keys(userHome).length == 0) {
      getItemStorage("@Token").then((token) => {
        fetchFeedsByUser(token).then((data) => setUserHome(data));
      });
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
    console.log("CLICK")
    navigation.navigate("MyFeeds");
  }

  return (
    <View>
      {userHome && userHome.feeds ? (
        <View>
          <Homescreen
            feeds={userHome.feeds}
            handlePress={handlePress}
            handleStory={handleStory}
            handleMyFeeds={handleMyFeeds}
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomescreenContainer);
