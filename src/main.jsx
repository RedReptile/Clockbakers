import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SignupPage } from './pages/SignupPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignupPage />
  </StrictMode>,
)
