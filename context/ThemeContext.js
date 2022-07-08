import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  let theme = darkMode ? "dark" : "light";

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
