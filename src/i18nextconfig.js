import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import it from './locales/it';

/**
 * Configurations for internationalization.
 * translations
 *
 * Translations are stored in:
 * src/locales/<lan>
 *
 * To extract new translations we use i18next-parser.
 * This tool scans the project and adds any missing keys to the specified json file
 * */
const resources = {
    en: {
        translation: en
    },
    it: {
        translation: it
    }
};

i18n
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources,
        lng: "it", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option
        debug: true,
        fallbackLng: "it",
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        // i18n uses react suspense by default, so we need to disable it manually
        react: {
            useSuspense: false,
            wait: false,
        },
    });

export default i18n;
