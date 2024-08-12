import React from "react";
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
      { breakpoint: 1200, settings: { slidesToShow: 6 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  };

  const items = [
    { src: img1, title: "Electronics" },
    { src: img2, title: "Air Conditioners" },
    { src: img3, title: "Mobiles" },
    { src: img4, title: "Large Home Appliances" },
    { src: img5, title: "Small Home Appliances" },
    { src: img6, title: "Accessories" },
    { src: img7, title: "Labtop" },
    { src: img8, title: "Personal Care" },
    { src: img9, title: "TVs" },
    { src: img10, title: "Zero Interest" },
    { src: img11, title: "Summer Essential" },
    { src: img12, title: "Cash Offers" },
  ];

  return (
    <div className="container carousel">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div className="slider-item" key={index}>
            <img src={item.src} alt={item.title} className="slider-image" />
            <div className="slider-title">{item.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
