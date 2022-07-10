/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

const linking = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          NewsFeed: {
            screens: {
              NewsFeedScreen: {
                path: "news",
              },
              SingleArticleScreen: {
                path: "news/:title",
                parse: {
                  articletitle: (articleTitle) => `${articleTitle}`,
                },
              },
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
