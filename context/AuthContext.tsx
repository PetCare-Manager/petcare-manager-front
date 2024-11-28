import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "./../api/axiosInstance";
import authService from "@/services/authService";
import { saveToken, getToken, removeToken } from "@/services/storageService";

interface AuthContextProps {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [ isAuthenticated, setIsAuthenticated ] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const storedToken = await getToken();
        if (storedToken) {
          updateToken(storedToken);
        }
      } catch (error) {
        console.error("Error loading session", error);
      }
    })();
  }, []);

  const updateToken = (jwtToken: string | null) => {
    setToken(jwtToken);
    axiosInstance.defaults.headers.common["Authorization"] = jwtToken
      ? `Bearer ${jwtToken}`
      : undefined;
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login(email, password);
      console.log("AuthContext*******", response);
      const jwtToken = response?.token;

      if (!jwtToken) throw new Error("Token is missing");

      await saveToken(jwtToken);
      updateToken(jwtToken);
      setIsAuthenticated(true);
    } catch (error: any) {
      console.error("Login failed:", error.message || error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await removeToken();
      updateToken(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, login, logout, isAuthenticated: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
