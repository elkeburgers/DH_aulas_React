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

    // adicoes para reconhecer o id do relogio que eh criado pela aplicacao a cada segundo
    componentDidMount() {
        let interval_id = setInterval(() => {
            this.setState({
                timer: new Date().toLocaleTimeString()
        })
        }, 1000)

        this.setState({
            ...this.state,
            interval_id: interval_id
        })
    }

    // para destruir um elemento:
    // o clearInterval limpa o intervalo
    // no console usa setInterval (_=> "", 1000); e retorna o numero do ID para colocar abaixo (opcao)
    // usamos para reconhecer o id apesar das atualizações o this.state acima
    // desmontamos para diminuir o uso da capacidade de memoria, voltando ao estado inicial, a memoria limpa e fica a aplicacao mais rapida
    componentWillUnmount() {
        clearInterval(this.state.interval_id);
    }

    render() {
        return (
            <div>
                {this.state.timer}
            </div>
        )
    }
}