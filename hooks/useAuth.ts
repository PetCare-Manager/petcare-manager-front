import { useState, useEffect } from 'react';
import { getToken, removeToken } from '../utils/storage';
import api from '../utils/axiosInstance';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getToken();
      if (token) {
        setIsAuthenticated(true);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const logout = async () => {
    await removeToken();
    setIsAuthenticated(false);
  };

  return { isAuthenticated, logout };
};
