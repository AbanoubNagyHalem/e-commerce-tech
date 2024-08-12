import React, { useRef, useState } from "react";
import img1 from "../../assets/watch1.jpeg";
import "./TopOffers.css";

const TopOffers = () => {
  const rightRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - rightRef.current.offsetLeft);
    setScrollLeft(rightRef.current.scrollLeft);
    rightRef.current.style.scrollBehavior = "auto";
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      rightRef.current.style.scrollBehavior = "smooth";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    rightRef.current.style.scrollBehavior = "smooth";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - rightRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    rightRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="container">
      <div className="top-offers">
        <div className="left">
          <p className="top">Top offers</p>
          <p className="shop">Shop now</p>
        </div>
        <div
          className="right"
          ref={rightRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {[...Array(7)].map((_, index) => (
            <div className="card" key={index}>
              <div className="image">
                <img src={img1} alt="" />
              </div>
              <span className="title">
                Apple Watch Series 9, 45mm, Midnight Aluminum Case with Midnight
                Sport Band - MR9A3LL-A
              </span>
              <p className="price">22,999.00 EGP</p>
              <span className="sale">28,999.00</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopOffers;
