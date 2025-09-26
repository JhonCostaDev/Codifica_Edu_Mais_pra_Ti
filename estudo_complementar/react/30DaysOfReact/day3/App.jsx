


class App extends Component {
    render() {
        return (
            <div className="notificationFrame">
                <div className="panel">
                    <h1>Oi</h1>
                </div>
            </div>
        )
                    
    }
}

const mount = document.querySelector("#app");
ReactDOM.render(<App />, mount);