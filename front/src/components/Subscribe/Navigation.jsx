import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import AllFeedsToggle from "./AllFeedsToggle";
import MyFeedsToggle from "./MyFeedsToggle";
import ToggleTab from "./ToggleTab";
import {INACTIVE_TAB_COLOR, TEXT} from "../../styles"

const ToggleFeeds = createMaterialTopTabNavigator(
  {
    ["See all"]: {
      screen: AllFeedsToggle
    },
    ["My Feeds"]: {
      screen: MyFeedsToggle
    },
  },
  {
    tabBarComponent: ToggleTab,
    tabBarOptions: {
      activeTintColor: TEXT,
      inactiveTintColor: INACTIVE_TAB_COLOR,
    },
    initialRouteName: "See all",
  }
);

const Navigation = createAppContainer(ToggleFeeds);

export default Navigation;
