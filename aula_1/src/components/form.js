import React from "react";

export default class Form extends React.Component {
    // render renderiza o que estah no return, sempre:
    render() {
        return (
            <div className="col-12">
                <form className="card">
                    <div className="card-header">
                        <h2 className="card-title">Formulário</h2>
                    </div>
                    <div className="card-body">
                        <p className="form-group">
                        <label className="form-label">Nome:</label><br/>
                        <input className="form-control" type="text"></input>
                        </p>

                        <p>
                        <label className="form-label">Github:</label><br/>
                        <input className="form-control" type="url"></input>
                        </p>
                    </div>
                    <div className="card-footer text-right">
                    <button className="btn btn-primary">Enviar!</button>
                    </div>
                </form>
            </div>
        )
    }
}

// usamos o ''p' porque ele faz div e tem margem, usamos apenas para pequenas demonstracoes.
// container: criamos a tag form para que ele entenda que renderizamos apenas um elemento.