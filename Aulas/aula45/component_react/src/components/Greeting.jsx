function Greeting(props) {
    return <h1>Hello, {props.name}</h1>;
}

function Aplicativo(){
    const nome = "Jhon";
    return <Greeting name={nome}/>
}


export default Aplicativo;