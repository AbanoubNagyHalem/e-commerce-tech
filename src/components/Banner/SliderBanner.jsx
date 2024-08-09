import React, { Fragment } from "react";
import Slider from "react-slick";

import img1 from "../../assets/slider1.jpg";
import img2 from "../../assets/slider2.png";
import img3 from "../../assets/slider3.jpg";
import img4 from "../../assets/slider4.jpg";
import img5 from "../../assets/slider5.png";

import "./SliderBanner.css";

const SliderBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Fragment>
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
        </Slider>
      </div>
    </Fragment>
  );
};

export default SliderBanner;
