import React, { Component } from 'react';
import Nav from './../Nav/Nav';
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
            <div className="header__img">
                <a href="/index.html">
                    <img src={logo} alt="Logo DieGO" width="345" title="Diego Marcelo"/>
                </a>
            </div>
            <Nav />
        </div>
    );
  }
}

export default Header;
