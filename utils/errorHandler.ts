import { AxiosError } from "axios";

// Clase personalizada para errores del backend
export class BackendError extends Error {
  constructor(public message: string, public statusCode: number = 500) {
    super(message);
    this.name = "BackError";
  }
}

// Función para manejar errores del backend
export const handleBackendError = (error: unknown): BackendError => {
  if (error instanceof AxiosError) {
    // Si el error tiene respuesta del servidor
    if (error.response) {
      const status = error.response.status;
      const message =
        error.response.data?.message || "Error desconocido en el servidor.";
      return new BackendError(message, status);
    }

    // Si no hay respuesta del servidor (error de red)
    if (error.request) {
      return new BackendError(
        "No se pudo conectar con el servidor. Verifica tu conexión a internet.",
        503
      );
    }
  }

  // Error genérico o desconocido
  const message =
    error instanceof Error ? error.message : "Ocurrió un error desconocido.";
  return new BackendError(message);
};
