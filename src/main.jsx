import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { init, miniApp } from '@telegram-apps/sdk';


const initializeTelegramSDK = async () => {
  try {
    init();


    if (miniApp.ready.isAvailable()) {
      miniApp.ready();
    }


  } catch (error) {
    console.error('Ошибка инициализации:', error);
  }
};


initializeTelegramSDK();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)