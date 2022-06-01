import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import MovieAppProvider from './Context/TrembaoAppProvider'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <MovieAppProvider>
        <App />
    </MovieAppProvider>
  </BrowserRouter>
)
