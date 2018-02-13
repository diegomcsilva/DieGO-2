import React, { Component } from 'react';
import './footer.css';

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
        </div>
        );
    }
}

export default Footer;
