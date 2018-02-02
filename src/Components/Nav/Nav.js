import React, { Component } from 'react';
import './nav.css';


class Nav extends Component {

  render() {
    return (
        <div className="nav">
            <a href="/"><div className="nav__item home">Home</div></a>
            <a href="/contact.html"><div className="nav__item contact">Contato</div></a>
            <a href="/portfolio.html"><div className="nav__item portfolio">Portfólio</div></a>
        </div>
    );
  }
}

export default Nav;
