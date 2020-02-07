import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            timer: new Date().toLocaleTimeString()
        }
    }

    // para fazer o relógio atualizar sozinho, usa o DiMount que encerra o componente, para parar de contar em back, e setInterval para atualizar o relogio / componente
    // 1000 milisegundos, ou seja, um segundo, para ser o interval que ele vai usar de referencia para atualizar o relogio
    componentDidMount() {
        setInterval(() => {
            this.setState({
                timer: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                {this.state.timer}
            </div>
        )
    }
}