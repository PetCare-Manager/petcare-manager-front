import axiosInstance from "@/api/axiosInstance";
import { BackendError, handleBackendError } from "./../utils/errorHandler"; // Importamos la clase y función de manejo de errores
interface LoginResponse {
  token?: string;
  error: string;
  statusCode: number;
}
//para recuperación de contraseña
interface PasswordResetResponse {
  success: boolean;
  message: string;
  statusCode: number;
}
const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post("/auth/login", {
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
      // Si el error es de tipo `BackendError`,muestra información relevante
      console.error(
        "Backend Error:",
        error.message,
        "Status:",
        error.statusCode
      );
      throw error; // Relanzamos el error para que el componente lo maneje
    }

    // Si no es un BackendError, retornamos un mensaje genérico
    console.error("Unknown error occurred during registration:", error);
    throw new Error(
      "Ocurrió un error desconocido. Por favor, inténtalo más tarde."
    );
  }
};
//funcion para correo de recuperación de contraseña
const sendPasswordResetEmail = async (
  email: string
): Promise<PasswordResetResponse> => {
  try {
    const response = await axiosInstance.post("/auth/password", {
      email,
    });

    console.log("Respuesta del servidor:", response.data);

    return {
      success: true,
      message: response.data.message || "Se ha enviado un correo de recuperación",
      statusCode: response.status
    };
  }catch (error: any) {
    //manejo de  errores del back
    const backendError = handleBackendError(error);
    //si es un backenError, retrna el emnsaje y el codigo
    if(backendError instanceof BackendError) {
      console.error(
        "Backend Error: ",
        backendError.message,
        "Status: ",
        backendError.statusCode
      );
      throw backendError; //mandameos erro para que el comp lo maneje
    }
  // si no es backlenerror , mand amensaje generico
    console.error("Unknow error curred during password reset request: ", error);
    throw new Error(
      "Ocurrio un error al solicitar la recuperación de la contraseña. Por favor, intentelo mas tarde"
    );
  }
}; 


export default {login, sendPasswordResetEmail}