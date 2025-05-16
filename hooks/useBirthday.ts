import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const useBirthday = () => {
	const getAgeText = (birthdate: string): string => {
		const birth = dayjs(birthdate);
		const now = dayjs();

		if (!birth.isValid()) {
			console.warn('Fecha inválida recibida:', birthdate);
			return 'Edad desconocida';
		}

		let years = now.diff(birth, 'year');
		let months = now.diff(birth.add(years, 'year'), 'month');

		const adjustDate = birth.add(years, 'year').add(months, 'month');
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
	return {
		isBirthday,
		getAgeText,
	};
};
