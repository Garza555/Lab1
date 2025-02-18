import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Second } from './Second.jsx'
import { Primer } from './Primer.jsx'
import { Tercero } from './Tercero.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Second></Second>
    <Primer></Primer>
    <Tercero></Tercero>
  </StrictMode>,
)
