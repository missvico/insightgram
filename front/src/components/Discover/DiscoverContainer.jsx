import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  FlatList
} from "react-native";
// import { Title, Search } from "./style";
import FeedIconContainer from "../Common/FeedIcon/FeedIconContainer";

const data = [
    {
       "id":27,
       "name":"Pelotita 3",
       "has_pending_stories":true,
       "stories":[
          {
             "id":33,
             "status":"not_seen"
          },
          {
             "id":34,
             "status":"not_seen"
          },
          {
             "id":35,
             "status":"seen"
          }
       ]
    },
    {
       "id":28,
       "name":"Pelotita 4",
       "has_pending_stories":true,
       "stories":[
          {
             "id":36,
             "status":"not_seen"
          },
          {
             "id":37,
             "status":"not_seen"
          },
          {
             "id":38,
             "status":"seen"
          }
       ]
    },
    {
        "id":29,
        "name":"Pelotita 4",
        "has_pending_stories":true,
        "stories":[
           {
              "id":33,
              "status":"not_seen"
           },
           {
              "id":34,
              "status":"not_seen"
           },
           {
              "id":35,
              "status":"seen"
           }
        ]
     },
     {
        "id":30,
        "name":"Pelotita 5",
        "has_pending_stories":true,
        "stories":[
           {
              "id":33,
              "status":"not_seen"
           },
           {
              "id":34,
              "status":"not_seen"
           },
           {
              "id":35,
              "status":"seen"
           }
        ]
     },
     {
        "id":31,
        "name":"Pelotita 6",
        "has_pending_stories":true,
        "stories":[
           {
              "id":33,
              "status":"not_seen"
           },
           {
              "id":34,
              "status":"not_seen"
           },
           {
              "id":35,
              "status":"seen"
           }
        ]
     },
     {
        "id":32,
        "name":"Pelotita 7",
        "has_pending_stories":true,
        "stories":[
           {
              "id":33,
              "status":"not_seen"
           },
           {
              "id":34,
              "status":"not_seen"
           },
           {
              "id":35,
              "status":"seen"
           }
        ]
     },
     {
        "id":33,
        "name":"Pelotita 8",
        "has_pending_stories":true,
        "stories":[
           {
              "id":33,
              "status":"not_seen"
           },
           {
              "id":34,
              "status":"not_seen"
           },
           {
              "id":35,
              "status":"seen"
           }
        ]
     },
     {
        "id":34,
        "name":"Pelotita 9",
        "has_pending_stories":true,
        "stories":[
           {
              "id":33,
              "status":"not_seen"
           },
           {
              "id":34,
              "status":"not_seen"
           },
           {
              "id":35,
              "status":"seen"
           }
        ]
     }
 ]

export default ({ onChange, inputValue, feeds }) => {
  return (
    <View>
      <SafeAreaView>
        <FlatList
          data={data}
          numColumns={4}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <FeedIconContainer/>
          )}
        />
      </SafeAreaView>
    </View>
  );
};
