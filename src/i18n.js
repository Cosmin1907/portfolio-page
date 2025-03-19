import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ro from './locales/ro.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ro: { translation: ro }
  },
  lng: localStorage.getItem('language') || 'en', // Default to stored language or English
  fallbackLng: 'en', // Fallback if translation is missing
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
