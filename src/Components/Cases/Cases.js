import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import './cases.css';


class Cases extends Component {

    constructor() {
        super();
        this.state = {cases : [
            {case:"Use Organico", img:"", id:"1"},
            {case:"Enjoy", img:"", id:"2"},
            {case:"DieGO", img:"", id:"3"},
            {case:"Alcatel", img:"", id:"4"},
            {case:"Mercado das óticas", img:"", id:"5"}
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
                                        <img src={data.img}/>
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
