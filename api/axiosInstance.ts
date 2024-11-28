// src/api/axiosInstance.ts

import axios from "axios";
import { handleBackendError } from "../utils/errorHandler";

const axiosInstance = axios.create({
  baseURL: process.env.BACK_URL, // Asegúrate de tener la URL en tu .env
  headers: {
    "Content-Type": "application/json",
  },
});
console.log("AxiosIncatnce")
// Interceptor de respuestas para manejar errores globalmente
axiosInstance.interceptors.response.use(
  (response) => response, // Si la respuesta es exitosa, la pasamos al siguiente paso.
  (error) => {
    console.log(error)
    // Aquí manejamos los errores con el errorHandler
    return Promise.reject(handleBackendError(error)); // Llama al handler y lo pasa a donde se necesite
  }
);

export default axiosInstance;
