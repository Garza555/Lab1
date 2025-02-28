import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { CustomHook } from './Components/CustomHook.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomHook />
  </StrictMode>
);
