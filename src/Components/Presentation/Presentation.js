import React, { Component } from 'react';
import './presentation.css';


class Presentation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="presentation">
                <div className="presentation__body">
                    <h3 className="presentation__title">{this.props.title}</h3>
                    <h4 className="presentation__sub-title">{this.props.subTitle}</h4>
                    <div className="presentation__body-text">
                        <p className="presentation__text">{this.props.text}</p>
                        <img className="presentation__img" src={this.props.img} alt="Informação"/>
                    </div>
                </div>
                <div className="presentation__footer">
                    <a href="/contato" className="presentation__footer-text">Deseja me conhecer melhor? Entre em contato comigo!</a>
                </div>
            </div>
        );
    }
}

export default Presentation;
