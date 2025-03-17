import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import React from "react";
import { useTheme } from "@/components/context/ThemeContext";

interface ButtonProps extends PressableProps {
  type?: "primary" | "white" | "ghost";
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  type = "white",
  onPress,
  ...props
}) => {
  const { theme } = useTheme();

  const colors = {
    background: {
      primary: theme.colors.primary,
      white: "white",
      ghost: "transparent",
    },
    text: {
      primary: theme.colors.text,
      white: theme.colors.terciary,
      ghost: theme.colors.text,
    },
  };

  return (
    <Pressable
      {...props}
      style={[styles.button, { backgroundColor: colors.background[type] }]}
      onPress={onPress}
    >
      {typeof children === "string" || typeof children === "number" ? (
        <Text
          style={[
            styles.text,
            {
              color: colors.text[type],
              textDecorationLine: type === "ghost" ? "underline" : "none",
            },
          ]}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
  },
});
