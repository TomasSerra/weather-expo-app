import ThemedText, { FontSize } from "@/components/common/text/ThemedText";
import { StyleSheet, View } from "react-native";

interface TemperatureProps {
  temperature?: number;
  maxTemperature?: number;
  minTemperature?: number;
}

const Temperature = ({
  temperature,
  maxTemperature,
  minTemperature,
}: TemperatureProps) => {
  maxTemperature = Math.round(maxTemperature!) || 0;
  minTemperature = Math.round(minTemperature!) || 0;
  temperature = Math.round(temperature!) || 0;
  return (
    <View style={styles.container}>
      <ThemedText size={FontSize.xxl}>{temperature}°</ThemedText>
      <ThemedText size={FontSize.m}>Precipitations</ThemedText>
      <View style={styles.row}>
        <ThemedText size={FontSize.m}>Max.: {maxTemperature}°</ThemedText>
        <ThemedText size={FontSize.m}>Min.: {minTemperature}°</ThemedText>
      </View>
    </View>
  );
};

export default Temperature;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
});
