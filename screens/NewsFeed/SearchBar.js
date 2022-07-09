import React, { Component } from "react";
import { View, Text, TextInput } from "../../components/Themed";

import * as trans from "../../translation/Translation.json";
import { useLanguageContext } from "../../context/LanguageContext";
export default function () {
  let { language } = useLanguageContext();
  return (
    <>
      <View
        style={{ height: "7%", width: "100%", borderRadius: 20, padding: 7 }}
      >
        <TextInput
          style={{ height: 40, width: "100%" }}
          placeholder={trans[language].searchPlaceholder}
        />
      </View>
    </>
  );
}
