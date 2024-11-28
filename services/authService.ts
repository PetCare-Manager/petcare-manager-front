import axiosInstance from "@/api/axiosInstance";
import { BackendError, handleBackendError } from "./../utils/errorHandler"; // Importamos la clase y función de manejo de errores
interface LoginResponse {
  token?: string;
  error: string;
  statusCode: number;
}
const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post("/login", {
      email,
      password,
    });
    console.log("AuthService", response.data);
    if (!response.data?.token) {
      throw new Error("Token not found in the response");
    }
    return response.data;
  } catch (error: any) {
    // Manejamos los errores con la clase BackendError
    const backendError = handleBackendError(error);

    // Si se trata de un BackendError, retornamos el mensaje y el código
    if (backendError instanceof BackendError) {
      return {
        error: backendError.message,
        statusCode: backendError.statusCode,
      };
    }

    // Si no es un BackendError, retornamos un mensaje genérico
    return {
      error: "Ocurrió un error desconocido. Por favor, inténtalo más tarde.",
      statusCode: 500, // Código de estado predeterminado
    };
  }
};

export default { login };
