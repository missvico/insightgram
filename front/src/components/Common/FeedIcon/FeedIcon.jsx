import React from 'react';
import { View, Dimensions, TouchableWithoutFeedback,StyleSheet, Text} from 'react-native';
import {IconCard, Avatar, AvatarBorder, TickContainer, CardName} from "./style.js"
import { AntDesign } from '@expo/vector-icons';

export default function FeedIcon({handlePress, tick, name, hasPendingStories, thumbnail, preview}) {
  const iconDimensions = {
    height: Dimensions.get('window').height*0.18,
    width: Dimensions.get('window').width*0.28
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
    <IconCard 
      height={iconDimensions.height} 
      width={iconDimensions.width}
      source={preview? {uri:preview} : {uri:"https://www.colorcombos.com/images/colors/CCCCCC.png"}} >
        <AvatarBorder 
        height={iconDimensions.height} 
        width={iconDimensions.width}
        hasPendingStories={hasPendingStories}>
            <Avatar
            height={iconDimensions.height}
            width={iconDimensions.width}
            source={{uri:thumbnail}}/>
        </AvatarBorder>
        <CardName> {name} </CardName>
        <TickContainer height={iconDimensions.height} width={iconDimensions.width}>
           {tick? ( <AntDesign name="checkcircle" size={35} color="#01ADED"/>  ): null}
        </TickContainer>
    </IconCard>
    </TouchableWithoutFeedback>
  );
}


<AntDesign name="pluscircle" size={35} color="#01ADED"/>