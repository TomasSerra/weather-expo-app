import { StyleSheet, View } from "react-native";
import React from "react";
import ThemedText from "@/components/common/text/ThemedText";
import { IconSize, IconsName } from "../weather/icons";
import WeatherIcon from "../weather/WeatherIcon";

interface ChipProps {
  temperature: number;
  weather: IconsName;
  hour: string;
}

const Chip: React.FC<ChipProps> = ({ temperature, weather, hour }) => {
  return (
    <View style={styles.container}>
      <ThemedText>{temperature}°C</ThemedText>
      <WeatherIcon name={weather} size={IconSize.small} />
      <ThemedText>{hour}</ThemedText>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 120,
  },
});
