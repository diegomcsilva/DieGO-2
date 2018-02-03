import React, { Component } from 'react';
import './cases.css';


class Cases extends Component {

    constructor() {
        super();
        this.state = {cases : [
            {case:"Use Organico", img:"Rectangle 3", id:"1"},
            {case:"Use Organico", img:"Rectangle 3.1", id:"2"},
            {case:"Use Organico", img:"Rectangle 3.2", id:"3"},
            {case:"Use Organico", img:"Rectangle 3.3", id:"4"},
            {case:"Use Organico", img:"Rectangle 3.4", id:"5"}
        ]};
    }

    render() {
        return (
            <div className="cases">
                <h3>Cases</h3>
                <div className="cases__list">
                    {
                        this.state.cases.map(function(data) {
                            return (
                                <div className="case" key={data.id} title={data.case}>
                                    <img src={data.img}/>
                                </div>
                            )
                        })

                        // for (i = 0; i < this.state.cases.length; i++) {
                        //     return (
                        //         <div className="case" title={this.state.cases}>
                        //             <img src={this.state.cases}/>
                        //         </div>
                        //     )
                        // }

                        // console.log(this.state.cases)
                    }
                </div>
            </div>
        );
    }
}

export default Cases;
