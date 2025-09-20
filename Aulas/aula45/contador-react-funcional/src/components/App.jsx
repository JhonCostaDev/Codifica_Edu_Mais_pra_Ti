import { useState } from "react";
import Button from "./Button";
import "../assets/styler.css";


function App() {
  const [valorInicial, mudar] = useState(0);
  
  return (
    <>
    <div className="container">
        <h1>Contador</h1>
        <div className="display">
          <p>{valorInicial}</p>
        </div>
        <button onClick={() => {
          mudar(valorInicial + 1);
        }}>Aperte</button>
    </div>
    </>
  )
}

export default App
