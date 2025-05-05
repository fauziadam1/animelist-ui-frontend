import React from 'react'
import Slider from "react-slick";

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
        <main>
            <img src="./src/assets/OnePieceBanner.webp" alt="" />
        </main>
    </div>
  )
}

export default Banner;
