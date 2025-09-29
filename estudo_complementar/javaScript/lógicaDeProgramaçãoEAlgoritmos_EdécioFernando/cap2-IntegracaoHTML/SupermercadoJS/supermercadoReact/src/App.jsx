import { useState } from "react"


function App() {
  const [productName, setProductName] = useState("");
  const [productValue, setProductValue] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const productValueFloat = parseFloat(productValue);
    setResult(productValue * 3 -  productValue / 2)
    
  }
  

  return (
    <>
    <h1>Supermercado JS com React</h1>
     <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div>
            <label>Product Name: </label>
            <input type="text" onChange={(e) => setProductName(e.target.value)}/>

          </div>
          <div>
            <label>Product Value: </label>
            <input type="number" step="any" onChange={(e) => setProductValue(e.target.value)}/>
          </div>

          <button type="submit">Show Promotion</button>
        </div>
      </form>

      <div className="output">
        <p>{productName} - Promoção: Leve o 3 º produto por R${(productValue/2).toFixed(2)}</p>
        <p>O 3º Produto {productName} custa apenas R${(result / 2).toFixed(2)}</p>
      </div>
     </div>
    </>
  )
}

export default App
