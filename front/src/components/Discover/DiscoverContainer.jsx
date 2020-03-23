import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Discover from "./Discover";
import { fetchDiscoverFeeds } from "../../../redux/actions/feeds";

const DiscoverContainer = props => {
  return <Discover />;
};
const mapStateToProps = function(state, ownProps) {
  return {};
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    fetchFeeds: search => dispatch(fetchFeeds(search)),
    fetchAllFeeds: () => dispatch(fetchAllFeeds())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverContainer);
