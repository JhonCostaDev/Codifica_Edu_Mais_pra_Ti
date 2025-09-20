function Button(props) {
  return <button onClick={props.onClick}>Clique aqui</button>
}

function App() {
  const handleClick = () => {
    alert("Botão clicado")
  };

  return (
    <>
      {/* <button onClick={handleClick}>Clique aqui!</button> */}
      <Button onClick={handleClick}/>
    </>
  )
}

export default App
