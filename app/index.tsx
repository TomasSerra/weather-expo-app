import { useTheme } from "@/components/context/ThemeContext";
import { IconSize, IconsName } from "@/components/ui/weather/icons";
import WeatherIcon from "@/components/ui/weather/WeatherIcon";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "@/components/ui/header/Header";
import Temperature from "@/components/ui/temperature/Temperature";
import TodayStats from "@/components/ui/today-stats/TodayStats";
import TodayClimate from "@/components/ui/today-climate/TodayClimate";
import NextForecast from "@/components/ui/next-forecast/NextForecast";
import { useEffect, useState } from "react";
import useWeatherApi from "@/hooks/useWeatherApi";
import * as Location from "expo-location";
import { WeatherData } from "@/hooks/weather.type";
import GradientBackground from "@/components/common/background/GradientBackground";

export default function Index() {
  const { theme, changeTheme } = useTheme();
  const { getForecastWeatherData } = useWeatherApi();
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [hour, setHour] = useState<string>("");

  useEffect(() => {
    fetchHour();
    const interval = setInterval(fetchHour, 10000);
    getLocation().then((location) => {
      const lat = location?.coords.latitude;
      const lon = location?.coords.longitude;
      getForecastWeatherData(`${lat},${lon}`, 7).then((data) => {
        setWeatherData(data);
        changeTheme(data?.current.is_day ? "day" : "night");
      });
    });
    return () => clearInterval(interval);
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    return await Location.getCurrentPositionAsync({});
  };

  const fetchHour = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const formatedHour = date.toLocaleTimeString([], options);
    setHour(formatedHour);
  };

  return (
    <GradientBackground style={styles.gradient}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 25,
        }}
      >
        <Header city={weatherData?.location.region} />
        <View style={styles.temperatureContainer}>
          <WeatherIcon
            name={
              IconsName[
                weatherData?.current.condition.text?.trim() as keyof typeof IconsName
              ]
            }
            size={IconSize.large}
          />
          <Temperature
            temperature={weatherData?.current.temp_c}
            maxTemperature={weatherData?.forecast.forecastday[0].day.maxtemp_c}
            minTemperature={weatherData?.forecast.forecastday[0].day.mintemp_c}
          />
        </View>
        <TodayStats
          rainProbability={
            weatherData?.forecast.forecastday[0].day.daily_chance_of_rain
          }
          windSpeed={weatherData?.forecast.forecastday[0].day.maxwind_kph}
          sunsetHour={weatherData?.forecast.forecastday[0].astro.sunset}
        />
        <TodayClimate hour={hour} data={weatherData?.forecast.forecastday[0]} />
        <NextForecast data={weatherData?.forecast.forecastday} />
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflowX: "hidden",
  },
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  temperatureContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
  },
});
