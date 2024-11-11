import api from "../utils/axiosInstance";
import { handleApiError } from "../utils/errorHandler";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Registrar usuario
export const registerUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/register", { email, password });

    // Devuelve el usuario registrado (o el token si lo envían en la respuesta)
    return response.data;
  } catch (error: any) {
    handleApiError(error);
    throw error;
  }
};

// Iniciar sesión
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/login", { email, password });
    // Guarda el token en SecureStore
    const token = response.data.token;
    if (token) {
      await AsyncStorage.getItem("token");
    }
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
