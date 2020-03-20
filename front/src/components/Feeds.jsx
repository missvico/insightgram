import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  SafeAreaView
} from "react-native";
import { Divider } from "react-native-elements";
export default ({ onChange, inputValue }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.title}>insightgram</Text>
        <Divider style={{ height: 1, backgroundColor: "grey" }} />
        <TextInput
          style={styles.textInput}
          placeholder='Search'
          onChange={e => onChange(e)}
          value={inputValue}
        />
        <Text style={styles.subtitle}>Cross units</Text>
        <ScrollView style={{ margin: 10 }} horizontal={true}>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
        </ScrollView>
        <Text style={styles.subtitle}>Marketplace</Text>
        <ScrollView style={{ margin: 10 }} horizontal={true}>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
        </ScrollView>
        <Text style={styles.subtitle}>Mercadoenvios</Text>
        <ScrollView style={{ margin: 10 }} horizontal={true}>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.images}>
            <Text>Aca van las feeds</Text>
          </SafeAreaView>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingTop: 60,
    paddingBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  subtitle: {
    paddingTop: 5,
    paddingBottom: 2,
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 10
  },
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
