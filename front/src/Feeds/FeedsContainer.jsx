import React, { useState } from "react";
import { connect } from "react-redux";
import Feeds from "./Feeds";
import { fetchFeeds } from "../store/actions/feeds";

const FeedsContainer = props => {
  const [inputValue, setInputValue] = useState("");

  const onChange = event => {
    let search = event.nativeEvent.text;
    console.log(search);
    setInputValue(search);
    //props.fetchFeeds(search); en espera de la data
  };
  return <Feeds onChange={onChange} inputValue={inputValue} />;
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
