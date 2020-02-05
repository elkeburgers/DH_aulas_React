import React from "react";

export default class Form extends React.Component {
    // render renderiza o que estah no return, sempre:
    render() {
        return (
            <form>
                <p>
                <label>Nome:</label><br/>
                <input type="text"></input>
                </p>

                <p>
                <label>Github:</label><br/>
                <input type="url"></input>
                </p>

                <p>
                <button>Enviar!</button>
                </p>
            </form>
        )
    }
}

// usamos o ''p' porque ele faz div e tem margem, usamos apenas para pequenas demonstracoes.
// container: criamos a tag form para que ele entenda que renderizamos apenas um elemento.