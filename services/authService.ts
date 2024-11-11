import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser } from '../api/authApi';
import { handleGenericError } from '../utils/errorHandler';

export const login = async (email: string, password: string) => {
  try {
    // Realizar login y obtener el token y usuario
    const { token, user } = await loginUser(email, password);

    // Almacenar el token y usuario en AsyncStorage
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('user', JSON.stringify(user));

    return user;
  } catch (error) {
    handleGenericError('Error al iniciar sesión. Verifica tus credenciales.');
    throw error;
  }
};

export const logout = async () => {
  try {
    // Eliminar el token y usuario de AsyncStorage
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
  } catch (error) {
    handleGenericError('Error al cerrar sesión. Intenta de nuevo.');
    throw error;
  }
};
