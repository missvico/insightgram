import React, { useState, useEffect, useRef } from "react";
import Story from "./Content/Story/Story";
import { View, Dimensions, Animated } from "react-native";
import HeaderContainer from "./Content/Header/HeaderContainer";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { currentStoryIndex } from "../../../redux/actions/feeds";
const StoriesContainer = ({ handleClose, feed, handleFeedChange, play }) => {
  const dispatch = useDispatch();
  const { stories, name } = feed;
  const [index, setIndex] = useState(0);
  const [currentStory, setCurrentStory] = useState({});

  useEffect(() => {
    const inx = lastNotSeen(stories);

    if (inx !== -1) {
      setIndex(inx);
      setCurrentStory(stories[inx]);
      changeStatus(inx);
      dispatch(currentStoryIndex(inx));
    } else {
      setIndex(stories.length - 1);
      setCurrentStory(stories[stories.length - 1]);
      dispatch(currentStoryIndex(stories.length - 1));
    }
  }, [setCurrentStory, feed]);

  const handleStoryChange = (n) => {
    if (index + n < 0 || index + n > stories.length) {
      setIndex(0);
      dispatch(currentStoryIndex(0));
      handleFeedChange(n);
    } else {
      changeStatus(index);
      setIndex(index + 1);
      dispatch(currentStoryIndex(index));
      setCurrentStory(stories[index]);
    }
  };

  const changeStatus = (index) => {
    console.log(stories)
    stories[index].status = "seen";
  };

  useInterval(
    () => {
      handleStoryChange(1);
    },
    3000,
    play
  );

  return (
    <View flex={1}>
      <HeaderContainer
        style={{ position: "absolute" }}
        handleClose={handleClose}
        name={name}
        stories={stories}
      />
      <Story story={currentStory} handleStoryChange={handleStoryChange} />
    </View>
  );
};

const lastNotSeen = (stories) =>
  stories.indexOf(stories.filter((story) => story.status === "not_seen")[0]);

const mapStateToProps = (state) => {
  return {
    play: state.play.value,
  };
};

//FUNCION AUXILIAR:

function useInterval(callback, delay, isActive) {
  const savedCallback = useRef();
  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let interval = null;
    if (isActive) {
      interval = setInterval(tick, delay);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, delay]);
}

export default connect(mapStateToProps, null)(StoriesContainer);
