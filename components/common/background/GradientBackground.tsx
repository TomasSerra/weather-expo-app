import React from "react";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { useTheme } from "@/components/context/ThemeContext";

interface GradientBackgroundProps {
  style?: LinearGradientProps["style"];
  children: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  style,
}) => {
  const { theme } = useTheme();
  return (
    <LinearGradient
      colors={[...theme.bgGradient.colors] as [string, string, ...string[]]}
      start={theme.bgGradient.start}
      end={theme.bgGradient.end}
      style={style}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
