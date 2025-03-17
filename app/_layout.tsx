import { ThemeProvider } from "@/components/context/ThemeContext";
import { Stack, useRouter } from "expo-router";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";

export default function RootLayout() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/login");
      }
    }
  }, [user, loading]);

  const [fontsLoaded] = useFonts({
    InterRegular: Inter_400Regular,
    InterBold: Inter_700Bold,
  });

  if (!fontsLoaded || loading) return null;

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="register" options={{ headerShown: false }} />
          </>
        ) : (
          <Stack.Screen name="index" options={{ headerShown: false }} />
        )}
      </Stack>
    </ThemeProvider>
  );
}
