import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IconSize, IconsName } from "../weather/icons";
import WeatherIcon from "../weather/WeatherIcon";
import ThemedText, { FontSize } from "@/components/common/text/ThemedText";

interface ItemProps {
  date_epoch: number;
  weather: IconsName;
  minTemperture: number;
  maxTemperture: number;
}

const Item: React.FC<ItemProps> = ({
  date_epoch,
  weather,
  minTemperture,
  maxTemperture,
}) => {
  const getDay = () => {
    const date = new Date(date_epoch * 1000);

    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return days[date.getDay()];
  };
  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        <ThemedText size={FontSize.s}>{getDay()}</ThemedText>
      </View>
      <View style={styles.iconContainer}>
        <WeatherIcon name={weather} size={IconSize.small} />
      </View>
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
    flex: 1,
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tempContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
    flex: 1,
  },
});
