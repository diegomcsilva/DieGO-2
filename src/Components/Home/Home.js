import React, { Component } from 'react';
import Header from './../Header/Header';
import Banner from './../Banner/Banner';
import './home.css';

class Home extends Component {

  render() {

    return (
            <div className="Home">
                <Header />
                <Banner />
            </div>
        );
    }
}

export default Home;
