import React from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Wrapper } from "@/components/Wrapper";
import { HomeScreen } from "@/components/HomeScreen";
import { Login } from "@/components/Login";
import { Register } from "@/components/Register";
import { UserProfile } from "@/components/UserProfile";
import { NotRememberPass } from "@/components/NotRememberPass";
import { EmailRegister } from "@/components/EmailRegister";
import { PetForm } from "@/components/PetForm";
import { AuthProvider } from "@/context/AuthContext";

// Define el tipo para las rutas de navegación
type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  EmailRegister: undefined;
  Login: undefined;
  NotRememberPass: undefined;
  UserProfile: undefined;
  PetForm: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Define los tipos de props para cada pantalla
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
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

export default function Home() {
  return (
    <AuthProvider>
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
        <Stack.Screen
          name="EmailRegister"
          children={(props: EmailRegisterProps) => (
            <Wrapper>
              <EmailRegister {...props} />
            </Wrapper>
          )}
          options={{ headerShown: true, headerTitle: "" }}
        />
        <Stack.Screen
          name="NotRememberPass"
          children={(props: NotRememberPassProps) => (
            <Wrapper>
              <NotRememberPass {...props} />
            </Wrapper>
          )}
          options={{ headerShown: true, headerTitle: "" }}
        />
        <Stack.Screen
          name="UserProfile"
          children={(props: UserProfileProps) => (
            <Wrapper>
              <UserProfile {...props} name="Carol" />
            </Wrapper>
          )}
          options={{ headerShown: true, headerTitle: "" }}
        />
        <Stack.Screen
          name="PetForm"
          children={(props: PetFormProps) => (
            <Wrapper>
              <PetForm {...props} />
            </Wrapper>
          )}
          options={{ headerShown: true, headerTitle: "" }}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
}
