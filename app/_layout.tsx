import { ThemeProvider } from "@/components/context/ThemeContext";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
