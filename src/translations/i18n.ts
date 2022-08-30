import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import deviceLanguage from './deviceLanguage';

const resources = {
	en: { translation: require('./en.json') },
	ua: { translation: require('./ua.json') },
};

const fallback = { languageTag: 'en' };
const { languageTag } = deviceLanguage || fallback;

i18n.use(initReactI18next).init({
	resources,
	ns: Object.keys(resources),
	lng: languageTag,
	fallbackLng: 'en',
	debug: false,
	react: {
		useSuspense: false,
	},
	interpolation: {
		escapeValue: false,
	},
});

export const i18next = i18n;
