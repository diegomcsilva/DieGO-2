import React, { Component } from 'react';

import './Config/reset.css';
import './Config/main.css';
import './App.css';
import './Config/main.css';

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
