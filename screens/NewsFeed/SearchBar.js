import React, { Component } from "react";
import { View, Text, TextInput } from "../../components/Themed";

import * as trans from "../../translation/Translation.json";
import { useLanguageContext } from "../../context/LanguageContext";
export default function ({ search, refresh }) {
  let { language } = useLanguageContext();
  let handleSearch = (word) => {
    if (word.trim() == "") {
      refresh();
    } else search(word);
  };
  return (
    <>
      <View
        style={{ height: "7%", width: "100%", borderRadius: 20, padding: 7 }}
      >
        <TextInput
          style={{ height: 40, width: "100%" }}
          placeholder={trans[language].searchPlaceholder}
          onChangeText={(word) => handleSearch(word)}
        />
      </View>
    </>
  );
}
