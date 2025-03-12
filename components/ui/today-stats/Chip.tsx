import { View, StyleSheet } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useTheme } from "@/components/context/ThemeContext";
import ThemedText, { FontSize } from "@/components/common/text/ThemedText";
import Feather from "@expo/vector-icons/Feather";

interface ChipProps {
  type: ChipType;
  value: string | number;
  unit: ChipUnit;
}

const getIcon = (
  type: ChipType,
  iconSize: number,
  color: string
): React.ReactElement => {
  const icons: Record<ChipType, React.ReactElement> = {
    rain: <Entypo name="water" size={iconSize} color={color} />,
    wind: <Fontisto name="wind" size={iconSize} color={color} />,
    sunset: <Feather name="sunset" size={iconSize} color={color} />,
  };
  return icons[type];
};

export enum ChipType {
  rain = "rain",
  wind = "wind",
  sunset = "sunset",
}

export enum ChipUnit {
  percentage = "%",
  kmh = "km/h",
  hs = "hs",
}

const Chip = ({ type, value, unit }: ChipProps) => {
  const { theme } = useTheme();
  const iconSize = 16;
  return (
    <View style={styles.container}>
      {getIcon(type, iconSize, theme.colors.text)}
      <ThemedText size={FontSize.s}>{`${value} ${unit}`}</ThemedText>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
  },
});
