import React from 'react';
import { View, Dimensions, TouchableWithoutFeedback,StyleSheet} from 'react-native';
import {IconCard, Avatar, AvatarBorder, TickContainer} from "./style.js"
import { AntDesign } from '@expo/vector-icons';

export default function FeedIcon({handlePress, tick}) {
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


// const styles = StyleSheet.create({
//   container: {
//     height: iconDimensions.height,
//     width: iconDimensions.width,
//     borderRadius: iconDimensions.height*0.1,
//     backgroundColor: '#757575',
//     flexDirection: 'column',
//     justifyContent: 'space-between'
//   },
//   avatar: {
//     height: iconDimensions.height*0.18,
//     width: iconDimensions.height*0.18,
//     borderRadius: iconDimensions.height*0.18/2
//   },
//   avatarBorder: {
//     height: iconDimensions.height*0.23,
//     width: iconDimensions.height*0.23,
//     borderRadius: iconDimensions.height*0.23/2,
//     borderWidth: 2,
//     borderColor:"#FF87A2",
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginLeft: 10,
//     marginTop: 10
//   },
//   tick:{
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     marginBottom: 10,
//     marginRight: 10
//   }
// });