import { EmailRegister } from "@/components/EmailRegister";
import { FormEvent } from "@/components/FormEvent";
import { HomeScreen } from "@/components/HomeScreen";
import { Login } from "@/components/Login";
import { NotRememberPass } from "@/components/NotRememberPass";
import { PetForm } from "@/components/PetForm";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Register } from "@/components/Register";
import { UserProfile } from "@/components/UserProfile";
import { LoadingScreen } from "@/components/commons/LoadingScreen"; // Asegúrate de importar correctamente
import { Wrapper } from "@/components/commons/Wrapper";
import { AuthProvider } from "@/context/AuthContext";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";

// Define el tipo para las rutas de navegación
type RootStackParamList = {
  Loading: undefined; // Añade la pantalla de carga
  Home: undefined;
  Register: undefined;
  EmailRegister: undefined;
  Login: undefined;
  NotRememberPass: undefined;
  UserProfile: undefined;
  PetForm: undefined;
  FormEvent: undefined;
  ProtectedRoute: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Define los tipos de props para cada pantalla
type LoadingScreenProps = NativeStackScreenProps<RootStackParamList, "Loading">;
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
type ProtectedRouteProps = NativeStackScreenProps<
  RootStackParamList,
  "ProtectedRoute"
>;
type RegisterProps = NativeStackScreenProps<RootStackParamList, "Register">;
type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;
type EmailRegisterProps = NativeStackScreenProps<
  RootStackParamList,
  "EmailRegister"
>;
type NotRememberPassProps = NativeStackScreenProps<
  RootStackParamList,
  "NotRememberPass"
>;
type UserProfileProps = NativeStackScreenProps<
  RootStackParamList,
  "UserProfile"
>;
type PetFormProps = NativeStackScreenProps<RootStackParamList, "PetForm">;

export default function App() {
  return (
    <AuthProvider>
      <Stack.Navigator initialRouteName="Loading">
        {/* Pantalla de Carga */}
        <Stack.Screen
          name="Loading"
          children={(props: LoadingScreenProps) => <LoadingScreen {...props} />}
          options={{ headerShown: false }}
        />

        {/* Pantalla Home */}
        <Stack.Screen
          name="Home"
          children={(props: HomeScreenProps) => (
            <Wrapper>
              <HomeScreen {...props} />
            </Wrapper>
          )}
          options={{ headerShown: false }}
        />

        {/* Pantalla Registro */}
        <Stack.Screen
          name="Register"
          children={(props: RegisterProps) => (
            <Wrapper>
              <Register {...props} />
            </Wrapper>
          )}
          options={{ headerShown: true, headerTitle: "" }}
        />

        {/* Pantalla Login */}
        <Stack.Screen
          name="Login"
          children={(props: LoginProps) => (
            <Wrapper>
              <Login {...props} />
            </Wrapper>
          )}
          options={{ headerShown: true, headerTitle: "" }}
        />

        {/* Pantalla Email Register */}
        <Stack.Screen
          name="EmailRegister"
          children={(props: EmailRegisterProps) => (
            <Wrapper>
              <EmailRegister {...props} />
            </Wrapper>
          )}
          options={{ headerShown: true, headerTitle: "" }}
        />

        {/* Pantalla No recuerda contraseña */}
        <Stack.Screen
          name="NotRememberPass"
          children={(props: NotRememberPassProps) => (
            <Wrapper>
              <NotRememberPass {...props} />
            </Wrapper>
          )}
          options={{ headerShown: true, headerTitle: "" }}
        />

        {/* Ruta protegida: UserProfile */}
        <Stack.Screen
          name="UserProfile"
          children={(props: UserProfileProps) => (
            <ProtectedRoute>
              <Wrapper>
                <UserProfile {...props} />
              </Wrapper>
            </ProtectedRoute>
          )}
          options={{ headerShown: true, headerTitle: "Perfil de Usuario" }}
        />

        {/* Pantalla Formulario Mascotas */}
        <Stack.Screen
          name="PetForm"
          children={(props: PetFormProps) => (
            <Wrapper>
              <PetForm {...props} />
            </Wrapper>
          )}
          options={{ headerShown: true, headerTitle: "" }}
        />

        {/* Pantalla Formulario Eventos */}
        <Stack.Screen
          name="FormEvent"
          children={(props: FormEventProps) => (
            <Wrapper>
              <FormEvent {...props} />
            </Wrapper>
          )}
          options={{ headerShown: true, headerTitle: "" }}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
}
