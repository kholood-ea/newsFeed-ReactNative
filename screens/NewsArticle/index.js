import React, { Component } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import moment from "moment";

import { View, Text } from "../../components/Themed";

import * as trans from "../../translation/Translation.json";
import { useLanguageContext } from "../../context/LanguageContext";
export default function ({ navigation, route }) {
  let { language } = useLanguageContext();
  let { Details } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => {
            navigation.pop();
          }}
        >
          <Text>{trans[language].back}</Text>
        </TouchableOpacity>
        <ScrollView>
          <View>
            <Image
              style={{
                height: 400,
                width: 400,
                borderRadius: 10,
                margin: 20,
                alignSelf: "center",
              }}
              source={{ uri: Details.urlToImage }}
            ></Image>
            <Text style={{ padding: 10, fontSize: 20, marginBottom: 10 }}>
              {Details?.title}
            </Text>

            <Text style={{ padding: 10, fontSize: 15, marginBottom: 10 }}>
              {Details?.content}
            </Text>

            <Text style={{ padding: 7, fontSize: 15 }}>
              By: {Details?.author}
            </Text>
            <Text style={{ padding: 7, fontSize: 15 }}>
              {moment(Details?.publishedAt).format("LLLL")}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
