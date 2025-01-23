import { Text, View } from "react-native";

export default function TabOneScreen() {
  return (
    <View className="flex-1 justify-center items-center !bg-teal-200">
      <Text className="text-[20px] font-bold">Tab One</Text>
      <View className="my-[30px] h-1 w-[80%]" />
    </View>
  );
}
