import React, { useState, useEffect } from "react";
import Story from "./Content/Story/Story";
import { View } from "react-native";
import Header from "./Content/Header/Header";

export default StoriesContainer = ({ handleClose, feed, handleFeedChange }) => {
  const { stories } = feed;
  const [index, setIndex] = useState(0);
  const [currentStory, setCurrentStory] = useState({});

  useEffect(() => {
    const inx = lastNotSeen(stories);

    if (inx !== -1) {
      setIndex(inx);
      setCurrentStory(stories[inx]);
      changeStatus(inx);
    } else {
      setCurrentStory(stories[0]);
      setIndex(stories.length - 1);
    }
  }, [setCurrentStory, feed]);

  const handleStoryChange = n => {
    if (index + n < 0 || index + n > stories.length) {
      setIndex(0);
      handleFeedChange(n);
    } else {
      changeStatus(index);
      setIndex(index + n);
      setCurrentStory(stories[index]);
    }
  };

  const changeStatus = index => {
    stories[index].status = "seen";
  };

  return (
    <View flex={1}>
      <Header style={{ position: "absolute" }} handleClose={handleClose} />
      <Story story={currentStory} handleStoryChange={handleStoryChange} />
    </View>
  );
};

const lastNotSeen = stories =>
  stories.indexOf(stories.filter(story => story.status === "not_seen")[0]);
