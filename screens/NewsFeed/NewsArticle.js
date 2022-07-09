import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";

import { View, Text } from "../../components/Themed";
import moment from "moment";

export default function ({ newsArticle, navigation }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("NewsArticle", { Details: newsArticle })
      }
    >
      <View
        id={newsArticle?.id}
        style={{
          flexDirection: "row",
          padding: 5,
          margin: 5,
          borderRadius: 10,
        }}
      >
        <View style={{ justifyContent: "space-around" }}>
          <Text style={{ width: 300 }}>{newsArticle?.title}</Text>

          <Text style={{ width: 300 }}>
            {moment(newsArticle?.publishedAt).format("LLLL")}
          </Text>
        </View>

        <Image
          style={{ height: 100, width: 100, borderRadius: 10 }}
          source={{ uri: newsArticle.urlToImage }}
        />
      </View>
    </TouchableOpacity>
  );
}
