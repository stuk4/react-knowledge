import { resources, defaultNS } from './i18n';
import es from './translations/es/global.json'

declare module 'react-i18next' {
    type DefaultResources = typeof resources['es'];
    interface Resources extends DefaultResources {}
  }
  
declare module 'react-i18next' {
    interface CustomTypeOptions  {
      defaultNS:'';
      resources: typeof es;
    }
  }