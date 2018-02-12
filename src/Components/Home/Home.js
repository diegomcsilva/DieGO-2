import React, { Component } from 'react';
import Header from './../Header/Header';
import Banner from './../Banner/Banner';
import Skills from './../Skills/Skills';
import Footer from './../Footer/Footer';
import Presentation from './../Presentation/Presentation';
import lamp from './img/lamp.png'
import H1_ from './img/H1_.png'
import './home.css';

class Home extends Component {

  render() {

    return (
            <div className="home">
                <Header />
                <div className="body">
                    <Banner />
                    <Presentation title="Prazer..." subTitle="MEU NOME É DIEGO MARCELO e sou desenvolvedor front end e muito curioso..." text="Atuo como desenvolvedor front-end, sou formado em administração de empresas e pós-graduado em engenharia de software. Estudo sempre e me atualizo com tecnologias que abordem conceitos voltados para uma melhor performasse e usabilidade. Desenvolver sites bem elaborados e organizados São a chave para um bom resultado. Aligidade é um conceito que deve ser visto como a mágica do negócio." img={lamp} />
                    <Skills />
                    <Presentation title="Sou desenvolvedr front-end..." text="desde de 2016 no desenvolvimento principalmente de e-commerce. Estou sempre estudando tecnologias e me atualizando com novos conceitos na área de tecnologia. Atuo principamente com hTML, CSS e JavaScript." img={H1_}/>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
