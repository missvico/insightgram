import React from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList
} from "react-native";
import { Search, Done, ButtonText } from "./style";
import FeedList from "../Common/FeedList/FeedList";

export default ({ onChange, inputValue, feeds, handlePress }) => {
  return (
    <View style={{ flex: 1 }}>
      <Search
        placeholder="Search"
        onChange={e => onChange(e)}
        value={inputValue}
      />

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <FlatList
            style={{marginBottom: 10}}
            data={feeds}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <FeedList title={item.group} feeds={item.feeds} />
            )}
          />
        </ScrollView>
      </SafeAreaView>

      <Done
        onPress={() => handlePress()}
      >
      <ButtonText>Done</ButtonText>
      </Done>
      
    </View>
  );
};
