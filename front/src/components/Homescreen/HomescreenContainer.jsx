import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { fetchFeedsByUser } from "../../../redux/actions/feeds";
import Homescreen from "./Homescreen";

const HomescreenContainer = ({ navigation, fetchFeedsByUser }) => {
  const [userHome, setUserHome] = useState({}); //Feeds y Customs del usuario
  const [feeds, setFeeds] = useState([]);
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
    // historias o feeds hardcode  !sigan la estructura de datos!
    setFeeds([
      {
        group: "Custom",
        feeds: [
          { is_suscribed: false, id: 1 },
          { is_suscribed: false, id: 2 },
          { is_suscribed: false, id: 3 },
          { is_suscribed: false, id: 4 }
        ],
        id: 1
      },
      {
        group: "my Feeds",
        feeds: [
          { is_suscribed: false, id: 1 },
          { is_suscribed: false, id: 2 },
          { is_suscribed: false, id: 3 }
        ],
        id: 2
      }
    ]);
  }, [setUserHome]);
  return <Homescreen handlePress={handlePress} feeds={feeds} />;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFeedsByUser: () => dispatch(fetchFeedsByUser())
  };
};

export default connect(null, mapDispatchToProps)(HomescreenContainer);
