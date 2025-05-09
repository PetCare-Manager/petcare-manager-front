import React, {useState} from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { LoadingButton } from "../commons/LoadingButton";
import { SvgIconsComponent } from "../commons/SvgIconsComponent";
// parametros de navegaciuon
type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  EmailRegister: undefined;
  Login: undefined;
  RecoveryPass: undefined;
  RecioveryPassWord: undefined;
};

type RecoveryPassWordScreenProps = NativeStackScreenProps<
 //sirve para que el tipo de los parametros sea el tipo de la navegación que se esta usando
RootStackParamList,
"RecoveryPass"//puede ser Home, Register, EmailRegister, Login, RecoveryPassScreen, porque es el nombre de la navegación que se esta usando
>;
//se crea el tipo de los parametros de la navegación que se esta usando
export const RecoveryPassWordScreen: React.FC<RecoveryPassWordScreenProps> = ({
}) => {

// stados para los campos del formulario
  const [email, setEmail]= useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
  // paramostrar/ocultar password
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  // estado para el botón de carga
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // para validar el formato del correo electrónico
  const validateEmailFormat = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  // validar formaot de contraseña
  const validatePasswordFormat = (password: string) : boolean => {
    //FORMATO 8caractes, 1mayus, 1numero, 1simbolo
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    //^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
    return  passwordRegex.test(password);
  }

  // valida todos los compas
  const validateFields = (): boolean => {
    let isValid = true;
    //CORREO
    if(!email.trim()) {
      setEmailError("El correo electrónico es obligatorio");
      isValid = false;
    }else if (!validateEmailFormat(email)) {
      setEmailError("El formato del correo lectrónico  no es valido");
      isValid = false;
    }else {
      setEmailError("");
    }
    //CONTRASEÑA
    if (!password.trim()) {
      setPasswordError("La contraseña es obligatoria");
      isValid = false;
    }else if (!validatePasswordFormat(password)) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres, una mayuscula, un número y un  símbolo");
      isValid = false;
    }else {
      setPasswordError("");
    }
    //CORNFIRMACIÓN
    if (!confirmPassword.trim()) {
      setConfirmPasswordError("La confirmación de contraseña es obligatoria")
      isValid =false;
    }else if (password !== confirmPassword) {
      setConfirmPasswordError("Las contraseñas no coinciden");
      isValid = false;
    }else {
      setConfirmPasswordError("");
    }
    return isValid
  };

  //funciuon para manejar el formulario
  const handleSubmit = async () => {
    if(validateFields()) {
      setIsLoading(true);
    
      }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>{/**  para que el contenido pueda crecer y ocupar todo el espacio disponible*/}
    {/**  para que el contenido pueda crecer y ocupar todo el espacio disponible*/}
      <View className="flex flex-col justify-between items-center min-h-full">
        <SvgIconsComponent
          containerClass="w-56 h-44 z-10 mt-[120px] items-center"
          type="logo1"
        />
        <View className="flex gap-4 mt-4 mb-6 w-full px-12">
          <Text className="font-afacad-semibold text-[40px] lg:text-5xl text-center text-typography">
            Contraseña
          </Text>
          <Text className="font-ralewayy-semibold text-base text-center">
            Todo lo que necesitas de tu mascota, en tu bolsillo, a un solo click
          </Text>

          {/** correo */}
          <Text className="-mb-2 uppercase font-afacad-regular text-base">
            Correo electrónico
          </Text>
          <TextInput
            placeholder="Introduce tu correo"
            className={`bg-customwhite p-3 text-sm rounded-lg wfull border ${
              emailError ? "border-red-500" : "border-gray-200"
              }`}
              value = {email}
              onChangeText={setEmail}
              keyboardType="email-address"// Muestra el teclado optimizado para correos necesario???
              autoCapitalize="none"// necesario o esta d mas-- para que no se cambie el primer caracter a mayus???
          />
          {emailError ? (
            <Text className="text-red-500 text-xs">{emailError}</Text>
          ) : null}

          {/** contraseña */}
          <Text className="-mb-2 uppercase font-afacad-regular text-base">
            Contraseña
          </Text>
          <View className="relative w-full">
            <TextInput
              placeholder="Nueva contraseña"
              className={`bg-customwhite p-3 text-sm rounded-lg w-full border ${
                passwordError ? "border-red-500" : "border-gray-300"
              }`}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3"
            >
              <Ionicons
                name={showConfirmPassword ? "eye-off" : "eye"}
                size={24}
                color="#6B7280"
              />
            </TouchableOpacity>
          </View>
          {passwordError ? (
            <Text className="text-red-500 text-xs">{passwordError}</Text>
          ) : null}
          
          {/** Repetir Contraseña */}
          <Text className="-mb-2 uppercase font-afacad-regular text-base ">
            Repetir contraseña
          </Text>
          <View className="relative w-full">
          <TextInput
            placeholder="Repetir nueva contraseña"
            className={`bg-customwhite p-3 text-sm rounded-lg w-full border ${
              confirmPasswordError ? "border-red-500" : "border-gray-300"
            }`}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3"
            >
              <Ionicons
                name={showConfirmPassword ? "eye-off" : "eye"}
                size={24}
                color="#6B7280"
              />
            </TouchableOpacity>
          </View>
          {confirmPasswordError ? (
            <Text className="text-red-500 text-xs">{confirmPasswordError}</Text>
          ) : null}

          {/** Requisitos de la contraseña */}
          <View className="mt-2">
            <View className="flex-row items-center">
              <View className="w-5 h-5 rounded-full border border-gray-700 items-center justify-center mr-2">
                <Text className="text-gray-700 text-xs">i</Text>
              </View>
              <Text className="font-afacad-regular">
                Requisitos de la contraseña:
              </Text>
            </View>
            <View className="ml-7 mt-1">
              <Text className={`text-xs ${password.length >= 8 ? "text-green-500" : "text-red-500"}`}>
                • Al menos 8 caracteres
              </Text>
              <Text className={`text-xs ${/[A-Z]/.test(password) ? "text-green-500" : "text-red-500"}`}>
                • Al menos una letra mayúscula
              </Text>
              <Text className={`text-xs ${/\d/.test(password) ? "text-green-500" : "text-red-500"}`}>
                • Al menos un número
              </Text>
              <Text className={`text-xs ${/[!@$!%*?&()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) ? "text-green-500" : "text-red-500"}`}>
                • Al menos un símbolo especial
              </Text>
            </View>
          </View>
         
          {/**Botón cmabiar contraseña */}
          <LoadingButton
            isLoading={false}
            onPress= {handleSubmit}
            title="Crear contraseña"
            fields={[email, password, confirmPassword]}
            errors={[emailError, passwordError, confirmPasswordError]}
          />
        </View>
      </View>
    </ScrollView>
  );
};

