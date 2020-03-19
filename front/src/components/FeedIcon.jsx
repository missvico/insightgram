import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableWithoutFeedback} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function FeedIcon({handlePress, tick}) {

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
    <View style={styles.container} onPress={() => {
        alert('You tapped the button!');
      }}>
        <View style={styles.avatarBorder}>
            <Image 
            source={{uri:'https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2'}}
            style={styles.avatar}/>
        </View>
        {tick? (
        <View style={styles.tick}>
            <AntDesign name="checkcircle" size={35} color="#01ADED"/>
        </View>
        ): null      
        }
    </View>
    </TouchableWithoutFeedback>
  );
}

const iconDimensions = {
    height: Dimensions.get('window').height*0.18,
    width: Dimensions.get('window').width*0.28
}

const styles = StyleSheet.create({
  container: {
    height: iconDimensions.height,
    width: iconDimensions.width,
    borderRadius: iconDimensions.height*0.1,
    backgroundColor: '#757575',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  avatar: {
    height: iconDimensions.height*0.18,
    width: iconDimensions.height*0.18,
    borderRadius: iconDimensions.height*0.18/2
  },
  avatarBorder: {
    height: iconDimensions.height*0.23,
    width: iconDimensions.height*0.23,
    borderRadius: iconDimensions.height*0.23/2,
    borderWidth: 2,
    borderColor:"#FF87A2",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 10
  },
  tick:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
    marginRight: 10
  }
});