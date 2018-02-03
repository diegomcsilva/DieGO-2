import React, { Component } from 'react';
import logo from './img/Logo.png';
import './header.css';
import $ from 'jquery';

class Header extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Click happened');
    var _item = $('.header__nav-icon-item');
    $('body').toggleClass('nav-open');
    if (_item.hasClass('active')) {
        _item.removeClass('active');
        _item.addClass('reverse');
    } else {
        _item.removeClass('reverse');
        _item.addClass('active');
    };
  }

  render() {
    return (
        <div className="header">
          <div className="header__nav">
              <div className="header__nav-icon" onClick={this.handleClick}>
                <div className="header__nav-icon-item"></div>
              </div>
          </div>
          <div className="header__img">
          <a href="/index.html">
              <img src={logo} alt="Logo DieGO" width="300" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
