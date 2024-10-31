import React from "react";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Wrapper } from "@/components/Wrapper";
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

// Define los tipos de props para cada pantalla
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type RegisterProps = NativeStackScreenProps<RootStackParamList, 'Register'>;
type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Home() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        children={(props: HomeScreenProps) => (
          <Wrapper>
            <HomeScreen {...props} />
          </Wrapper>
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        children={(props: RegisterProps) => (
          <Wrapper>
            <Register {...props} />
          </Wrapper>
        )}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <Stack.Screen
        name="Login"
        children={(props: LoginProps) => (
          <Wrapper>
            <Login {...props} />
          </Wrapper>
        )}
        options={{ headerShown: true, headerTitle: "" }}
      />
    </Stack.Navigator>
  );
}
