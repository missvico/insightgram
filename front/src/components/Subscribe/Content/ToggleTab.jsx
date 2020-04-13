import React, { Component } from "react";
import { TabContainer } from "./style";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { BACKGROUND, INACTIVE_TAB_COLOR, TEXT } from "../../../styles";

const Header = (props) => {
  const {
    navigationState,
    navigation,
    activeTintColor,
    inactiveTintColor,
  } = props;
  const activeTabIndex = navigation.state.index;

  return (
    <View style={{ backgroundColor: BACKGROUND }}>
      <TabContainer>
        {navigationState.routes.map((route, index) => {
          const isRouteActive = index === activeTabIndex;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

          return (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate(route.routeName)}
              key={route.routeName}
            >
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: `${isRouteActive ? TEXT : INACTIVE_TAB_COLOR}`,
                    fontWeight: `${isRouteActive ? "bold" : "normal"}`,
                    paddingLeft: 15,
                    paddingRight: 15,
                  }}
                >
                  {route.routeName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </TabContainer>
      <View
        style={{
          borderBottomColor: "#000",
          opacity: 0.1,
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
};
export default Header;
