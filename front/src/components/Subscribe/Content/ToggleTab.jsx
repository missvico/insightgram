import React, { useState } from "react";
import styles from "./style";
import { View, TouchableWithoutFeedback } from "react-native";
import {
  BACKGROUND,
  INACTIVE_TAB_COLOR,
  TEXT,
  LINE_COLOR,
} from "../../../styles";

const Header = (props) => {
  const {
    navigationState,
    navigation,
    activeTintColor,
    inactiveTintColor,
  } = props;
  const activeTabIndex = navigation.state.index;
  const [toggle, setToggle] = useState(true);

  return (
    <View style={{ backgroundColor: BACKGROUND }}>
      <styles.TabContainer>
        {navigationState.routes.map((route, index) => {
          const isRouteActive = index === activeTabIndex;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

          return (
            <TouchableWithoutFeedback
              onPress={() => {
                setToggle(!toggle);
                navigation.navigate(route.routeName);
              }}
              key={route.routeName}
            >
              <View>
                <styles.TabText
                  color={`${isRouteActive ? TEXT : INACTIVE_TAB_COLOR}`}
                >
                  {route.routeName}
                </styles.TabText>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </styles.TabContainer>
      <styles.Separator>
        <styles.ToggleSeparator show={toggle} />
        <styles.ToggleSeparator show={!toggle} />
      </styles.Separator>
    </View>
  );
};
export default Header;
