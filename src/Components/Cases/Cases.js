import React, { Component } from 'react';
import './cases.css';


class Cases extends Component {

    constructor() {
        super();
        this.state = {cases : [
            {case:"Use Organico", img:"https://github.com/diegomcsilva/DieGO-2/blob/master/src/Components/Cases/img/Rectangle%203.png?raw=true", id:"1"},
            {case:"Enjoy", img:"https://github.com/diegomcsilva/DieGO-2/blob/master/src/Components/Cases/img/Rectangle%203.1.png?raw=true", id:"2"},
            {case:"DieGO", img:"https://github.com/diegomcsilva/DieGO-2/blob/master/src/Components/Cases/img/Rectangle%203.2.png?raw=true", id:"3"},
            {case:"Alcatel", img:"https://github.com/diegomcsilva/DieGO-2/blob/master/src/Components/Cases/img/Rectangle%203.3.png?raw=true", id:"4"},
            {case:"Mercado das óticas", img:"https://github.com/diegomcsilva/DieGO-2/blob/master/src/Components/Cases/img/Rectangle%203.4.png?raw=true", id:"5"}
        ]};
    }

    render() {
        return (
            <div className="cases">
                <h3 className="cases__title">Cases</h3>
                <div className="cases__list">
                    {
                        this.state.cases.map(function(data) {
                            return (
                                <div className="case__item" key={data.id} title={data.case}>
                                    <img src={data.img}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Cases;
