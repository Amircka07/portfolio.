// // public/locales/index.js
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// import en from './en.json';
// import ru from './ru.json';

// i18n
//   .use(LanguageDetector) // автоматически определяет язык
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: { translation: en },
//       ru: { translation: ru },
//     },
//     fallbackLng: 'ru',
//     lng: 'ru',
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru', 
    debug: true, 

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}.json', 
    },
  });

export default i18n;
