import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:8080";
const API_KEY = process.env.EXPO_PUBLIC_API_KEY || "";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = async <T>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T | null> => {
    setLoading(true);
    setError(null);

    const separator = endpoint.includes("?") ? "&" : "?";
    const url = `${API_BASE_URL}${endpoint}${separator}key=${API_KEY}`;

    try {
      const response = await axios({
        method,
        url,
        data,
        ...config,
      });
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.message || "Error in request");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const get = <T>(endpoint: string, config?: AxiosRequestConfig) =>
    request<T>("GET", endpoint, null, config);

  const post = <T>(endpoint: string, data?: any, config?: AxiosRequestConfig) =>
    request<T>("POST", endpoint, data, config);

  const put = <T>(endpoint: string, data?: any, config?: AxiosRequestConfig) =>
    request<T>("PUT", endpoint, data, config);

  const del = <T>(endpoint: string, config?: AxiosRequestConfig) =>
    request<T>("DELETE", endpoint, null, config);

  return { get, post, put, del, loading, error };
};

export default useApi;
