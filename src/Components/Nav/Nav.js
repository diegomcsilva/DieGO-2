import React, { Component } from 'react';
import './nav.css';


class Nav extends Component {

  render() {
    return (
        <div className="nav">
            <a className="nav__item" href="/"><span className="home">Home</span></a>
            <a className="nav__item" href="/cases"><span className="portfolio">Front End Developer</span></a>
            <a className="nav__item" href="/form"><span className="contact">Contato</span></a>
        </div>
    );
  }
}

export default Nav;
