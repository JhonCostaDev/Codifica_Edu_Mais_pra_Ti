import { Component } from "react";

class LifeCycleClassComponent extends Component {
    constructor(props) {
        super(props) {
            this.state = { count: 0}
        }
    }

    componentDidMount() {
        console.log("COmponente Montado!");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Componente atualizado! Propriedades e estados anteriores: ", prevProps, prevState);
    }

    componentWillUnmount () {
        console.log("Componente sera Desmontado");
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    
}