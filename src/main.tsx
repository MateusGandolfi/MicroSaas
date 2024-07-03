import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { LoginPage } from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
)
