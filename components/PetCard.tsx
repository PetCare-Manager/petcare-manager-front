import { breeds } from "@/utils/breeds";
import { FontAwesome } from "@expo/vector-icons";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import React from "react";
import { Image, Text, View } from "react-native";
import { useBirthday } from '@/hooks/useBirthday';
import { bgColor, bgPetsColors } from '@/constants/Colors';

dayjs.extend(duration);


interface PetCardProps {
  name: string;
  breed: string;
  gender: "M" | "F";
  birthdate: string;
  imageUrl?: string;
  onDelete?: () => void;
  bg_color: bgColor;
}

export const PetCard: React.FC<PetCardProps> = ({
  bg_color,
  name,
  breed,
  gender,
  imageUrl,
  birthdate,
  onDelete,
}) => {
  const { isBirthday, getAgeText } = useBirthday();
  const genderIcon =
    gender === "M" ? (
      <FontAwesome name="mars" size={24} color="#4B5563" />
    ) : (
      <FontAwesome name="venus" size={24} color="#4B5563" />
    );

  const breedImage = breeds.find(
    (b) => b.name.toLowerCase() === breed.toLowerCase()
  )?.image;

  const birthdayToday = isBirthday(birthdate);
  const backgroundColor = bgPetsColors.includes(bg_color)
		? bg_color
		: 'bg-red-100';

  const baseBgColorClass = birthdayToday
    ? "bg-yellow-100 border-2 border-yellow-400 shadow-md"
    : backgroundColor;

  return (
    <View
      className={`flex-row items-center rounded-xl p-3 mb-2 shadow-sm ${baseBgColorClass} ${randomBgColorClass}`}
    >
      <View className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 mr-3 items-center justify-center">
        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
            resizeMode="cover"
          />
        ) : breedImage ? (
          <Image
            source={breedImage}
            style={{ width: 40, height: 40, borderRadius: 20 }}
            resizeMode="cover"
          />
        ) : (
          <Text style={{ fontSize: 20 }}>🐶</Text>
        )}
      </View>
      <View className="flex-1">
        <View className="flex-row items-center">
          <Text className="text-base font-semibold text-gray-800">{name}</Text>
          {birthdayToday && <Text className="ml-2 text-lg">🎂</Text>}
        </View>
        <Text className="text-xs text-gray-500">{getAgeText(birthdate)}</Text>
        <Text className="text-sm text-gray-600">{breed}</Text>
      </View>
      <View>{genderIcon}</View>
      {onDelete && (
        <View className="ml-3">
          <FontAwesome
            name="trash"
            size={20}
            color="#DC2626"
            onPress={onDelete}
          />
        </View>
      )}
    </View>
  );
};
