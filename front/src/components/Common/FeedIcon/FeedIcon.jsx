import React from 'react';
import { View, Dimensions, TouchableWithoutFeedback,StyleSheet, Text, ImageBackground} from 'react-native';
import {IconContainer, GreyBackgroud, PreviewImage, IconCard, Avatar, AvatarBorder, TickBorder ,TopContainer , CardName} from "./style.js"
import { AntDesign } from '@expo/vector-icons';

export default function FeedIcon({handlePress, tick, name, hasPendingStories, thumbnail, preview, disableTick}) {
  const size = "big"
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <IconContainer
        size={size}>
          {disableTick? <PreviewImage source={{uri:preview}} size={size}/>: <GreyBackgroud size={size}></GreyBackgroud>}
          <IconCard size={size} preview={preview}>
                <TopContainer>
                  <AvatarBorder 
                  hasPendingStories={hasPendingStories}>
                      <Avatar
                      hasPendingStories={hasPendingStories}
                      source={{uri:thumbnail}}/>
                  </AvatarBorder>
                    {disableTick? null: <TickBorder tick={tick}>
                      {tick? ( <AntDesign name="checkcircle" size={27} color="#007aff"/>  ): null}  
                    </TickBorder>}
                </TopContainer>
                <CardName> {name} </CardName>
          </IconCard>
      </IconContainer>
    </TouchableWithoutFeedback>
  );
}


<AntDesign name="pluscircle" size={35} color="#01ADED"/>