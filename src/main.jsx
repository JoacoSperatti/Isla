import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // ACÁ ESTÁN TUS VARIABLES Y RESET
import './i18n' // CONFIGURACIÓN DE IDIOMAS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)