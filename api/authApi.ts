// userService.ts
import axios from "axios";

const BACK_URL = process.env.EXPO_PUBLIC_BACK_URL;

interface UserService {
  register: (email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  isEmailTaken: (email: string) => Promise<boolean>; // Define el tipo de la nueva función
}

// Implementación de las funciones
export const userService: UserService = {
  register: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${BACK_URL}/users/`, { email, password });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Error en el registro");
    }
  },
  
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${BACK_URL}/login`, { email, password });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Error en el login");
    }
  },
  
  isEmailTaken: async (email: string) => {
    try {
      const response = await axios.get(`${BACK_URL}/users/check-email`, {
        params: { email },
      });
      return response.data.isTaken;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Error al verificar el correo");
    }
  },
};

export default userService;
