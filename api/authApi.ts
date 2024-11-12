import axios from "axios";

const backendUrl = "http://localhost:3000"; // URL base de tu backend

export const registerUser = async (email: string, password: string) => {
  try {
    // Realiza una petición POST al backend con los datos del usuario
    const response = await axios.post(`${backendUrl}/register`, {
      email,
      password,
    });
    // Devuelve los datos del nuevo usuario
    return response.data;
  } catch (error: any) {
    /// Lanza el error para que sea manejado en el componente que llama a esta función
    throw new Error(error.response?.data?.message || "Error en el registro");
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${backendUrl}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error en el login");
  }
};
