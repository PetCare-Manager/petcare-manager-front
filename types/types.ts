// src/types/navigation.ts

import { bgColor } from "@/constants/Colors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define el tipo de las rutas del stack
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  EmailRegister: undefined;
  NotRememberPass: undefined;
  UserProfile: undefined;
  PetForm: undefined;
  ProtectedRoute: undefined;
};

// Define el tipo de navegación para una ruta específica
export type NavigationProps<RouteName extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, RouteName>;


  export type Pet = {
		id: number;
		user_id: number;
		name: string;
		breed: string;
		gender: 'M' | 'F';
		birth: string;
		imageUrl?: string;
		bg_color: bgColor;
  };