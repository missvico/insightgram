import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import AllFeedsToggle from "./AllFeedsToggle";
import MyFeedsToggle from "./MyFeedsToggle";
import ToggleTab from "./ToggleTab";

const ToggleFeeds = createMaterialTopTabNavigator(
  {
    ["See all"]: {
      screen: AllFeedsToggle
    },
    ["My Feeds"]: {
      screen: MyFeedsToggle
    }
  },
  {
    tabBarComponent: ToggleTab,
    tabBarOptions: {
      activeTintColor: "#000000",
      inactiveTintColor: "rgb(163 163 163)"
    },
    initialRouteName: "See all"
  }
);

const Navigation = createAppContainer(ToggleFeeds);

export default Navigation;
