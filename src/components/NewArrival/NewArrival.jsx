import React, { useRef, useState } from "react";

import "./NewArrival.css";
import img1 from "../../assets/watch1.jpeg";

const NewArrival = () => {
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
    <div className="new-arrival">
      <div className="container">
        <div className="title">New arrivals</div>
        <div
          className="right"
          ref={rightRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {[...Array(12)].map((_, index) => (
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

export default NewArrival;
