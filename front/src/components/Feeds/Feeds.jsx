import React from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { Search } from "./style";
import FeedList from "../Common/FeedList/FeedList";

export default ({ onChange, inputValue, feeds }) => {
  return (
    <View>
      <Search
        placeholder="Search"
        onChange={e => onChange(e)}
        value={inputValue}
      />

      <SafeAreaView>
        <FlatList
          data={feeds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <FeedList title={item.group} feeds={item.feeds} />
          )}
        />
      </SafeAreaView>
    </View>
  );
};
