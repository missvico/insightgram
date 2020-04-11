import React, { useState, useEffect, useRef } from "react";
import { Text, View, ScrollView, RefreshControl } from "react-native";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Spinner from "react-native-loading-spinner-overlay";

import Homescreen from "./Homescreen";
import { fetchFeedsByUser } from "../../../redux/actions/feeds";
import { getItemStorage } from "../../../assets/js/AsyncStorage";

const HomescreenContainer = ({
  navigation,
  fetchFeedsByUser,
  homeUserStore,
}) => {
  const [userHome, setUserHome] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [autoRefreshing, setAutoRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchInfo();
  }, [refreshing]);

  const fetchInfo = () => {
    setAutoRefreshing(true);
    getItemStorage("@Token").then((token) => {
      fetchFeedsByUser(token).then((data) => {
        setUserHome(data);
        setRefreshing(false);
        setAutoRefreshing(false);
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

  useInterval(
    () => {
      fetchInfo();
    },
    10000,
    autoRefreshing
  );

  return (
    <View>
      {userHome && userHome.feeds ? (
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <Homescreen
              feeds={userHome.feeds}
              handlePress={handlePress}
              handleStory={handleStory}
              handleMyFeeds={handleMyFeeds}
            />
          </ScrollView>
        </View>
      ) : (
        <Spinner visible={true} />
      )}
    </View>
  );
};

function useInterval(callback, delay, isActive) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let interval = null;
    if (!isActive) {
      interval = setInterval(tick, delay);
    } else if (isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, delay]);
}

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
