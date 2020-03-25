import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import Homescreen from "./Homescreen";
import { fetchFeedsByUser } from "../../../redux/actions/feeds";
import { View } from "react-native";


const HomescreenContainer = ({ navigation, fetchFeedsByUser }) => {
  const [userHome, setUserHome] = useState({}); //Feeds y Customs del usuario
  //Titulo de la screen
  const handlePress = () => {
    navigation.navigate("Feeds");
  };

  useEffect(() => {
    if (Object.keys(userHome).length == 0) {
      fetchFeedsByUser().then(data => setUserHome(data));
    } else {
      return;
    }
  }, [setUserHome]);
  return (
    <View>
      {userHome && userHome.feeds ? (
        <Homescreen handlePress={handlePress} feeds={userHome.feeds} />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFeedsByUser: () => dispatch(fetchFeedsByUser())
  };
};

export default connect(null, mapDispatchToProps)(HomescreenContainer);
