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
    [IconsName["sunny"]]: require("@/assets/icons/weather/day/sunny.png"),
    [IconsName["cloudy"]]: require("@/assets/icons/weather/day/cloudy.png"),
    [IconsName[
      "partly cloudy"
    ]]: require("@/assets/icons/weather/day/partly_cloudy.png"),
    [IconsName["light rain"]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName[
      "heavy rain"
    ]]: require("@/assets/icons/weather/day/rain_storm.png"),
  },
  night: {
    [IconsName["sunny"]]: require("@/assets/icons/weather/night/moon.png"),
    [IconsName["cloudy"]]: require("@/assets/icons/weather/night/cloudy.png"),
    [IconsName[
      "partly cloudy"
    ]]: require("@/assets/icons/weather/night/partly_cloudy.png"),
    [IconsName[
      "light rain"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
    [IconsName[
      "heavy rain"
    ]]: require("@/assets/icons/weather/night/rain_storm.png"),
  },
};

export const sizes: Record<IconSize, number> = {
  [IconSize["small"]]: 35,
  [IconSize["medium"]]: 40,
  [IconSize["large"]]: 120,
};
