import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEs from './es/global.json'
import translationEn from './es/global.json'

export const defaultNS = 'translationEs'
export const resources = {
  es:{
    translationEs
  }
} as const
i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    lng:'es',
    fallbackLng: 'es',
    // ns:'',
    ns:[''],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // resources:{
    //   es:{
    //     global:translationEs
    //   },
    //   en:{
    //     global:translationEn
    //   }
    // }

  });

export default i18n;