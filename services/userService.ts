import { Email } from "@/assets/svg/email.svg";
import axiosInstance from "@/api/axiosInstance";
import { BackendError, handleBackendError } from "./../utils/errorHandler"; // Importamos la clase y función de manejo de errores

//creamos la interface
interface RegisterUser {
  email: string;
  password: string;
}

const register = async (email: string, password: string): Promise<any> => {
  try {
    const response = await axiosInstance.post<RegisterUser>("/users", {
      email,
      password,
    });
    console.log("Register", response.data);
    return response.data;
  } catch (error: any) {
    const backendError = handleBackendError(error);
    if (backendError instanceof BackendError) {
      // Si el error es de tipo `BackendError`, mostramos información relevante
      console.error(
        "Backend Error:",
        error.message,
        "Status:",
        error.statusCode
      );
      throw error; // Relanzamos el error para que el componente lo maneje
    }

    // Si no es un BackendError, retornamos un mensaje genérico
    // Si es un error desconocido, lo lanzamos como genérico
    console.error("Unknown error occurred during registration:", error);
    throw new Error(
      "Ocurrió un error desconocido. Por favor, inténtalo más tarde."
    );
  }
};
export default { register };
