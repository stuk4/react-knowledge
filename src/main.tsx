import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './translations/i18n';
import 'tw-elements';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
