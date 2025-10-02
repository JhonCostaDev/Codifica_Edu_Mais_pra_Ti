import { useContext, useState } from 'react'
import ButtonTheme from './component/ButtonTheme'
import { ContextTheme } from './context/ContextTheme'

function App() {
  const {theme} = useContext(ContextTheme);

  return (
    <>
      <div className={`App ${theme === "dark"? "dark":""}`}>
        <h1>Teste Use Contexto</h1>
        <ButtonTheme />
      </div>
    </>
  )
}

export default App
