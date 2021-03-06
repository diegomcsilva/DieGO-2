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
              $('.form__item, .form__footer').hide();
              $('.form__title').addClass('sucesso').text('Mensagem enviada com sucesso! =}');
            },
            error:function(resposta){
              console.log("Erro", resposta);
              $('.form__item, .form__footer').hide();
              $('.form__title').addClass('erro').text('Ocorreu um erro no envio. Tente novamente!');
            }
          }
        );
    }


  render() {

    return (
        <div className="form">
            <Header />
            <form className="form__body body">
                <div className="form__header">
                    <h3 className="form__title">Conte-me o que você deseja</h3>
                </div>
                <div className="form__item titulo">
                    <input name="titulo" id="titulo" type="text" placeholder="TITULO"/>
                    <label>Título</label>
                </div>
                <div className="form__item nome">
                    <input name="nome" id="nome" type="text" placeholder="NOME"/>
                    <label>Nome</label>
                </div>
                <div className="form__item email">
                    <input name="email" id="email" type="email" placeholder="E-MAIL"/>
                    <label>E-mail</label>
                </div>
                <div className="form__item tel">
                    <input name="tel" id="tel" type="number" placeholder="TELEFONE" max="12" min="0"/>
                    <label>Telefone</label>
                </div>
                <div className="form__item mensage">
                    <textarea name="mensagem" id="mensage" placeholder="MENSAGEM"></textarea>
                    <label>Mensagem</label>
                </div>
            </form>
            <div className="form__footer">
                <button type="button" id="sendData" onClick={this.createMensage}>Enviar</button>
            </div>
            <Footer />
        </div>
        );
    }
}

export default Form;
