import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './../Components/Form/Form';
import Banner from './../Components/Banner/Banner';
import Cases from './../Components/Cases/Cases';
import Home from './../Components/Home/Home';
import Mensages from './../Components/Mensages/Mensages';

class Routers extends Component {
  render() {
        return (
        <BrowserRouter>
            <div>
                <Route exact path='/' component={Home}/>
                <Route path="/form" component={Form}/>
                <Route path="/cases" component={Cases}/>
                <Route path="/banner" component={Banner}/>
                <Route path="/mensages" component={Mensages}/>
            </div>
        </BrowserRouter>
        )
    }
}

export default Routers;
