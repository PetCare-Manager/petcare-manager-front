const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
	light: {
		text: '#000',
		background: '#fff',
		tint: tintColorLight,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorLight,
	},
	dark: {
		text: '#fff',
		background: '#000',
		tint: tintColorDark,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorDark,
	},
};

// Solo añadir una vez el color para que quede typado en bgColor y en la safeList de tailwind.config
export const bgPetsColors = [
	'bg-yellow-100',
	'bg-pink-100',
	'bg-blue-100',
	'bg-cyan-100',
	'bg-purple-100',
	'bg-emerald-100',
] as const;

export type bgColor = (typeof bgPetsColors)[number];
