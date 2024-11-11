// src/services/authService.ts
import * as SecureStore from 'expo-secure-store';
import { loginUser } from '../api/authApi';
import { handleGenericError } from '../utils/errorHandler';

export const login = async (email: string, password: string) => {
  try {
    const { token, user } = await loginUser(email, password);
    await SecureStore.setItemAsync('token', token);
    await SecureStore.setItemAsync('user', JSON.stringify(user));
    return user;
  } catch (error) {
    handleGenericError('Error al iniciar sesión. Verifica tus credenciales.');
    throw error;
  }
};

export const logout = async () => {
  try {
    await SecureStore.deleteItemAsync('token');
    await SecureStore.deleteItemAsync('user');
  } catch (error) {
    handleGenericError('Error al cerrar sesión. Intenta de nuevo.');
    throw error;
  }
};
