import React from 'react'
import Slider from "react-slick";
import { BannerData } from './bannerData';

function Banner() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider settings={settings}>
        {BannerData.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} />
            </div>
        )})}
      </Slider>
    </div>
  )
}

export default Banner;
