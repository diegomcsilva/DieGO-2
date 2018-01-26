import React, { Component } from 'react';
import logo from './img/Logo.png';
import './header.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Click happened');
  }

  render() {
    return (
        <div className="header">
          <div className="header__nav">
              <div className="header__nav-icon" onClick={this.handleClick}>
                <span className="header__nav-icon"></span>
                <span className="header__nav-icon"></span>
                <span className="header__nav-icon"></span>
              </div>
              <div className="header__nav-body">
                  <ul>
                    <li><a href="index.html">Eu</a></li>
                    <li><a href="portfolio.html">Portfólio</a></li>
                    <li><a href="conheca.html">Let’s GO Learn</a></li>
                  </ul>
              </div>
          </div>
          <div className="header__img">
          <a href="/index.html">
              <img src={logo} alt="Logo DieGO" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
