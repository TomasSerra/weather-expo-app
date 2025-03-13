import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IconSize, IconsName } from "../weather/icons";
import WeatherIcon from "../weather/WeatherIcon";
import ThemedText, { FontSize } from "@/components/common/text/ThemedText";

interface ItemProps {
  day: string;
  weather: IconsName;
  minTemperture: number;
  maxTemperture: number;
}

const Item: React.FC<ItemProps> = ({
  day,
  weather,
  minTemperture,
  maxTemperture,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        <ThemedText size={FontSize.s}>{day}</ThemedText>
      </View>
      <WeatherIcon name={weather} size={IconSize.small} />
      <View style={styles.tempContainer}>
        <ThemedText size={FontSize.s} style={{ opacity: 0.8 }}>
          {minTemperture}°C
        </ThemedText>
        <ThemedText size={FontSize.s}>{maxTemperture}°C</ThemedText>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  dayContainer: {
    width: "30%",
  },
  tempContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
