import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="Myimg">
          <a href="/index.html">
              <img src="src/images/Logo.png" alt="Logo DieGO" />
          </a>
        </div>
        <div className="nav_linha">
            <div className="nav">
                <ul>
                  <li><a href="index.html">Eu</a></li>
                  <li><a href="portfolio.html">Portfólio</a></li>
                  <li><a href="conheca.html">Let’s GO Learn</a></li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
