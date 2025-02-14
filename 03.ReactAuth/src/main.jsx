import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// IMPORT DE BOOTSTRAP
// BOOTSTRAP CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// BOOTSTRAP JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
