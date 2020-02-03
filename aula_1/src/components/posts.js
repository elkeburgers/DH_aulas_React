import React from 'react';
// opcao:
// import React { Component } from "react";

// class Post extends Component {

    class Post extends React.Component {
    // render para renderizar, usado sempre com React.Component
    render() {
        // por padrao, sempre colocamos () quando fazemos blocos html, que nao precisa mas evita alguns problemas
        return (
            <div>
            <h1>Post</h1>
            {/* props eh um objeto que recebe todas as propriedades atribuidas a ele no post: */}
            <h1>{this.props.titulo}</h1>
            <p>{this.props.texto}</p>
            </div>
        )
    }
}

// para habilitar para ser importado por outras classes/ arquivos:
export default Post;
