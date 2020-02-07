import React from 'react';
import TableProfissionais from './table_profissionais';
import Form from './form';

// para habilitar para ser importado por outras classes/ arquivos usar 'export default':
    export default class App extends React.Component {

        constructor (props) {
            super (props)
            this.state = {
                profissionais: [
                    {
                        id: 1,
                        nome: "Vagner Venceslau",
                        github: "http://github.io/vagven"
                    },
                    {
                        id: 2,
                        nome: "Eduardo Rocha",
                        github: "http://github.io/eduroc"
                    }
                ]
            }
        }

        render() {
            // para testar no console do navegador
            console.log ("STATE:", this.state);
        return (
            // como soh renderiza um componente, incluimos uma div porque ele entende que estah renderizando apenas a div. Sem ela, o react entende que estah renderizando o h1 e o tableProfissionais.
            <div>
            <h1>Hello World</h1>
            <TableProfissionais  dados={this.state.profissionais}/>
            <Form />
            </div>
        )
    }
}

