import { breeds } from "@/utils/breeds";
import { FontAwesome } from "@expo/vector-icons";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import React from "react";
import { Image, Text, View } from "react-native";

dayjs.extend(duration);

const tailwindColors = [
  "bg-yellow-100",
  "bg-red-100",
  "bg-green-100",
  "bg-pink-100",
  "bg-blue-100",
  "bg-purple-100",
];

const getRandomTailwindColor = () => {
  const randomIndex = Math.floor(Math.random() * tailwindColors.length);
  return tailwindColors[randomIndex];
};

const getAgeText = (birthdate: string): string => {
  const birth = dayjs(birthdate);
  const now = dayjs();

  if (!birth.isValid()) {
    console.warn("Fecha inválida recibida:", birthdate);
    return "Edad desconocida";
  }

  let years = now.diff(birth, "year");
  let months = now.diff(birth.add(years, "year"), "month");

  const adjustDate = birth.add(years, "year").add(months, "month");
  if (now.isBefore(adjustDate)) {
    months -= 1;
    if (months < 0) {
      years -= 1;
      months = 11;
    }
  }

  return `Tengo ${years} años.`;
};

const isBirthday = (birthdate: string): boolean => {
  const birth = dayjs(birthdate);
  const today = dayjs();
  return birth.date() === today.date() && birth.month() === today.month();
};

interface PetCardProps {
  name: string;
  breed: string;
  gender: "M" | "F";
  birthdate: string;
  imageUrl?: string;
  onDelete?: () => void;
}

export const PetCard: React.FC<PetCardProps> = ({
  name,
  breed,
  gender,
  imageUrl,
  birthdate,
  onDelete,
}) => {
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
  const randomBgColorClass = getRandomTailwindColor();
  const baseBgColorClass = birthdayToday
    ? "bg-yellow-100 border-2 border-yellow-400 shadow-md"
    : "bg-white";

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
