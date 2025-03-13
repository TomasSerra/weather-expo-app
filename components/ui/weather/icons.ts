export enum IconsName {
  "Sunny" = "sunny",
  "Cloudy" = "cloudy",
  "Partly cloudy" = "partly cloudy",
  "Light rain" = "light rain",
  "Heavy rain" = "heavy rain",
}

export enum IconSize {
  "small",
  "medium",
  "large",
}

export const icons: Record<string, Record<IconsName, { uri: string }>> = {
  day: {
    [IconsName["Sunny"]]: require("@/assets/icons/weather/day/sunny.png"),
    [IconsName["Cloudy"]]: require("@/assets/icons/weather/day/cloudy.png"),
    [IconsName[
      "Partly cloudy"
    ]]: require("@/assets/icons/weather/day/partly_cloudy.png"),
    [IconsName["Light rain"]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName[
      "Heavy rain"
    ]]: require("@/assets/icons/weather/day/rain_storm.png"),
  },
  night: {
    [IconsName["Sunny"]]: require("@/assets/icons/weather/night/moon.png"),
    [IconsName["Cloudy"]]: require("@/assets/icons/weather/night/cloudy.png"),
    [IconsName[
      "Partly cloudy"
    ]]: require("@/assets/icons/weather/night/partly_cloudy.png"),
    [IconsName[
      "Light rain"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
    [IconsName[
      "Heavy rain"
    ]]: require("@/assets/icons/weather/night/rain_storm.png"),
  },
};

export const sizes: Record<IconSize, number> = {
  [IconSize["small"]]: 35,
  [IconSize["medium"]]: 40,
  [IconSize["large"]]: 120,
};
