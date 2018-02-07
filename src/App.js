import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Cases from './Components/Cases/Cases';
import './Config/reset.css';
import './Config/main.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Cases />
      </div>
    );
  }
}

export default App;
