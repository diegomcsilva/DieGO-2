import React, { Component } from 'react';
import Slider from 'react-slick';
import './banner.css';
import $ from 'jquery';

class Banner extends Component {

    constructor() {
        super();
        this.state = {lista : []};
      }

    componentDidMount() {
        // var data = '';
        // var i = 0;
        // var texto = ''
        // var urlImage = '';
        // var urlBuy = "//produto.mercadolivre.com.br/MLB-839220889-carikas-caricatura-em-biscuit-escultura-personalizada-_JM#D[S:HOME,L:RECOMITEM-CORE-UNO-HISTORYITEMS,V:0]";
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "//api.instagram.com/v1/users/self/media/recent/?access_token=1480603248.1677ed0.e4be27da26e04457ae0fe1e88510c560",
            "method": "GET"
        }

        $.ajax(settings).done(function(response) {
            this.setState({lista:response});

            // console.log(response);
            // for (i = 0; i < 20; i++) {
            //     urlImage = data[i].images.standard_resolution.url;
            //     texto = data[i].caption.text || 'carikas';
            // }
        }.bind(this));

        // console.log('lista', lista)

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "//api.instagram.com/v1/users/self/media/recent/?access_token=1480603248.1677ed0.e4be27da26e04457ae0fe1e88510c560",
            "method": "GET",
            success:function(resposta){
              console.log("chegou a resposta");
              this.setState({lista:resposta});
              console.log(resposta.data["0"].images.standard_resolution)
            //   console.log('lista', lista);
            }.bind(this)
          }
        );

    }


  render() {
      var settings = {
          // dots: true,
          infinite: true,
          arrow: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
      };

    //   console.log(lista)
    return (
        <div>
            <Slider {...settings}>
                {
                    // this.state.lista.map(function(response) {
                    //     return (
                    //         <div>
                    //          <div>{data.data}</div>
                    //         </div>
                    //     );
                    // })
                }
            </Slider>
        </div>
    );
  }
}

export default Banner;
