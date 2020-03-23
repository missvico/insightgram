import React, { useState } from "react";
import { connect } from "react-redux";
import Feeds from "./Feeds";
import { fetchFeeds } from "../../../redux/actions/feeds";

const FeedsContainer = props => {
  const [inputValue, setInputValue] = useState("");

  const onChange = event => {
    let search = event.nativeEvent.text;
    console.log(search);
    setInputValue(search);
    //props.fetchFeeds(search); en espera de la data
  };

  const feedData = {
    feeds: [
      {
        group: "Marketplace",
        feeds: [
          {
            id: "40",
            name: "Pelotita 1",
            is_suscribed: false
          },
          {
            id: "27",
            name: "Pelotita 2",
            is_suscribed: true
          },
          {
            id: "30",
            name: "Pelotita 3",
            is_suscribed: true
          },
          {
            id: "31",
            name: "Pelotita 4",
            is_suscribed: true
          }
        ]
      },
      {
        group: "MercadoPago",
        feeds: [
          {
            id: "28",
            name: "Pelotita 3",
            is_suscribed: false
          },
          {
            id: "29",
            name: "Pelotita 4",
            is_suscribed: true
          }
        ]
      }
    ]
  };

  return <Feeds onChange={onChange} inputValue={inputValue} feeds={feedData.feeds}/>;
};

const mapStateToProps = function(state, ownProps) {
  return {};
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    fetchFeeds: search => dispatch(fetchFeeds(search))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedsContainer);
