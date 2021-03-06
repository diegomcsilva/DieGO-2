import React, { Component } from 'react';
import $ from 'jquery';
import './mensages.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';


class Mensages extends Component {

    constructor(props) {
        super(props);
        this.state = {lista : []};
        this.ListMensage = this.ListMensage.bind(this);
        this.DeleteMensage = this.DeleteMensage.bind(this);
    }
    DeleteMensage() {
        $('body').on('click', '.delete', function() {
            const _this = $(this);
            const id = _this.data('key');
            console.log('key', id);
            $.ajax({
                "async": true,
                "crossDomain": true,
                "url": "https://app-mensager.herokuapp.com/" + id,
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Cache-Control": "no-cache",
                },
                "method": "DELETE",
                success:function(resposta){
                    console.log("Mensagem Deletada", resposta);
                    _this.parent().parent().remove();
                }
            });
        })
    }

    ListMensage() {
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "https://app-mensager.herokuapp.com/",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Cache-Control": "no-cache",
            },
            "method": "GET",
            success:function(resposta){
                console.log("resposta", resposta);
                this.setState({lista: resposta.data});
            }.bind(this)
        });
    }


    componentdidMount() {

        // this.DeleteMensage();
    }

    componentWillMount() {
        this.ListMensage();
        this.DeleteMensage();
        // console.log("lista", this.state.lista);
    }




  render() {
    return (
        <div className="mensage">
            <Header />
            <div className="mensage__body body">
                <div className="mensage__header">
                    <h3 className="mensage__title">Conte-me o que você deseja</h3>
                </div>
                <div className="mensage__items-list">
                    {
                        this.state.lista.map(function(data) {
                            return (
                                <div className="mensage__items" key={data._id}>
                                    <div className="mensage__item title">
                                        <h3>Título:</h3>
                                        <p>{data.title}</p>
                                    </div>
                                    <div className="mensage__item name">
                                        <h3>Nome:</h3>
                                        <p>{data.name}</p>
                                    </div>
                                    <div className="mensage__item email">
                                        <h3>Email:</h3>
                                        <p>{data.email}</p>
                                    </div>
                                    <div className="mensage__item tel">
                                        <h3>Telefone:</h3>
                                        <p>{data.tel}</p>
                                    </div>
                                    <div className="mensage__item mensage">
                                        <h3>Mensagem:</h3>
                                        <p>{data.mensage}</p>
                                    </div>
                                    <div className="mensage__item-delete">
                                        <button className="delete" data-key={data._id}>Deletar Mensage</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default Mensages;
