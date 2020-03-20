import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  FlatList
} from "react-native";

import{
  Title,
  Search
} from "./style"

import { Divider } from "react-native-elements";
import FeedList from "../Common/FeedList/FeedList"
import Constants from 'expo-constants';


function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}


export default ({ onChange, inputValue, feeds }) => {
  return (
    <View>
          <Title>insightgram</Title>
          <Divider style={{ height: 1, backgroundColor: "grey" }} />
          <Search
          placeholder='Search'
          onChange={e => onChange(e)}
          value={inputValue}
        />
      <SafeAreaView>
      <FlatList
        data={feeds}
        renderItem={({ item }) => <FeedList title={item.group} feeds={item.feeds} />}
        keyExtractor={item => item.id}
      />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  images: {
    display: "flex",
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#a8e063",
    height: 150,
    width: 100,
    alignContent: "center",
    justifyContent: "center",
    margin: 3
  },
  textInput: {
    borderTopColor: "grey",
    borderBottomColor: "grey",
    borderLeftColor: "grey",
    borderRightColor: "grey",
    paddingLeft: 10,
    margin: 10,
    borderRadius: 10,
    height: 35,
    width: 300,
    borderColor: "black",
    borderWidth: 1
    // paddingLeft: "2" cuando uso esto, se rompe, por que? NO SE
  }
});
