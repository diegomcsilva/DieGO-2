import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import './cases.css';


class Cases extends Component {

    constructor() {
        super();
        this.state = {cases : [
            {case:"Use Organico", img:"https://github.com/diegomcsilva/DieGO-2/blob/master/src/Components/Cases/img/UseOrganico.png?raw=true", id:"1", link:"//www.useorganico.com.br"},
            {case:"Enjoy", img:"https://github.com/diegomcsilva/DieGO-2/blob/master/src/Components/Cases/img/Enjoy.png?raw=true", id:"2", link:"//www.enjoy.com.br"},
            {case:"DieGO", img:"https://github.com/diegomcsilva/DieGO-2/blob/master/src/Components/Cases/img/Meu.png?raw=true", id:"3", link:"//diegomcsilva.github.io/DieGO/"},
            {case:"Alcatel", img:"https://github.com/diegomcsilva/DieGO-2/blob/master/src/Components/Cases/img/Alcatel.png?raw=true", id:"4", link:"//www.alcatel-mobile.com.br/"},
            {case:"Mercado das óticas", img:"https://github.com/diegomcsilva/DieGO-2/blob/master/src/Components/Cases/img/MercadoOticas.png?raw=true", id:"5", link:"http://www.mercadodasoticas.com.br/Sistema/401"},
            {case:"Damásio", img:"https://github.com/diegomcsilva/DieGO-2/blob/master/src/Components/Cases/img/Damasio.png?raw=true", id:"6", link:"//www.damasio.com.br/"},
            {case:"Epoca Cosmeticos", img:"https://github.com/diegomcsilva/DieGO-2/blob/master/src/Components/Cases/img/EpocaCosmeticos.png?raw=true", id:"7", link:"//www.epocacosmeticos.com.br/"},
            {case:"Mundo Aria", img:"https://github.com/diegomcsilva/DieGO-2/blob/master/src/Components/Cases/img/MundoAria.png?raw=true", id:"8", link:"//www.mundoaria.com.br/"},
            {case:"Renzzi", img:"https://github.com/diegomcsilva/DieGO-2/blob/master/src/Components/Cases/img/Renzzi.png?raw=true", id:"9", link:"//www.renzzi.com.br/"}
        ]};
    }

    render() {
        return (
            <div className="cases">
                <Header />
                <div className="cases__body body">
                    <h3 className="cases__title">Alguns Projetos...</h3>
                    <div className="cases__list">
                        {
                            this.state.cases.map(function(data) {
                                return (
                                    <div className="case__item" key={data.id} title={data.case}>
                                        <a href={data.link}>
                                            <img src={data.img}/>
                                        </a>
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

export default Cases;
