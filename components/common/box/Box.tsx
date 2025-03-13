import { useTheme } from "@/components/context/ThemeContext";
import { StyleProp, View, ViewStyle, DimensionValue } from "react-native";

interface BoxProps extends ViewStyle {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Box: React.FC<BoxProps> = ({
  children,
  width = "100%",
  height,
  style,
}) => {
  const { theme } = useTheme();
  return (
    <View
      style={[
        {
          backgroundColor: `${theme.colors.secondary}CC`,
          borderRadius: 20,
          padding: 14,
          alignItems: "center",
          flexDirection: "column",
          width,
          height,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Box;
