import { View, TextInput, TextInputProps, StyleSheet } from "react-native";
import React from "react";
import ThemedText from "../text/ThemedText";

interface CustomInputProps extends TextInputProps {
  label: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, ...props }) => {
  return (
    <View>
      <ThemedText>{label}</ThemedText>
      <TextInput
        style={styles.input}
        {...props}
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#ffffff33",
    color: "white",
    marginTop: 5,
    outlineColor: "transparent",
    height: 45,
  },
});
