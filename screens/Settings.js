import { Text, View } from "../components/Themed";
import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";

import { useThemeContext } from "../context/ThemeContext";
import { useLanguageContext } from "../context/LanguageContext";

import * as trans from "../translation/Translation.json";
export default () => {
  let { darkMode, setDarkMode } = useThemeContext();
  let { language, setLanguage } = useLanguageContext();

  //normal case is to choose from a drop down menu and change language based on id
  // this is only limited to serve task purpose
  let handleLanguage = () => {
    if (language == "en") {
      setLanguage("ar");
    } else setLanguage("en");
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.helpContainer}>
          <TouchableOpacity
            onPress={() => {
              setDarkMode(!darkMode);
            }}
            style={styles.helpLink}
          >
            <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
              {trans[language].switchModeText}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.helpContainer}>
          <TouchableOpacity
            onPress={() => {
              handleLanguage();
            }}
            style={styles.helpLink}
          >
            <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
              {trans[language].changeLanguageText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
