import React, { Component } from 'react';
import Cases from './Components/Cases/Cases';
import Form from './Components/Form/Form';
// import Router from './Components/router/Router';
import './Config/reset.css';
import './Config/main.css';
import './App.css';
// Import routing components
import Routers from './Router/Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routers />
      </div>
    );
  }
}

export default App;
