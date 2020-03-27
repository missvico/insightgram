import React from "react";
import { connect } from "react-redux";
import Discover from "./Discover";

const DiscoverContainer = ({handleStory, discover}) => {
  return <Discover feeds={discover} handleStory={handleStory} />;
};

export default connect(null, null)(DiscoverContainer);
