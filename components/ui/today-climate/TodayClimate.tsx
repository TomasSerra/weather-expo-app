import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Box from "@/components/common/box/Box";
import ThemedText, { FontSize } from "@/components/common/text/ThemedText";
import Chip from "./Chip";
import { IconsName } from "../weather/icons";

interface TodayClimateProps {
  date: string;
}

const TodayClimate: React.FC<TodayClimateProps> = ({ date }) => {
  return (
    <Box style={{ gap: 20 }}>
      <View style={styles.header}>
        <ThemedText size={FontSize.l}>Today</ThemedText>
        <ThemedText size={FontSize.l}>{date}</ThemedText>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <Chip temperature={20} weather={IconsName["cloudy"]} hour="12:00" />
          <Chip temperature={22} weather={IconsName["cloudy"]} hour="13:00" />
          <Chip
            temperature={22}
            weather={IconsName["partly cloudy"]}
            hour="14:00"
            now
          />
          <Chip temperature={24} weather={IconsName["sunny"]} hour="15:00" />
          <Chip temperature={23} weather={IconsName["sunny"]} hour="16:00" />
          <Chip
            temperature={23}
            weather={IconsName["partly cloudy"]}
            hour="17:00"
          />
          <Chip
            temperature={21}
            weather={IconsName["partly cloudy"]}
            hour="18:00"
          />
          <Chip temperature={19} weather={IconsName["cloudy"]} hour="19:00" />
          <Chip temperature={18} weather={IconsName["cloudy"]} hour="20:00" />
        </ScrollView>
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
  scrollContainer: {
    width: "100%",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
