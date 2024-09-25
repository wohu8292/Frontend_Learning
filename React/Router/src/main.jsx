import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {BrowserRouter, MemoryRouter} from 'react-router-dom'


// npm i react-router-dom
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
