// src/context/AuthContext.tsx
import React, { createContext, useState, ReactNode, useContext } from "react";
import {
  login as loginService,
  logout as logoutService,
} from "../services/authService";
import { User } from "@/types/User";
import { registerUser } from "@/api/authApi";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const register = async (email: string, password: string) => {
    try {
      const data = await registerUser(email, password);
      setUser(data.user);
    } catch (error) {
      console.error("Register error:", error);
    }
  };

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
    <AuthContext.Provider
      value={{ user, isAuthenticated, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acceder al contexto de autenticación
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};
