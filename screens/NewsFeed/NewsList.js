import React, { Component } from "react";
import { FlatList, RefreshControl } from "react-native";

import { View, Text } from "../../components/Themed";
import NewsArticle from "./NewsArticle";

export default function ({ news, navigation, refresh }) {
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refresh();
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const renderItem = ({ item }) => (
    <NewsArticle key={item.id} newsArticle={item} navigation={navigation} />
  );

  return (
    <>
      <FlatList
        data={news}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
