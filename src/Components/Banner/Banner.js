import React, { Component } from 'react';
import me from './img/Eu.png'
import './banner.css';
import $ from 'jquery';

class Banner extends Component {

    constructor() {
        super();
        this.state = {lista : []};
      }

    componentDidMount() {
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "//api.instagram.com/v1/users/self/media/recent/?access_token=1480603248.1677ed0.e4be27da26e04457ae0fe1e88510c560",
            "method": "GET",
            success:function(resposta){
              console.log("chegou", resposta.data);
              this.setState({lista:resposta.data});
            }.bind(this)
          }
        );
    }


  render() {

    return (
        <div className="banner">
            <div className="banner__img">
                <img src={me} width="400" alt="Diego Marcelo"/>
            </div>
            <div className="banner__text">
                <h1>Diego Marcelo</h1>
                <p>O conhecimento não é saber fazer todas as coisas, mas sim ter a humildade de perguntar quando tem dúvida...</p>
            </div>
        </div>
        );
    }
}

export default Banner;
