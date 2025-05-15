import { bgColor, bgPetsColors } from '@/constants/Colors';
import { Pet } from '@/types/types';

export const getRandomBgColorAvailable = (pets: Pet[]): bgColor | null => {
	const usedColors = pets.map(pet => {
		return pet.bg_color;
	});

	const availableColors = bgPetsColors.filter(
		color => !usedColors.includes(color)
	);

	if (availableColors.length === 0) return null;

	const randomColor =
		availableColors[Math.floor(Math.random() * availableColors.length)];

	return randomColor;
};
