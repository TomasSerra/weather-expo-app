import { themes } from "@/util/const/colors";
import React, { createContext, useContext, useState } from "react";

interface ThemeContextType {
  theme: typeof themes.day;
  toggleTheme: () => void;
  changeTheme: (theme: "day" | "night") => void;
  isDay: () => boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: themes.day,
  toggleTheme: () => {},
  changeTheme: (theme: "day" | "night") => {},
  isDay: () => true,
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

  const isDay = () => theme === themes.day;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, changeTheme, isDay }}>
      {children}
    </ThemeContext.Provider>
  );
};
