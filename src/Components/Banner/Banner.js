import React, { Component } from 'react';
import Slider from 'react-slick';
import './banner.css';


class Banner extends Component {
  render() {
      var settings = {
          // dots: true,
          infinite: true,
          arrow: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
      };
    return (
        <Slider {...settings}>
            <a href="/" className="banner__item home"><img alt="1" src="http://entertainment.ie//images_content/rectangle/620x372/topgames2013.jpg" /></a>
            <a href="/" className="banner__item contact"><img alt="2" src="https://icdn2.digitaltrends.com/image/horizon-zero-dawn-3-720x720.jpg" /></a>
            <a href="/" className="banner__item portfolio"><img alt="3" src="https://www.pcgamesn.com/sites/default/files/best%20pc%20games%202016%20the%20division.png" /></a>
        </Slider>
    );
  }
}

export default Banner;
