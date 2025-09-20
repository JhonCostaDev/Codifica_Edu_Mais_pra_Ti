import Products from "./Produtos";
import estoque from "../data/estoque.json"
import Title from "./Title";


function App() {
  

  return (
    <>
      {/* <Products nome={estoque[0].nome}/> */}
      <Title/>
      <Products props={estoque}/>
    </>
  )
}

export default App
