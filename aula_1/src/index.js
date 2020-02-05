import React from 'react';
import ReactDOM from 'react-dom';

// apos baixar o bootstrap, importa, caminho na documentacao:
import "bootstrap/dist/css/bootstrap.css";
import './index.css';

// lembrar de importar o arquivo:
import App from "./components/app";

ReactDOM.render(
    ( 
        <App titulo="Hello world"/>
    ),
    document.getElementById('root')
);


