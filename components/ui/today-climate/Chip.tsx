import { StyleSheet, View } from "react-native";
import React from "react";
import ThemedText, { FontSize } from "@/components/common/text/ThemedText";
import { IconSize, IconsName } from "../weather/icons";
import WeatherIcon from "../weather/WeatherIcon";
import { useTheme } from "@/components/context/ThemeContext";

interface ChipProps {
  temperature: number;
  weather: IconsName;
  hour: string;
  now?: boolean;
  dayOrNight?: "day" | "night";
}

const Chip: React.FC<ChipProps> = ({
  temperature,
  weather,
  hour,
  now = false,
  dayOrNight = "day",
}) => {
  const { theme } = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: now ? theme.colors.terciary : "transparent",
          backgroundColor: now ? theme.colors.softSecondary : "transparent",
        },
      ]}
    >
      <ThemedText>{temperature}°C</ThemedText>
      <WeatherIcon
        name={weather}
        size={IconSize.small}
        dayOrNight={dayOrNight}
      />
      <ThemedText size={FontSize.s}>{hour}</ThemedText>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 130,
    borderRadius: 15,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
