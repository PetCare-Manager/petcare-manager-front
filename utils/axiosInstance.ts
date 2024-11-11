import axios from "axios";
import { API_URL } from '@env';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { handleApiError } from "./errorHandler";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para añadir el token a las peticiones
api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token && config.url !== "/register") {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    handleApiError(error);
    return Promise.reject(error);
  }
  return config;
});

// Interceptor de respuesta para manejar errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    handleApiError(error);
    return Promise.reject(error);
  }
);

export default api;
