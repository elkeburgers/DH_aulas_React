import React from 'react';

// o nome da classe TableProfissionais eh diferente do nome do arquivo porque um eh classe e outro eh estrutura de arquivos
// o React acima (import) eh o mesmo React abaixo (component)
    export default class TableProfissionais extends React.Component {
    render() {
        console.log("TableProfissionais PROPS:", this.props)
        return (
            <table className="table mt-5 mb-5">
                <thead>
                    <th>Nome</th>
                    <th>Github</th>
                </thead>
                <tbody>
                    {this.props.dados.map((profissionais) => {
                        return (
                            <tr>
                                <td>{profissionais.nome}</td>
                                <td>{profissionais.github}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}


