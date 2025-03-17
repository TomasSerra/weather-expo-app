export enum IconsName {
  "Sunny" = "sunny",
  "Cloudy" = "cloudy",
  "Partly cloudy" = "partly cloudy",
  "Light rain" = "light rain",
  "Heavy rain" = "heavy rain",
  "Clear" = "clear",
  "Heavy snow" = "heavy snow",
  "Light snow" = "light snow",
  "Overcast" = "overcast",
  "Mist" = "mist",
  "Patchy rain possible" = "patchy rain possible",
  "Patchy snow possible" = "patchy snow possible",
  "Patchy sleet possible" = "patchy sleet possible",
  "Patchy freezing drizzle possible" = "patchy freezing drizzle possible",
  "Thundery outbreaks possible" = "thundery outbreaks possible",
  "Blowing snow" = "blowing snow",
  "Blizzard" = "blizzard",
  "Fog" = "fog",
  "Freezing fog" = "freezing fog",
  "Patchy light drizzle" = "patchy light drizzle",
  "Light drizzle" = "light drizzle",
  "Freezing drizzle" = "freezing drizzle",
  "Heavy freezing drizzle" = "heavy freezing drizzle",
  "Patchy light rain" = "patchy light rain",
  "Moderate rain at times" = "moderate rain at times",
  "Moderate rain" = "moderate rain",
  "Heavy rain at times" = "heavy rain at times",
  "Light freezing rain" = "light freezing rain",
  "Moderate or heavy freezing rain" = "moderate or heavy freezing rain",
  "Light sleet" = "light sleet",
  "Moderate or heavy sleet" = "moderate or heavy sleet",
  "Patchy light snow" = "patchy light snow",
  "Patchy moderate snow" = "patchy moderate snow",
  "Moderate snow" = "moderate snow",
  "Patchy heavy snow" = "patchy heavy snow",
  "Ice pellets" = "ice pellets",
  "Light rain shower" = "light rain shower",
  "Moderate or heavy rain shower" = "moderate or heavy rain shower",
  "Torrential rain shower" = "torrential rain shower",
  "Light sleet showers" = "light sleet showers",
  "Moderate or heavy sleet showers" = "moderate or heavy sleet showers",
  "Light snow showers" = "light snow showers",
  "Moderate or heavy snow showers" = "moderate or heavy snow showers",
  "Light showers of ice pellets" = "light showers of ice pellets",
  "Moderate or heavy showers of ice pellets" = "moderate or heavy showers of ice pellets",
  "Patchy light rain with thunder" = "patchy light rain with thunder",
  "Moderate or heavy rain with thunder" = "moderate or heavy rain with thunder",
  "Patchy light snow with thunder" = "patchy light snow with thunder",
  "Moderate or heavy snow with thunder" = "moderate or heavy snow with thunder",
  "Patchy rain nearby" = "patchy rain nearby",
}

export enum IconSize {
  "small",
  "medium",
  "large",
}

export const icons: Record<string, Record<IconsName, { uri: string }>> = {
  day: {
    [IconsName["Sunny"]]: require("@/assets/icons/weather/day/sunny.png"),
    [IconsName["Clear"]]: require("@/assets/icons/weather/day/sunny.png"),
    [IconsName["Cloudy"]]: require("@/assets/icons/weather/day/cloudy.png"),
    [IconsName[
      "Partly cloudy"
    ]]: require("@/assets/icons/weather/day/partly_cloudy.png"),
    [IconsName["Light rain"]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName[
      "Heavy rain"
    ]]: require("@/assets/icons/weather/day/rain_storm.png"),
    [IconsName["Heavy snow"]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName["Light snow"]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName["Overcast"]]: require("@/assets/icons/weather/day/cloudy.png"),
    [IconsName["Mist"]]: require("@/assets/icons/weather/day/cloudy.png"),
    [IconsName["Fog"]]: require("@/assets/icons/weather/day/cloudy.png"),
    [IconsName["Blizzard"]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Thundery outbreaks possible"
    ]]: require("@/assets/icons/weather/day/rain_storm.png"),
    [IconsName["Blowing snow"]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Freezing fog"
    ]]: require("@/assets/icons/weather/day/cloudy.png"),
    [IconsName[
      "Patchy light drizzle"
    ]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName[
      "Freezing drizzle"
    ]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName[
      "Patchy rain possible"
    ]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName[
      "Patchy snow possible"
    ]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Patchy sleet possible"
    ]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Patchy freezing drizzle possible"
    ]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Light drizzle"
    ]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName[
      "Heavy freezing drizzle"
    ]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName[
      "Patchy light rain"
    ]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName[
      "Moderate rain at times"
    ]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName[
      "Moderate rain"
    ]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName[
      "Heavy rain at times"
    ]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName[
      "Light freezing rain"
    ]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName[
      "Moderate or heavy freezing rain"
    ]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName["Light sleet"]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Moderate or heavy sleet"
    ]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Patchy light snow"
    ]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Patchy moderate snow"
    ]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Moderate snow"
    ]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Patchy heavy snow"
    ]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName["Ice pellets"]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Light rain shower"
    ]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName[
      "Moderate or heavy rain shower"
    ]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName[
      "Torrential rain shower"
    ]]: require("@/assets/icons/weather/day/rainy.png"),
    [IconsName[
      "Light sleet showers"
    ]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Moderate or heavy sleet showers"
    ]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Light snow showers"
    ]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Moderate or heavy snow showers"
    ]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Light showers of ice pellets"
    ]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Moderate or heavy showers of ice pellets"
    ]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Patchy light rain with thunder"
    ]]: require("@/assets/icons/weather/day/rain_storm.png"),
    [IconsName[
      "Moderate or heavy rain with thunder"
    ]]: require("@/assets/icons/weather/day/rain_storm.png"),
    [IconsName[
      "Patchy light snow with thunder"
    ]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Moderate or heavy snow with thunder"
    ]]: require("@/assets/icons/weather/day/snow.png"),
    [IconsName[
      "Patchy rain nearby"
    ]]: require("@/assets/icons/weather/day/rainy.png"),
  },
  night: {
    [IconsName["Clear"]]: require("@/assets/icons/weather/night/moon.png"),
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
    [IconsName["Heavy snow"]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName["Light snow"]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName["Overcast"]]: require("@/assets/icons/weather/night/cloudy.png"),
    [IconsName[
      "Thundery outbreaks possible"
    ]]: require("@/assets/icons/weather/night/rain_storm.png"),
    [IconsName[
      "Blowing snow"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Freezing fog"
    ]]: require("@/assets/icons/weather/night/cloudy.png"),
    [IconsName[
      "Patchy light drizzle"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
    [IconsName[
      "Freezing drizzle"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
    [IconsName["Mist"]]: require("@/assets/icons/weather/night/cloudy.png"),
    [IconsName["Fog"]]: require("@/assets/icons/weather/night/cloudy.png"),
    [IconsName["Blizzard"]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Patchy rain possible"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
    [IconsName[
      "Patchy snow possible"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Patchy sleet possible"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Patchy freezing drizzle possible"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Light drizzle"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
    [IconsName[
      "Heavy freezing drizzle"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
    [IconsName[
      "Patchy light rain"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
    [IconsName[
      "Moderate rain at times"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
    [IconsName[
      "Moderate rain"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
    [IconsName[
      "Heavy rain at times"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
    [IconsName[
      "Light freezing rain"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
    [IconsName[
      "Moderate or heavy freezing rain"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
    [IconsName[
      "Light sleet"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Moderate or heavy sleet"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Patchy light snow"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Patchy moderate snow"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Moderate snow"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Patchy heavy snow"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Ice pellets"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Light rain shower"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
    [IconsName[
      "Moderate or heavy rain shower"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
    [IconsName[
      "Torrential rain shower"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
    [IconsName[
      "Light sleet showers"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Moderate or heavy sleet showers"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Light snow showers"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Moderate or heavy snow showers"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Light showers of ice pellets"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Moderate or heavy showers of ice pellets"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Patchy light rain with thunder"
    ]]: require("@/assets/icons/weather/night/rain_storm.png"),
    [IconsName[
      "Moderate or heavy rain with thunder"
    ]]: require("@/assets/icons/weather/night/rain_storm.png"),
    [IconsName[
      "Patchy light snow with thunder"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Moderate or heavy snow with thunder"
    ]]: require("@/assets/icons/weather/night/snow.png"),
    [IconsName[
      "Patchy rain nearby"
    ]]: require("@/assets/icons/weather/night/rainy.png"),
  },
};

export const sizes: Record<IconSize, number> = {
  [IconSize["small"]]: 35,
  [IconSize["medium"]]: 40,
  [IconSize["large"]]: 120,
};
