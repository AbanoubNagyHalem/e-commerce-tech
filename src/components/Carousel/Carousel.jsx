import React, { Fragment } from "react";
import Slider from "react-slick";

import img1 from "../../assets/highlight_01_100x100.png";
import img2 from "../../assets/highlight_01_100x100_copy.png";
import img3 from "../../assets/highlight_03_100x100.png";
import img4 from "../../assets/highlight_04_100x100.png";
import img5 from "../../assets/highlight_05_100x100_1.png";
import img6 from "../../assets/highlight_06_100x100.png";
import img7 from "../../assets/highlight_07_100x100.png";
import img8 from "../../assets/highlight_08_100x100_1.png";
import img9 from "../../assets/highlight_11_100x100.png";
import img10 from "../../assets/highlight_12_100x100.png";
import img11 from "../../assets/highlight_12_100x100_copy_2.png";
import img12 from "../../assets/highlight_16_100x100_ar.png";

import "./Carousel.css";

const Carousel = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <div className="container carousel">
        <Slider {...settings}>
          <div className="slider-item">
            <img src={img1} alt="title" className="slider-image" />
            <div className="slider-title">Electronics</div>
          </div>
          <div className="slider-item">
            <img src={img2} alt="title" className="slider-image" />
            <div className="slider-title">Air Conditioners</div>
          </div>
          <div className="slider-item">
            <img src={img3} alt="title" className="slider-image" />
            <div className="slider-title">Mobiles</div>
          </div>
          <div className="slider-item">
            <img src={img4} alt="title" className="slider-image" />
            <div className="slider-title">Large Home Appliances</div>
          </div>
          <div className="slider-item">
            <img src={img5} alt="title" className="slider-image" />
            <div className="slider-title">Small Home Appliances</div>
          </div>
          <div className="slider-item">
            <img src={img6} alt="title" className="slider-image" />
            <div className="slider-title">Accessories</div>
          </div>
          <div className="slider-item">
            <img src={img7} alt="title" className="slider-image" />
            <div className="slider-title">Labtop</div>
          </div>
          <div className="slider-item">
            <img src={img8} alt="title" className="slider-image" />
            <div className="slider-title">Personal Care</div>
          </div>
          <div className="slider-item">
            <img src={img9} alt="title" className="slider-image" />
            <div className="slider-title">TVs</div>
          </div>
          <div className="slider-item">
            <img src={img10} alt="title" className="slider-image" />
            <div className="slider-title">Zero Interest</div>
          </div>
          <div className="slider-item">
            <img src={img11} alt="title" className="slider-image" />
            <div className="slider-title">Summer Essential</div>
          </div>
          <div className="slider-item">
            <img src={img12} alt="title" className="slider-image" />
            <div className="slider-title">Cash Offers</div>
          </div>
        </Slider>
      </div>
    </Fragment>
  );
};

export default Carousel;
