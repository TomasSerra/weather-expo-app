import { StyleSheet, View } from "react-native";
import React from "react";
import Box from "@/components/common/box/Box";
import ThemedText, { FontSize } from "@/components/common/text/ThemedText";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@/components/context/ThemeContext";
import Item from "./Item";
import { IconsName } from "../weather/icons";
import { ForecastDay } from "@/hooks/weather.type";

interface NextForecastProps {
  data?: ForecastDay[];
}

const NextForecast: React.FC<NextForecastProps> = ({ data }) => {
  const { theme } = useTheme();
  return (
    <Box style={{ gap: 20 }}>
      <View style={styles.header}>
        <ThemedText size={FontSize.l}>7-Day Forecast</ThemedText>
        <MaterialIcons
          name="calendar-month"
          size={24}
          color={theme.colors.text}
        />
      </View>
      <View style={styles.itemsContainer}>
        {data?.map((item, index) => (
          <Item
            key={index}
            day={item.date.replace("-", "/")}
            weather={
              IconsName[
                item.day.condition.text.trim() as keyof typeof IconsName
              ]
            }
            minTemperture={Math.round(item.day.mintemp_c)}
            maxTemperture={Math.round(item.day.maxtemp_c)}
          />
        ))}
      </View>
    </Box>
  );
};

export default NextForecast;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  itemsContainer: {
    width: "100%",
    gap: 15,
  },
});
