import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Home from '../public/Sections/Home.jsx'
import '../public/Sections/home.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
