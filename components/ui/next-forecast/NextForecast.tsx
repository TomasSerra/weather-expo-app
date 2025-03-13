import { StyleSheet, View } from "react-native";
import React from "react";
import Box from "@/components/common/box/Box";
import ThemedText, { FontSize } from "@/components/common/text/ThemedText";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@/components/context/ThemeContext";
import Item from "./Item";
import { IconsName } from "../weather/icons";

interface NextForecastProps {}

const NextForecast: React.FC<NextForecastProps> = ({}) => {
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
        <Item
          day="Monday"
          weather={IconsName.Cloudy}
          minTemperture={10}
          maxTemperture={20}
        />
        <Item
          day="Tuesday"
          weather={IconsName.Sunny}
          minTemperture={10}
          maxTemperture={20}
        />
        <Item
          day="Wednesday"
          weather={IconsName["Light rain"]}
          minTemperture={10}
          maxTemperture={20}
        />
        <Item
          day="Thursday"
          weather={IconsName["Partly cloudy"]}
          minTemperture={10}
          maxTemperture={20}
        />
        <Item
          day="Friday"
          weather={IconsName["Partly cloudy"]}
          minTemperture={10}
          maxTemperture={20}
        />
        <Item
          day="Saturday"
          weather={IconsName["Heavy rain"]}
          minTemperture={10}
          maxTemperture={20}
        />
        <Item
          day="Sunday"
          weather={IconsName.Cloudy}
          minTemperture={10}
          maxTemperture={20}
        />
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
