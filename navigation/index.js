/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import Colors from "../constants/Colors";
import NotFoundScreen from "../screens/NotFoundScreen";
import Settings from "../screens/Settings";
import NewsFeed from "../screens/NewsFeed";
import NewsArticle from "../screens/NewsArticle";

import LinkingConfiguration from "./LinkingConfiguration";
import { useThemeContext } from "../context/ThemeContext";
import { useLanguageContext } from "../context/LanguageContext";

import * as trans from "../translation/Translation.json";

export default function Navigation({ colorScheme }) {
  let { darkMode } = useThemeContext();

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={darkMode === true ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  let { language } = useLanguageContext();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewsArticle"
        component={NewsArticle}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: trans[language].oops }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}></Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  let { theme } = useThemeContext();
  let { language } = useLanguageContext();

  return (
    <BottomTab.Navigator
      initialRouteName="NewsFeed"
      screenOptions={{
        tabBarActiveTintColor: Colors[theme].tint,
      }}
    >
      <BottomTab.Screen
        name="NewsFeed"
        component={NewsFeed}
        options={{
          title: trans[language].cnews,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="newspaper-o" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: trans[language].settings,
          tabBarIcon: ({ color }) => <TabBarIcon name="gears" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
