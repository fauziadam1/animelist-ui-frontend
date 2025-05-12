import React from 'react'
import Slider from "react-slick";

function Banner() {
  var Slide = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div>
        <main>
          <Slide>
            <img src="./src/assets/OnePieceBanner.webp" alt="" />
          </Slide>
        </main>
    </div>
  )
}

export default Banner;
