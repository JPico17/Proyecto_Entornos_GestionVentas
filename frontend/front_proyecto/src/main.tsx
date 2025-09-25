import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './login/login.tsx'
import Navbar from './navbar/navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <main>
      <Login />
    </main>
    
  </StrictMode>,
)
