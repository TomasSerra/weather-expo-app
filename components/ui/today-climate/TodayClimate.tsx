import { StyleSheet, View } from "react-native";
import React from "react";
import Box from "@/components/common/box/Box";
import ThemedText from "@/components/common/text/ThemedText";
import Chip from "./Chip";
import { IconsName } from "../weather/icons";

interface TodayClimateProps {
  date: string;
}

const TodayClimate: React.FC<TodayClimateProps> = ({ date }) => {
  return (
    <Box style={{ gap: 20 }}>
      <View style={styles.header}>
        <ThemedText>Today</ThemedText>
        <ThemedText>{date}</ThemedText>
      </View>
      <View style={styles.container}>
        <Chip temperature={20} weather={IconsName["cloudy"]} hour="12:00" />
        <Chip temperature={20} weather={IconsName["cloudy"]} hour="12:00" />
        <Chip temperature={20} weather={IconsName["cloudy"]} hour="12:00" />
        <Chip temperature={20} weather={IconsName["cloudy"]} hour="12:00" />
        <Chip temperature={20} weather={IconsName["cloudy"]} hour="12:00" />
        <Chip temperature={20} weather={IconsName["cloudy"]} hour="12:00" />
        <Chip temperature={20} weather={IconsName["cloudy"]} hour="12:00" />
        <Chip temperature={20} weather={IconsName["cloudy"]} hour="12:00" />
        <Chip temperature={20} weather={IconsName["cloudy"]} hour="12:00" />
      </View>
    </Box>
  );
};

export default TodayClimate;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 30,
    overflowX: "auto",
    width: "100%",
  },
});
