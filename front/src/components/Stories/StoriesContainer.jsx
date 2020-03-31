import React, { useState, useEffect } from "react";
import Story from "./Content/Story/Story";
import { View } from "react-native";
import Header from "./Content/Header/Header";

export default StoriesContainer = ({ handleClose, feed, handleFeedChange }) => {
  const { stories } = feed;
  const [index, setIndex] = useState(0);

  const handleStoryChange = n => {
    if (index + n < 0 || index + n === stories.length) {
      setIndex(0);
      handleFeedChange(n);
    } else {
      setIndex(index + n);
    }
  };
  return (
    <View flex={1}>
      <Header style={{ position: "absolute" }} handleClose={handleClose} />
      <Story story={stories[index]} handleStoryChange={handleStoryChange} />
    </View>
  );
};
