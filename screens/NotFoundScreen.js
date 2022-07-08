import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";

import { useLanguageContext } from "../context/LanguageContext";

import * as trans from "../translation/Translation.json";

export default function NotFoundScreen({ navigation }) {
  let { language, setLanguage } = useLanguageContext();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{trans[language].screenNotFound}</Text>
      <TouchableOpacity
        onPress={() => navigation.replace("Root")}
        style={styles.link}
      >
        <Text style={styles.linkText}>{trans[language].goHome}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
