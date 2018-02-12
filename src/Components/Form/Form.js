import React, { Component } from 'react';
import './form.css';
import $ from 'jquery';
import Header from './../Header/Header';

class Form extends Component {

    constructor(props) {
        super(props);
        this.createMensage = this.createMensage.bind(this);
    }

    createMensage() {
        // console.log($("#titulo").val());
        // console.log($("#mensage").val());
        // console.log($("#email").val());
        // console.log($("#tel").val());
        // console.log($("#nome").val());
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "https://app-mensager.herokuapp.com/",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Cache-Control": "no-cache",
            },
            "method": "POST",
            "data": {
              "title": $("#titulo").val(),
              "mensage": $("#mensage").val(),
              "email": $("#email").val(),
              "tel": $("#tel").val(),
              "name": $("#nome").val(),
          },
            success:function(resposta){
              console.log("enviado com sucesso", resposta);
            }
          }
        );
    }


  render() {

    return (
        <div className="form">
            <div className="form__header">
                <Header />
            </div>
            <div className="form__body body">
                <div className="form__header">
                    <h3 className="form__title">Conte-me o que você deseja</h3>
                </div>
                <div className="form__item titulo">
                    <label>Título</label>
                    <input name="titulo" id="titulo" type="text"/>
                </div>
                <div className="form__item nome">
                    <label>Nome</label>
                    <input name="nome" id="nome" type="text"/>
                </div>
                <div className="form__item email">
                    <label>E-mail</label>
                    <input name="email" id="email" type="email"/>
                </div>
                <div className="form__item tel">
                    <label>Telefone</label>
                    <input name="tel" id="tel" type="number"/>
                </div>
                <div className="form__item">
                    <label>Título</label>
                    <textarea name="mensagem" id="mensage"></textarea>
                </div>
            </div>
            <div className="form__footer">
                <button type="button" id="sendData" onClick={this.createMensage}>Enviar</button>
            </div>
        </div>
        );
    }
}

export default Form;
