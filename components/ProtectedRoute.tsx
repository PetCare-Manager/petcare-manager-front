import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/types/types";
import { useAuth } from "@/context/AuthContext";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { token } = useAuth();
  const navigation = useNavigation<NavigationProps<"Login">>();
  const [redirecting, setRedirecting] = useState(false); // Estado para evitar bucles

  useEffect(() => {
    if (!token && !redirecting) {
      setRedirecting(true); // Marca que estamos redirigiendo
      navigation.navigate("Login"); // Redirige al usuario a la pantalla de Login
    }
  }, [token, redirecting, navigation]);

  if (!token) {
    return null; // Mientras se redirige, no renderiza nada
  }

  return <>{children}</>;
};
