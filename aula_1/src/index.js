import React from 'react';
import ReactDOM from 'react-dom';

// apos baixar o bootstrap, importa, caminho na documentacao:
import "bootstrap/dist/css/bootstrap.css";
import './index.css';

// lembrar de importar o arquivo:
import Post from "./components/posts";

ReactDOM.render(
    ( 
        // className eh a class do JS
        <div className="content">
            <div className="card card-default">
                <div className="card-header">
                <h1> Hello world! </h1>
                </div>
            {/* 'ola mundo' eh a propriedade atribuida ao componente post criado em posts.js  */}
            <Post texto="Olá Mundo" titulo="Primeiro"/>
            <Post texto="Eu sou o segundo post." titulo="Segundo"/>
            <Post texto="Eu sou o último post." titulo="Terceiro"/>
            </div>
        </div>
    ),
    document.getElementById('root')
);

