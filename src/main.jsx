import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { MealProvider } from './context/MealContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MealProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MealProvider>
  </StrictMode>,
)
