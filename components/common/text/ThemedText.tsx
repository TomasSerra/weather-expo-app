import { useTheme } from "@/components/context/ThemeContext";
import { Text, TextProps } from "react-native";

interface ThemedTextProps extends TextProps {
  size?: FontSize;
  style?: object;
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
