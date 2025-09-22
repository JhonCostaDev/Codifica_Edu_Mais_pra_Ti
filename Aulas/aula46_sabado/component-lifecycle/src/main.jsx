import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ViaCep from './components/ViaCep'
//import LifeCycleClassComponent from './components/LifeCycleClassComponent'
// import App from './components/App'
// import LifeCycleFunctionalComponent from './components/LifeCycleFunctionalComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <LifeCycleClassComponent /> */}
    {/* <LifeCycleFunctionalComponent/> */}
    <ViaCep/>
  </StrictMode>,
)
