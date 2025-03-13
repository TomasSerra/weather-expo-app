import { useCallback } from "react";
import useApi from "./useApi";
import { WeatherData } from "./weather.type";

const useWeatherApi = () => {
  const { get, loading, error } = useApi();

  const getForecastWeatherData = useCallback(
    async (city: string, days: number): Promise<WeatherData | null> => {
      return await get<WeatherData>(
        `/forecast.json?q=${city}&days=${days}&aqi=no&alerts=no`
      );
    },
    [get]
  );

  return { getForecastWeatherData, loading, error };
};

export default useWeatherApi;
