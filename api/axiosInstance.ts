// src/api/axiosInstance.ts

import axios from "axios";
import { handleBackendError } from "../utils/errorHandler";
const BACK_URL = process.env.EXPO_PUBLIC_BACK_URL;


const axiosInstance = axios.create({
  baseURL: BACK_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
// Interceptor de respuestas para manejar errores globalmente
axiosInstance.interceptors.response.use(
  (response) => response, // Si la respuesta es exitosa, la pasamos al siguiente paso.
  (error) => {
    console.log("AxiosInstance", error)
    // Aquí manejamos los errores con el errorHandler
    const backendError = handleBackendError(error);
    return Promise.reject(backendError); // Llama al handler y lo pasa a donde se necesite
  }
);

export default axiosInstance;

//Añadir comprobación de backuRL no es undefined para que no te lleve a login sin tener back levantado