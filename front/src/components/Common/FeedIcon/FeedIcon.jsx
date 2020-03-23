import React from 'react';
import { View, Dimensions, TouchableWithoutFeedback,StyleSheet, Text} from 'react-native';
import {IconCard, Avatar, AvatarBorder, TickContainer} from "./style.js"
import { AntDesign } from '@expo/vector-icons';

export default function FeedIcon({handlePress, tick, name}) {
  const iconDimensions = {
    height: Dimensions.get('window').height*0.18,
    width: Dimensions.get('window').width*0.28
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
    <IconCard height={iconDimensions.height} width={iconDimensions.width} >
        <AvatarBorder height={iconDimensions.height} width={iconDimensions.width}>
            <Avatar 
            height={iconDimensions.height} 
            width={iconDimensions.width}
            source={{uri:'https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2'}}/> 
        </AvatarBorder>
        <Text> {name}</Text>
        {tick? (
        <TickContainer height={iconDimensions.height} width={iconDimensions.width}>
            <AntDesign name="checkcircle" size={35} color="#01ADED"/>
        </TickContainer>
        ): null      
        } 
    </IconCard>
    </TouchableWithoutFeedback>
  );
}

