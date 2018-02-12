import React, { Component } from 'react';
import skillsimg from './img/Skills.png'
import './skills.css';

class Skills extends Component {
  render() {
    return (
        <div className="skills">
            <div className="skills__img">
                <img src={skillsimg} width="400" alt="Skills"/>
            </div>
            <div className="skills__text">
                <p>Meu objetivo é atuar na área de tecnologia da informação e desenvolver meus conhecimentos na área. Minhas experiências me fizeram evoluir, mas sei que tenho muito para aprender.</p>
            </div>
        </div>
        );
    }
}

export default Skills;
