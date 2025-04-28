import { Wrapper } from "@/components/commons/Wrapper";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { EmailRegisterScreen } from "@/components/screens/EmailRegisterScreen";
import { FinalAddPet } from "@/components/screens/FinalAddPet";
import { FormEventScreen } from "@/components/screens/FormEventScreen";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { LoadingScreen } from "@/components/screens/LoadingScreen";
import { LoginScreen } from "@/components/screens/LoginScreen";
import { NotRememberPassScreen } from "@/components/screens/NotRememberPassScreen";
import { PetForm } from "@/components/screens/PetFormScreen";
import { PreAddDocumentation } from "@/components/screens/PreAddDocumentation";
import { RecoveryPassScreen } from "@/components/screens/RecoveryPassScreen";
import { RecoveryPassWordScreen } from "@/components/screens/RecoveryPassWordScreen";
import { SocialLoginScreen } from "@/components/screens/SocialLoginScreen";
import { UserProfileScreen } from "@/components/screens/UserProfileScreen";
import { AuthProvider } from "@/context/AuthContext";
import { EventProvider } from "@/context/EventContext";
import { PetsProvider } from "@/context/PetContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { PaperProvider } from "react-native-paper";

// Define el tipo para las rutas de navegación
type RootStackParamList = {
  Loading: undefined;
  Home: undefined;
  SocialLogin: undefined;
  EmailRegister: undefined;
  Login: undefined;
  NotRememberPass: undefined;
  UserProfile: undefined;
  PetForm: undefined;
  FormEvent: undefined;
  ProtectedRoute: undefined;
  RecoveryPassScreen: undefined;
  RecoveryPassWordScreen: undefined;
  PreAddDocumentation: undefined;
  FinalAddPet: undefined;
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
type RecoveryPassScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "RecoveryPassScreen"
>;
type RecoveryPassWordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "RecoveryPassWordScreen"
>;

export default function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <PetsProvider>
          <PaperProvider>
            <Wrapper>
              <Stack.Navigator initialRouteName="Loading">
                <Stack.Screen
                  name="Loading"
                  component={LoadingScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SocialLogin"
                  component={SocialLoginScreen}
                  options={{ headerShown: true, headerTitle: "" }}
                />
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{ headerShown: true, headerTitle: "" }}
                />
                <Stack.Screen
                  name="EmailRegister"
                  component={EmailRegisterScreen}
                  options={{ headerShown: true, headerTitle: "" }}
                />
                <Stack.Screen
                  name="NotRememberPass"
                  component={NotRememberPassScreen}
                  options={{ headerShown: true, headerTitle: "" }}
                />
                <Stack.Screen
                  name="UserProfile"
                  options={{
                    headerShown: true,
                    headerTitle: "Perfil de Usuario",
                  }}
                >
                  {(props) => (
                    <ProtectedRoute>
                      <UserProfileScreen {...props} />
                    </ProtectedRoute>
                  )}
                </Stack.Screen>
                <Stack.Screen
                  name="PetForm"
                  component={PetForm}
                  options={{ headerShown: true, headerTitle: "" }}
                />
                <Stack.Screen
                  name="FormEvent"
                  component={FormEventScreen}
                  options={{ headerShown: true, headerTitle: "" }}
                />
                {/** Pantalla recuperar contraseña mandar mail */}
                <Stack.Screen
                  name="RecoveryPassScreen"
                  children={(props: RecoveryPassScreenProps) => (
                    <Wrapper>
                      <RecoveryPassScreen {...props} />
                    </Wrapper>
                  )}
                  options={{ headerShown: true, headerTitle: "" }}
                />

                {/** Pantalla Recuperar Contraseña nueva */}
                <Stack.Screen
                  name="RecoveryPassWordScreen"
                  children={(props: RecoveryPassWordScreenProps) => (
                    <Wrapper>
                      <RecoveryPassWordScreen {...props} />
                    </Wrapper>
                  )}
                  options={{ headerShown: true, headerTitle: "" }}
                />
                <Stack.Screen
                  name="PreAddDocumentation"
                  component={PreAddDocumentation}
                  options={{ headerShown: true, headerTitle: "" }}
                />
                <Stack.Screen
                  name="FinalAddPet"
                  component={FinalAddPet}
                  options={{ headerShown: true, headerTitle: "" }}
                />
              </Stack.Navigator>
            </Wrapper>
          </PaperProvider>
        </PetsProvider>
      </EventProvider>
    </AuthProvider>
  );
}
