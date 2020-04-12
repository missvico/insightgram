import React, { Component } from "react";
import styles from "./style";
import { View, TouchableWithoutFeedback } from "react-native";

const Header = (props) => {
  const {
    navigationState,
    navigation,
    activeTintColor,
    inactiveTintColor,
  } = props;
  const activeTabIndex = navigation.state.index;

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <styles.TabContainer>
        {navigationState.routes.map((route, index) => {
          const isRouteActive = index === activeTabIndex;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

          return (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate(route.routeName)}
              key={route.routeName}
            >
              <View>
                <styles.TabText
                  color={`${isRouteActive ? "#000000" : "#A3A3A3"}`}
                >
                  {route.routeName}
                </styles.TabText>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </styles.TabContainer>
      <styles.TabBorder />
    </View>
  );
};
export default Header;
