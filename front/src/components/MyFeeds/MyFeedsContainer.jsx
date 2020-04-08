import React, { Component } from "react";
import MyFeeds from "./MyFeeds";
import {View} from "react-native"
import { connect } from "react-redux";
import Search from "../Common/Search/Search"

const MyFeedsContainer = ({ feeds, navigation}) => {
  
  const handleStory = (storyprops) => {
    navigation.navigate("Stories", storyprops);
  };

  return ( 
    <View style={{flex: 1, backgroundColor: "#ffffff"}}>
      <Search />
      <View style={{height: 10}}> 

      </View>
      <MyFeeds feeds={feeds} handleStory={handleStory}/>
    </View>
  );
};



const mapStateToProps = (state, ownProps) => {
  return {
    feeds: state.feeds.homeUser.feeds.all
  };
};

export default connect(mapStateToProps, null)(MyFeedsContainer);