import { useTheme } from "@/components/context/ThemeContext";
import { IconSize, IconsName } from "@/components/ui/weather/icons";
import WeatherIcon from "@/components/ui/weather/WeatherIcon";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/ui/header/Header";
import Temperature from "@/components/ui/temperature/Temperature";
import TodayStats from "@/components/ui/today-stats/TodayStats";
import TodayClimate from "@/components/ui/today-climate/TodayClimate";

export default function Index() {
  const { theme, changeTheme } = useTheme();

  return (
    <LinearGradient
      colors={[...theme.bgGradient.colors] as [string, string, ...string[]]}
      start={theme.bgGradient.start}
      end={theme.bgGradient.end}
      style={[styles.gradient]}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.temperatureContainer}>
          <WeatherIcon
            name={IconsName["partly cloudy"]}
            size={IconSize.large}
          />
          <Temperature
            temperature={25}
            maxTemperature={30}
            minTemperature={20}
          />
        </View>
        <TodayStats rainProbability={5} windSpeed={25} sunsetHour="19:55" />
        <TodayClimate date="Mar, 12" />
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
    paddingHorizontal: 30,
    paddingVertical: 30,
    overflowY: "auto",
    overflowX: "hidden",
    gap: 25,
  },
  temperatureContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
  },
});
