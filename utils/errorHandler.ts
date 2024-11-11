// src/utils/errorHandler.ts
import { Alert } from 'react-native';

export const handleApiError = (error: any) => {
  const errorMessage =
    error.response?.data?.message || 'Ocurrió un error inesperado. Inténtalo de nuevo más tarde.';
  Alert.alert('Error', errorMessage);
};

export const handleGenericError = (message = 'Ocurrió un error inesperado. Inténtalo de nuevo más tarde.') => {
  Alert.alert('Error', message);
};
