import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@/components/HomeScreen";
import { Login } from "@/components/Login";
import { Register } from "@/components/Register";

// Define el tipo para las rutas de navegación
type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Home() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: "Home Screen" }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerTitle: "Register" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTitle: "Login" }}
      />
    </Stack.Navigator>
  );
}
