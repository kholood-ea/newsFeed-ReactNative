import React, { Component } from "react";

// import { Text } from "react-native";
import { Text, View } from "../../components/Themed";

import Hooks from "./Hooks";

import SearchBar from "./SearchBar";
import NewsList from "./NewsList";

export default function ({ navigation }) {
  let { data, refetch, isFetching } = Hooks();

  return (
    <>
      <SearchBar />
      {isFetching && <Text>Loadin.....</Text>}
      <NewsList
        news={data?.articles}
        navigation={navigation}
        refresh={refetch}
      />
    </>
  );
}
