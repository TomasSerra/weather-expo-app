import { themes } from "@/util/const/colors";
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  theme: themes.day,
  toggleTheme: () => {},
  changeTheme: (theme: "day" | "night") => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(themes.day);

  const toggleTheme = () => {
    setTheme((prev) => (prev === themes.day ? themes.night : themes.day));
  };

  const changeTheme = (theme: "day" | "night") => {
    setTheme(themes[theme]);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
