import { Pressable, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";

import { useTheme } from "@/components/context/ThemeContext";
import ThemedText, { FontSize } from "@/components/common/text/ThemedText";

interface HeaderProps {
  city?: string;
}

const Header: React.FC<HeaderProps> = ({ city }) => {
  const { theme } = useTheme();
  const iconSize = 24;
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <EvilIcons name="location" size={iconSize} color={theme.colors.text} />
        <ThemedText size={FontSize.m}>{city}</ThemedText>
      </View>
      <Pressable>
        <Ionicons
          name="notifications-outline"
          size={iconSize}
          color={theme.colors.text}
        />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationContainer: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
