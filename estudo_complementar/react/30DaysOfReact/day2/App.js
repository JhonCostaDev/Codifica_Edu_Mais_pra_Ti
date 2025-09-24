class App extends React.Component {
    render() {
        return <h1>Hello New COmponent</h1>
    }
}

const mount = document.querySelector("#app");
 
ReactDOM.render(<App />, mount);