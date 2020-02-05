import React from 'react';

    class App extends React.Component {
    // render para renderizar, usado sempre com React.Component
    render() {
        // por padrao, sempre colocamos () quando fazemos blocos html, que nao precisa mas evita alguns problemas
        return (
            <div>
            <h1>App</h1>
            {/* props eh um objeto que recebe todas as propriedades atribuidas a ele no post: */}
            <h1>{this.props.titulo}</h1>
            </div>
        )
    }
}

// para habilitar para ser importado por outras classes/ arquivos:
export default App;