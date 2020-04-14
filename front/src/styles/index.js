import {
  Appearance,
  AppearanceProvider,
  useColorScheme,
} from "react-native-appearance";

const colorScheme = Appearance.getColorScheme();

export const DARK_GREY = "#333333";
export const WHITE = "#fff";
export const LIGHT_BLUE = "#0066ff";
export const CARD_COLOR = colorScheme === "dark" ? "#848181" : "#848181";
export const TAB_BACKGROUND = colorScheme === "dark" ? "#111211" : "#fff";
export const BACKGROUND = colorScheme === "dark" ? "#111211" : "#fff";
export const HEADER_BACKGROUND = colorScheme === "dark" ? "#111211" : "#fff";
export const INPUT_BACKGROUND = colorScheme === "dark" ? "#262626" : "#efefee";
export const INPUT_COLOR = colorScheme === "dark" ? "#fff" : "#8e8e93";
export const PLACEHOLDER_COLOR = colorScheme === "dark" ? "#a3a3a3" : "#a3a3a3";
export const INACTIVE_TAB_COLOR =
  colorScheme === "dark" ? "#848484" : "#A3A3A3";
export const TEXT = colorScheme === "dark" ? "#fff" : "#000";
export const LINE_COLOR = colorScheme === "dark" ? "#737373" : "#efefee";
