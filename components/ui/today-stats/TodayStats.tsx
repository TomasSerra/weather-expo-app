import React from "react";
import Box from "../../common/box/Box";
import Chip, { ChipType, ChipUnit } from "./Chip";
import { StyleSheet } from "react-native";

interface TodayStatsProps {
  rainProbability?: number;
  windSpeed?: number;
  sunsetHour?: string;
}

const TodayStats: React.FC<TodayStatsProps> = ({
  rainProbability = 0,
  windSpeed = 0,
  sunsetHour = 0,
}) => {
  return (
    <Box style={styles.container}>
      <Chip
        type={ChipType.rain}
        value={rainProbability}
        unit={ChipUnit.percentage}
      />
      <Chip type={ChipType.wind} value={windSpeed} unit={ChipUnit.kmh} />
      <Chip type={ChipType.sunset} value={sunsetHour} />
    </Box>
  );
};

export default TodayStats;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
