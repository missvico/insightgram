import React from "react";
import { connect } from "react-redux";
import Discover from "./Discover";

const DiscoverContainer = props => {
  return <Discover feeds={props.discover} />;
};

export default connect(null, null)(DiscoverContainer);
