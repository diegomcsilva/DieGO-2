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
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "//api.instagram.com/v1/users/self/media/recent/?access_token=1480603248.1677ed0.e4be27da26e04457ae0fe1e88510c560",
            "method": "GET",
            success:function(resposta){
              console.log("chegou", resposta.data);
              this.setState({lista:resposta.data});
            }.bind(this)
          }
        );

    }


  render() {
    var settings = {
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '40px',
        draggable: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {
                this.state.lista.map(function(response) {
                    return (
                        <div key={response.id} className="banner__item">
                            <img src={response.images.standard_resolution.url} width="400" alt={response.tags}/>
                        </div>
                    )
                })
            }
        </Slider>
        );
    }
}

export default Banner;
