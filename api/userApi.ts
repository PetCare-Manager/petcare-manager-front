import api from "@/utils/axiosInstance";
import { handleApiError } from "@/utils/errorHandler";

export const registerUser = async (email: string, password: string) => {
  try {
    // Realiza una petición POST al backend con los datos del usuario
    const response = await api.post(`/register`, {
      email,
      password,
    });
    // Devuelve los datos del nuevo usuario
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
