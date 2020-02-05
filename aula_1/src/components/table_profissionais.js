import React from 'react';

// o nome da classe TableProfissionais eh diferente do nome do arquivo porque um eh classe e outro eh estrutura de arquivos
// o React acima (import) eh o mesmo React abaixo (component)
    export default class TableProfissionais extends React.Component {
    render() {
        console.log("PROPS:", this.props)
        return (
            <div>
            <h2>Eu sou uma tabela!</h2>
            </div>
        )
    }
}


