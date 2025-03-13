import { useTheme } from "@/components/context/ThemeContext";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

interface ThemedTextProps extends TextProps {
  size?: FontSize;
  style?: StyleProp<TextStyle>;
}

export enum FontSize {
  s = 14,
  m = 16,
  l = 18,
  xl = 24,
  xxl = 64,
}

const ThemedText: React.FC<ThemedTextProps> = ({
  style,
  size = FontSize.m,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <Text
      style={[
        {
          color: theme.colors.text,
          fontSize: size,
          fontFamily: "InterRegular",
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedText;
