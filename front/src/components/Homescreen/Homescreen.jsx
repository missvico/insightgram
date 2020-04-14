import React from "react";
import { View, ScrollView, Text, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";
import {
  ItemText,
  Subscribe,
  SeeAllButton,
  SeeAllText,
  SubscribeTxt,
  Align,
} from "./style";
import Discover from "./Discover/Discover";
import FeedList from "../Common/FeedList/FeedList";
import Search from "../Common/Search/Search";
import { BACKGROUND } from "../../styles";

export default ({ handlePress, feeds, handleStory, handleMyFeeds }) => {
  return (
    <View backgroundColor={BACKGROUND}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingTop: "13%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: -10,
              zIndex: 2,
            }}
          >
            <ItemText>My feeds</ItemText>
            <TouchableWithoutFeedback onPress={handleMyFeeds}>
              <SeeAllButton>
                <SeeAllText>See all</SeeAllText>
              </SeeAllButton>
            </TouchableWithoutFeedback>
          </View>
          <FeedList
            feeds={feeds.all}
            disableTick={true}
            handleStory={handleStory}
            section={"all"}
          />
          <Discover feeds={feeds.discover} handleStory={handleStory} />
        </View>
      </ScrollView>

      <Align>
        <TouchableWithoutFeedback onPress={handlePress}>
          <Subscribe>
            <AntDesign name="pluscircle" size={15} color="white" />
            <SubscribeTxt>Subscribe</SubscribeTxt>
          </Subscribe>
        </TouchableWithoutFeedback>
      </Align>

      <View
        style={{
          flex: 1,
          width: "100%",
          position: "absolute",
          top: 0,
          marginTop: -5,
        }}
      >
        <Search />
      </View>
    </View>
  );
};
