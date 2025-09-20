import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App.jsx'
import Greeting from './components/Greeting.jsx'
import Products from './components/Products.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <App />
    <Products />
  </StrictMode>,
)
