import React, { Component } from 'react';
import './nav.css';


class Nav extends Component {

  render() {
    return (
        <div className="nav">
            <a className="nav__item" href="/"><span className="home">Home</span></a>
            <a className="nav__item" href="/contact.html"><span className="contact">Contato</span></a>
            <a className="nav__item" href="/portfolio.html"><span className="portfolio">Portfólio</span></a>
        </div>
    );
  }
}

export default Nav;
