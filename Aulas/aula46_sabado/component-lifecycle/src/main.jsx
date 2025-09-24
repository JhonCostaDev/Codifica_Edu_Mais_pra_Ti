import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ViaCep from './components/ViaCep'
import ViaCEPProps from './components/ViaCEPProps'
import ViaCEPProf from './components/ViaCEPProf'
//import LifeCycleClassComponent from './components/LifeCycleClassComponent'
// import App from './components/App'
// import LifeCycleFunctionalComponent from './components/LifeCycleFunctionalComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <LifeCycleClassComponent /> */}
    {/* <LifeCycleFunctionalComponent/> */}
    <ViaCep />
    <ViaCEPProps nome="jhon"/>
    <ViaCEPProf  cep={'60543315'} />
  </StrictMode>,
)
