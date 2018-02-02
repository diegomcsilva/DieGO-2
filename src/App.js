import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Banner from './Components/Banner/Banner';
import './Config/reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Banner />
      </div>
    );
  }
}

export default App;
