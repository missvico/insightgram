import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  FlatList
} from "react-native";
import { Title, Search } from "./style";
import { Divider } from "react-native-elements";
import FeedList from "../Common/FeedList/FeedList";
import Constants from "expo-constants";
import { LIGHT_GREY, LIGHT_BLUE, WHITE, DARK_BLUE } from "../../styles";
import { Button } from "react-native-elements";

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default ({ onChange, inputValue, feeds, handlePress }) => {
  return (
    <View style={{ flex: 1 }}>
      <Search
        placeholder='Search'
        onChange={e => onChange(e)}
        value={inputValue}
      />

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <FlatList
            data={feeds}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <FeedList title={item.group} feeds={item.feeds} />
            )}
          />
          <View
            style={{
              bottom: 0,
              right: 0,
              width: "100%",
              //
              height: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
          ></View>
        </ScrollView>
      </SafeAreaView>
      {/* <Button title='Done' type='clear' /> */}
      <Button
        onPress={() => handlePress()}
        title='Done'
        type='clear'
        buttonStyle={{
          backgroundColor: WHITE,
          height: 60
        }}
      />
    </View>
  );
};
