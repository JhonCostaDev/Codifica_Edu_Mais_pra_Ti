function Button(props) {
  return <button onClick={props.onClick}>Click here</button>
}

function App() {
  const handleClick = () => {
    alert("Button clicked")
  }

  return (
    <>
      <Button onClick={handleClick}/>
      {/* <button onClick={handleClick}>Clique aqui</button> */}
    </>
  )
}

export default App
