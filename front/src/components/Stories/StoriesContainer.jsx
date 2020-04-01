import React, { useState, useEffect, useRef } from "react";
import Story from "./Content/Story/Story";
import { View } from "react-native";
import HeaderContainer from "./Content/Header/HeaderContainer";
import {connect} from "react-redux"

const StoriesContainer = ({ handleClose, feed, handleFeedChange, play}) => {
  const { stories, name } = feed;
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

  useInterval(() => {
    handleStoryChange(1)
  }, 3000, play);

  const changeStatus = inx => {
    stories[inx].status = "seen";
    storiesSeen.push(stories[inx].id);
    setStoriesSeen(storiesSeen);
  };

  return (
    <View flex={1}>
      <HeaderContainer style={{ position: "absolute" }} handleClose={handleClose} name={name} />
      <Story story={stories[index]} handleStoryChange={handleStoryChange} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return{
    play: state.play.value
  }
}


export default connect(mapStateToProps, null)(StoriesContainer)


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
    } else if (!isActive ) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, delay]);
  
}