import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { fetchFeedsByUser } from "../../../redux/actions/feeds";
import Homescreen from "./Homescreen";

const HomescreenContainer = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Feeds");
  };
  const [userHome, setUserHome] = useState({}); //Feeds y Customs del usuario

  useEffect(() => {
    if (Object.keys(userHome).length == 0) {
      props.fetchFeedsByUser().then(data => setUserHome(data));
    } else {
      return;
    }
  }, [setUserHome]);
return <Homescreen handlePress={handlePress} />;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFeedsByUser: () => dispatch(fetchFeedsByUser())
  };
};

export default connect(null, mapDispatchToProps)(HomescreenContainer);