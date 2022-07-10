import React, { Component } from "react";

// import { Text } from "react-native";
import { Text, View } from "../../components/Themed";

import Hooks from "./Hooks";

import SearchBar from "./SearchBar";
import NewsList from "./NewsList";

export default function ({ navigation }) {
  let { articles, wait, refetch, isFetching, omptimizedSearch } = Hooks({
    navigation,
  });
  return (
    <>
      <SearchBar search={omptimizedSearch} refresh={refetch} />
      {isFetching && <Text>Loadin.....</Text>}
      {articles?.length === 0 && <Text>No articles found</Text>}

      <NewsList
        wait={wait}
        news={articles}
        navigation={navigation}
        refresh={refetch}
      />
    </>
  );
}
