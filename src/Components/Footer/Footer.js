import React, { Component } from 'react';
import './footer.css';
import face from './img/face.png';
import instagram from './img/instagram.png';
import linkedin from './img/linkedin.png';

class Footer extends Component {

  render() {

    return (
        <div className="footer">
            <div className="footer__mensage">
                <p>Não desista de ser o que você deseja ser simplesmente pelo fato de não sbber como se faz. Ao invez disso, busque, pesquise, estude, pois somente assim as coisas iram acontecer. Tenha atitude, não esper...</p>
            </div>
            <div className="footer__copyright">
                <p>Powered BY Diego MArcelo - 2018</p>
            </div>
            <div className="footer__social">
                <ul>
                    <li className="footer__social-img">
                        <a href="/">
                            <img src={face} alt="Logo DieGO" width="345" title="Diego Marcelo"/>
                        </a>
                    </li>
                    <li className="footer__social-img">
                        <a href="/">
                            <img src={instagram} alt="Logo DieGO" width="345" title="Diego Marcelo"/>
                        </a>
                    </li>
                    <li className="footer__social-img">
                        <a href="/">
                            <img src={linkedin} alt="Logo DieGO" width="345" title="Diego Marcelo"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}

export default Footer;
