import { AxiosError } from 'axios';

interface CustomError {
  message: string;
  status: number;
  data?: any;
}
interface ApiErrorResponse {
  detail?: string;
  message?: string;
  [key: string]: any; // Para manejar otros posibles campos
}

export const handleAxiosError = (error: AxiosError): CustomError => {
  if (error.response) {
    // Errores de respuesta del servidor
    const { status, data } = error.response;
    const dataResponse = error.response?.data as ApiErrorResponse;
    const message = dataResponse.detail || dataResponse.message || 'Error desconocido en el servidor';
    return { message, status, data };
  } else if (error.request) {
    // Errores en la petición (el servidor no responde)
    return { message: 'No se recibió respuesta del servidor', status: 503 };
  } else {
    // Otros errores (e.g., configuración)
    return { message: error.message, status: 500 };
  }
};
