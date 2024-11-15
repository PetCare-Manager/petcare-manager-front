import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View className="flex-1 justify-center items-center !bg-teal-200">
      <Text className="text-[20px] font-bold">Tab One</Text>
      <View className="my-[30px] h-1 w-[80%]" lightColor="#eee" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
