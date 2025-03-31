import { Wrapper } from "@/components/commons/Wrapper";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { EmailRegisterScreen } from "@/components/screens/EmailRegisterScreen";
import { FormEvent } from "@/components/screens/FormEventScreen";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { LoadingScreen } from "@/components/screens/LoadingScreen"; // Asegúrate de importar correctamente
import { LoginScreen } from "@/components/screens/LoginScreen";
import { NotRememberPassScreen } from "@/components/screens/NotRememberPassScreen";
import { PetForm } from "@/components/screens/PetFormScreen";
import { SocialLoginScreen } from "@/components/screens/SocialLoginScreen";
import { UserProfileScreen } from "@/components/screens/UserProfileScreen";
import { AuthProvider } from "@/context/AuthContext";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import { RecoveryPassScreen } from "@/components/screens/RecoveryPassScreen";
import { RecoveryPassWordScreen } from "@/components/screens/RecoveryPassWordScreen";

// Define el tipo para las rutas de navegación
type RootStackParamList = {
  Loading: undefined; // Añade la pantalla de carga
  Home: undefined;
  SocialLogin: undefined;
  EmailRegisterScreen: undefined;
  Login: undefined;
  NotRememberPassScreen: undefined;
  UserProfileScreen: undefined;
  PetForm: undefined;
  FormEvent: undefined;
  ProtectedRoute: undefined;
  RecoveryPassScreen: undefined;
  RecoveryPassWordScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Define los tipos de props para cada pantalla
type LoadingScreenProps = NativeStackScreenProps<RootStackParamList, "Loading">;
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
type SocialLoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SocialLogin"
>;
type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;
type EmailRegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "EmailRegisterScreen"
>;
type NotRememberPassScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "NotRememberPassScreen"
>;
type UserProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "UserProfileScreen"
>;
type PetFormProps = NativeStackScreenProps<RootStackParamList, "PetForm">;
type FormEventProps = NativeStackScreenProps<RootStackParamList, "FormEvent">;
type RecoveryPassScreenProps = NativeStackScreenProps<RootStackParamList, "RecoveryPassScreen">;
type RecoveryPassWordScreenProps = NativeStackScreenProps<RootStackParamList, "RecoveryPassWordScreen">

export default function App() {
  return (
    <AuthProvider>
      <Stack.Navigator initialRouteName="RecoveryPassScreen">
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
          name="SocialLogin"
          children={(props: SocialLoginScreenProps) => (
            <Wrapper>
              <SocialLoginScreen {...props} />
            </Wrapper>
          )}
          options={{ headerShown: true, headerTitle: "" }}
        />

        {/* Pantalla Login */}
        <Stack.Screen
          name="Login"
          children={(props: LoginScreenProps) => (
            <Wrapper>
              <LoginScreen {...props} />
            </Wrapper>
          )}
          options={{ headerShown: true, headerTitle: "" }}
        />

        {/* Pantalla Email Register */}
        <Stack.Screen
          name="EmailRegisterScreen"
          children={(props: EmailRegisterScreenProps) => (
            <Wrapper>
              <EmailRegisterScreen {...props} />
            </Wrapper>
          )}
          options={{ headerShown: true, headerTitle: "" }}
        />

        {/* Pantalla No recuerda contraseña */}
        <Stack.Screen
          name="NotRememberPassScreen"
          children={(props: NotRememberPassScreenProps) => (
            <Wrapper>
              <NotRememberPassScreen {...props} />
            </Wrapper>
          )}
          options={{ headerShown: true, headerTitle: "" }}
        />

        {/* Ruta protegida: UserProfile */}
        <Stack.Screen
          name="UserProfile"
          children={(props: UserProfileScreenProps) => (
            <ProtectedRoute>
              <Wrapper>
                <UserProfileScreen {...props} />
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
        {/** Pantalla recuperar contraseña mandar mail */}
        <Stack.Screen
          name="RecoveryPassScreen"
          children={(props: RecoveryPassScreenProps)=>(
            <Wrapper>
              <RecoveryPassScreen {...props}/>
            </Wrapper>
          )}
          options={{ headerShown: true, headerTitle: "" }}
        />

        {/** Pantalla Recuperar Contraseña nueva */}
        <Stack.Screen
          name= "RecoveryPassWordScreen"
          children={(props: RecoveryPassWordScreenProps)=>(
            <Wrapper>
              <RecoveryPassWordScreen {...props}/>
            </Wrapper>
          )}
          options ={{ headerShown: true, headerTitle: "" }}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
}
