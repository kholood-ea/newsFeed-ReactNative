import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";

import { ThemeContextProvider } from "./context/ThemeContext";
import { LanguageContextProvider } from "./context/LanguageContext";
export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <LanguageContextProvider>
        <ThemeContextProvider>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar />
          </SafeAreaProvider>
        </ThemeContextProvider>
      </LanguageContextProvider>
    );
  }
}
