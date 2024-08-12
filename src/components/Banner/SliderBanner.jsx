import React from "react";
import Slider from "react-slick";

import img1 from "../../assets/slider1.jpg";
import img2 from "../../assets/slider2.png";
import img3 from "../../assets/slider3.jpg";
import img4 from "../../assets/slider4.jpg";
import img5 from "../../assets/slider5.png";

import "./SliderBanner.css";

const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {[img1, img2, img3, img4, img5].map((img, index) => (
          <div key={index}>
            <img src={img} alt={`slider-image-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBanner;
