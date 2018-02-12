import React, { Component } from 'react';
import Nav from './../Nav/Nav';
import logo from './img/Logo.png';
import $ from 'jquery';
import './header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.headerFloat = this.headerFloat.bind(this);
    }

    componentWillMount() {
        this.headerFloat();
    }

    headerFloat() {
        window.onscroll = function() {
        	headerFloat();
        };


        function headerFloat() {
        	if (window.pageYOffset > 90) {
        		$('html').addClass('header-floating-before');
        	}
        	if (window.pageYOffset > 95) {
        		$('html').addClass('header-floating');
        	} else {
                $('html').removeClass('header-floating-before').removeClass('header-floating');
        	}
        }
    }

    render() {
        return (
            <div className="header">
                <div className="header__img">
                    <a href="/">
                        <img src={logo} alt="Logo DieGO" width="345" title="Diego Marcelo"/>
                    </a>
                </div>
                <Nav />
            </div>
            );
        }
    }

export default Header;
