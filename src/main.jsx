import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Second } from './Second.jsx'
import { Primer } from './Primer.jsx'
import { Tercero } from './Tercero.jsx'
import FormApp from './Components/FormApp.jsx'
import { CounterApp } from './Components/CounterApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp></CounterApp>
   <FormApp></FormApp>
  </StrictMode>,
)
