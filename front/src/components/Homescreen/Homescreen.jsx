import React from "react";
import { View, ScrollView, Text } from "react-native";
import { Divider } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Discover from "../Common/Discover/Discover";
import FeedList from "../Common/FeedList/FeedList";
import { AllView, Search, Subscribe } from "./style";

export default ({ handlePress, feeds, handleStory }) => {
  return (
    <AllView>
      <Search placeholder='Search' />
      <Divider style={{ height: 1, backgroundColor: "#e5E5E5" }} />
      <ScrollView style={{ marginBottom: 10 }}>
        {/* <FeedList
          title={"Custom"}
          feeds={feeds.custom}
          disableTick={true}
          handleStory={handleStory}
          section={"custom"}
        /> */}
        <Text
          onPress={() => console.log("press")}
          style={{
            marginRight: 20,
            marginTop: 11,
            color: "rgb(0, 122, 255)",
            fontSize: 17,
            alignSelf: "flex-end",
          }}
        >
          See all
        </Text>
        <FeedList
          title={"My feeds"}
          feeds={feeds.all}
          disableTick={true}
          handleStory={handleStory}
          section={"all"}
        />
        <Discover feeds={feeds.discover} handleStory={handleStory} grid={4} />
      </ScrollView>
      {/* 
      <Button
        title='Subscribe'
        buttonStyle={{ height: 29, width: 106, borderRadius: 20 }}
      />
      <Button
        icon={<Icon name='arrow-right' size={15} color='white' />}
        title='Button with icon component'
        buttonStyle={{ height: 29, width: 300, borderRadius: 20 }}
      /> */}

      {/* <View
        style={{
          display: "flex",
          alignSelf: "flex-end",
          justifyContent: "flex-end",
          alignContent: "flex-end",
          alignItems: "flex-end",
          position: "absolute",
        }}
      > */}
      <View
        style={{
          display: "flex",
          alignSelf: "center",
          alignItems: "center",
          alignContent: "center",
          position: "absolute",
          top: 600,
          right: 10,
        }}
      >
        <TouchableWithoutFeedback onPress={handlePress}>
          <View
            style={{
              width: 150,
              height: 40,
              backgroundColor: "rgb(0, 118, 255)",
              borderRadius: 20,
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <AntDesign name='pluscircle' size={15} color='white' />
            <Text
              style={{
                margin: 5,
                color: "white",
                alignSelf: "center",
                alignContent: "center",
                alignItems: "center",
                textAlign: "center",
                textAlignVertical: "center",
              }}
            >
              Subscribe
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </AllView>
  );
};
{
  /* <View
        style={{
          display: "flex",
          alignSelf: "flex-end",

          position: "absolute",
          bottom: 20,
          right: 20
        }}
      >
        <TouchableWithoutFeedback onPress={handlePress}>
          <AntDesign name="pluscircle" size={35} color="#01ADED" />
        </TouchableWithoutFeedback>
      </View> */
}
