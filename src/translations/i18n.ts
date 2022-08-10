import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './es/global.json';
import en from './en/global.json';


export const defaultNS = 'es'
export const resources = {
  es,
  en
  
}
export const availableLanguages = Object.keys(resources)
i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    debug: true,
    lng:'es',
    fallbackLng: 'es',
    defaultNS,
    ns:['es'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }

  });

export default i18n;