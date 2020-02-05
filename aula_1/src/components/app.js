import React from 'react';
import TableProfissionais from './table_profissionais';
import Form from './form';

// para habilitar para ser importado por outras classes/ arquivos usar 'export default':
    export default class App extends React.Component {
    render() {
        return (
            // como soh renderiza um componente, incluimos uma div porque ele entende que estah renderizando apenas a div. Sem ela, o react entende que estah renderizando o h1 e o tableProfissionais.
            <div>
            <h1>Hello World</h1>
            <TableProfissionais/>
            <Form />
            </div>
        )
    }
}

