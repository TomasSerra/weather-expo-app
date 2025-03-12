import { useTheme } from "@/components/context/ThemeContext";
import { IconsName } from "@/components/ui/weather/icons";
import WeatherIcon from "@/components/ui/weather/WeatherIcon";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Header from "@/components/common/header/Header";

export default function Index() {
  const { theme } = useTheme();
  const [isDay, setIsDay] = useState(true);
  const bgGradient = isDay ? theme.bgGradient.day : theme.bgGradient.night;

  return (
    <LinearGradient
      colors={[...bgGradient.colors] as [string, string, ...string[]]}
      start={bgGradient.start}
      end={bgGradient.end}
      style={[styles.gradient]}
    >
      <View style={styles.container}>
        <Header />
        <WeatherIcon name={IconsName["sunny"]} isday={isDay} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflowX: "hidden",
  },
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
    overflowY: "auto",
    overflowX: "hidden",
  },
});
