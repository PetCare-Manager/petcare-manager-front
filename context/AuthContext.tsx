// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
  login as loginService,
  logout as logoutService,
} from "../services/authService";
import * as SecureStore from "expo-secure-store";
import { handleGenericError } from "../utils/errorHandler";
import { User } from "@/types/User";

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loadSession = async () => {
      try {
        const storedUser = await SecureStore.getItemAsync("user");
        const token = await SecureStore.getItemAsync("token");
        if (storedUser && token) {
          const parsedUser: User = JSON.parse(storedUser);
          setUser(parsedUser);
          setIsAuthenticated(true);
        }
      } catch (error) {
        handleGenericError("Error al cargar la sesión.");
      }
    };
    loadSession();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const userData = await loginService(email, password);
      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    try {
      await logoutService();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
