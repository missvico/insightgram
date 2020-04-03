import React, { useState, useEffect } from "react";
import Header  from "./Header";
import {connect} from "react-redux";
import {setPlay} from "../../../../../redux/actions/play"


const HeaderContainer = ({ play, handleClose, setPlay, name}) => {
    const handlePlay = () => {
        setPlay(!play)
    }
  return (
    <Header play={play} handleClose={handleClose} handlePlay={handlePlay} name={name}/>
  );
};

const mapStateToProps = (state) => {
    return {
        play: state.play.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPlay: (value)=>dispatch(setPlay(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)