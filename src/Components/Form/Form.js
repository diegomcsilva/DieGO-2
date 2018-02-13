import React, { Component } from 'react';
import './form.css';
import $ from 'jquery';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

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
            <Header />
            <div className="form__body body">
                <div className="form__header">
                    <h3 className="form__title">Conte-me o que você deseja</h3>
                </div>
                <div className="form__item titulo">
                    <input name="titulo" id="titulo" type="text"/>
                    <label>Título</label>
                </div>
                <div className="form__item nome">
                    <input name="nome" id="nome" type="text"/>
                    <label>Nome</label>
                </div>
                <div className="form__item email">
                    <input name="email" id="email" type="email"/>
                    <label>E-mail</label>
                </div>
                <div className="form__item tel">
                    <input name="tel" id="tel" type="number"/>
                    <label>Telefone</label>
                </div>
                <div className="form__item mensage">
                    <textarea name="mensagem" id="mensage"></textarea>
                    <label>Mensagem</label>
                </div>
            </div>
            <div className="form__footer">
                <button type="button" id="sendData" onClick={this.createMensage}>Enviar</button>
            </div>
            <Footer />
        </div>
        );
    }
}

export default Form;
