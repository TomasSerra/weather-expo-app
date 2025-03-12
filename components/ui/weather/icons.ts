export enum IconsName {
  "sunny" = "sunny",
  "cloudy" = "cloudy",
  "partly cloudy" = "partly cloudy",
  "light rain" = "light rain",
  "heavy rain" = "heavy rain",
}

export enum IconSize {
  "small",
  "medium",
  "large",
}

export const icons: Record<string, Record<IconsName, { uri: string }>> = {
  day: {
    [IconsName["sunny"]]: require("@/assets/icons/weather/sunny.png"),
    [IconsName["cloudy"]]: require("@/assets/icons/weather/cloudy.png"),
    [IconsName[
      "partly cloudy"
    ]]: require("@/assets/icons/weather/partly_cloudy.png"),
    [IconsName["light rain"]]: require("@/assets/icons/weather/rainy.png"),
    [IconsName["heavy rain"]]: require("@/assets/icons/weather/rain_storm.png"),
  },
  night: {
    [IconsName["sunny"]]: require("@/assets/icons/weather/moon.png"),
    [IconsName["cloudy"]]: require("@/assets/icons/weather/cloudy.png"),
    [IconsName[
      "partly cloudy"
    ]]: require("@/assets/icons/weather/partly_cloudy.png"),
    [IconsName["light rain"]]: require("@/assets/icons/weather/rainy.png"),
    [IconsName["heavy rain"]]: require("@/assets/icons/weather/rain_storm.png"),
  },
};

export const sizes: Record<IconSize, number> = {
  [IconSize["small"]]: 40,
  [IconSize["medium"]]: 80,
  [IconSize["large"]]: 120,
};
