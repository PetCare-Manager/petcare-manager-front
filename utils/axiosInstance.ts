import axios from "axios";
import { API_URL } from "@env";
import { handleAxiosError } from "./errorHandler";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de respuesta para manejar errores
api.interceptors.request.use((request) => {
  console.log("Petición:", request);
  return request;
});

api.interceptors.response.use(
  (response) => {
    console.log("Respuesta:", response);
    return response;
  },
  (error) => {
    const customError = handleAxiosError(error);
    return Promise.reject(customError);
  }
);

export default api;
