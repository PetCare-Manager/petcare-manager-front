import axiosInstance from "@/api/axiosInstance";
import { BackendError, handleBackendError } from "./../utils/errorHandler"; // Importamos la clase y función de manejo de errores
interface LoginResponse {
  token?: string;
  error: string;
  statusCode: number;
}
const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const endpoint = "/auth/login"; // El endpoint relativo que estás usando

  // --- INICIO DE MODIFICACIÓN PARA LOGGING ---
  console.log("--- Login Request Details ---");
  console.log("Axios Instance BaseURL:", axiosInstance.defaults.baseURL);
  console.log("Request Endpoint:", endpoint);

  // Construir y loguear la URL completa esperada
  // Esto asume que baseURL NO termina en '/' y endpoint SÍ empieza con '/'
  // O que baseURL SÍ termina en '/' y endpoint NO empieza con '/'
  // Se necesita un manejo cuidadoso de las barras para evitar '//'
  let fullRequestUrl = "";
  if (axiosInstance.defaults.baseURL) {
    const base = axiosInstance.defaults.baseURL.endsWith('/')
      ? axiosInstance.defaults.baseURL.slice(0, -1)
      : axiosInstance.defaults.baseURL;
    const path = endpoint.startsWith('/') ? endpoint : '/' + endpoint;
    fullRequestUrl = base + path;
  } else {
    fullRequestUrl = endpoint; // Si no hay baseURL, el endpoint es la URL completa (improbable con una instancia)
  }
  console.log("Full Expected URL:", fullRequestUrl);
  console.log("Request Payload:", { email, password }); // Loguear el payload
  console.log("-----------------------------");
  // --- FIN DE MODIFICACIÓN PARA LOGGING ---

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
    console.error("Unknown error occurred during registration:", error);
    throw new Error(
      "Ocurrió un error desconocido. Por favor, inténtalo más tarde."
    );
  }
};

export default { login };
