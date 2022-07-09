/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  View as DefaultView,
  TextInput as DefaultTextInput,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../context/ThemeContext";

import { useThemeContext } from "../context/ThemeContext";

export function useThemeColor(props, colorName) {
  let { theme } = useThemeContext();

  // const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

let ThemeProps = {
  lightColor: Colors.light,
  darkColor: Colors.dark,
};

// export let TextProps = ThemeProps & DefaultText["props"];
// export let ViewProps = ThemeProps & DefaultView["props"];

export function Text(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TextInput(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const placeholderTextColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );

  return (
    <DefaultTextInput
      placeholderTextColor={placeholderTextColor}
      style={[style]}
      {...otherProps}
    />
  );
}
