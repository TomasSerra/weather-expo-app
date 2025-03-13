import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Box from "@/components/common/box/Box";
import ThemedText, { FontSize } from "@/components/common/text/ThemedText";
import Chip from "./Chip";
import { IconsName } from "../weather/icons";
import { ForecastDay } from "@/hooks/weather.type";

interface TodayClimateProps {
  hour?: string;
  data?: ForecastDay;
}

const TodayClimate: React.FC<TodayClimateProps> = ({
  hour = "00:00",
  data,
}) => {
  const isNow = (itemTime: string) => {
    let numItemTime = new Date(itemTime).getHours();
    const numHour = parseInt(hour.split(":")[0]);
    return numItemTime >= numHour && numItemTime < numHour;
  };

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  const formatedDateHour = (date: string) => {
    const time = new Date(date);
    let hour = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12;
    return `${hour}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`;
  };

  const filteredData = data?.hour?.filter((item) => {
    const itemTime = new Date(item.time);
    const itemHour = itemTime.getHours();
    const itemMinute = itemTime.getMinutes();

    return (
      itemHour + 1 > currentHour ||
      (itemHour === currentHour && itemMinute >= currentMinute)
    );
  });

  return (
    <>
      {data && (
        <Box style={{ gap: 20 }}>
          <View style={styles.header}>
            <ThemedText size={FontSize.l}>Today</ThemedText>
            <ThemedText size={FontSize.l}>{hour}</ThemedText>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.container}
            >
              {filteredData?.map((item, index) => (
                <Chip
                  key={index}
                  temperature={Math.round(item.temp_c)}
                  weather={IconsName[item.condition.text]}
                  hour={formatedDateHour(item.time)}
                  now={isNow(item.time)}
                />
              ))}
            </ScrollView>
          </View>
        </Box>
      )}
    </>
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
