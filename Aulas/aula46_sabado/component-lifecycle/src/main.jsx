import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LifeCycleClassComponent from './components/LifeCycleClassComponent'
import App from './components/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LifeCycleClassComponent />
  </StrictMode>,
)
