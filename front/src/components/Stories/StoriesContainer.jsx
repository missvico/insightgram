import React, { useState, useEffect } from "react";
import Story from "./Content/Story/Story";
import { View } from "react-native";
import Header from "./Content/Header/Header";

export default StoriesContainer = ({ feed, handleFeedChange }) => {
  const { stories } = feed;
  const [index, setIndex] = useState(0);
  const [storiesSeen, setStoriesSeen] = useState([]);

  const handleStoryChange = n => {
    changeStatus(index);
    if (index + n < 0 || index + n === stories.length) {
      setIndex(0);
      handleFeedChange(n);
    } else {
      setIndex(index + n);
    }
  };


  const changeStatus = inx => {
    stories[inx].status = "seen";
    storiesSeen.push(stories[inx].id);
    setStoriesSeen(storiesSeen);
  };

   return (
    <View flex={1}>
      <Header style={{ position: "absolute" }} handleClose={handleClose} />
      <Story story={stories[index]} handleStoryChange={handleStoryChange} />
    </View>
  );
};
