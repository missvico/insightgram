import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { fetchFeedsByUser } from "../../../redux/actions/feeds";

const HomescreenContainer = props => {
  const [userHome, setUserHome] = useState({}); //Feeds y Customs del usuario

  useEffect(() => {
    if (Object.keys(userHome).length == 0) {
      props.fetchFeedsByUser().then(data => setUserHome(data));
    } else {
      return;
    }
  }, [setUserHome]);
  return <Text>Homescreen</Text>;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFeedsByUser: () => dispatch(fetchFeedsByUser())
  };
};

export default connect(null, mapDispatchToProps)(HomescreenContainer);
