import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../src/style/main-Style.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.scss'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
