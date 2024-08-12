import React from "react";

import img1 from "../../assets/keep-minicash.png";

import "./StaticBanner.css";

const StaticBanner = () => {
  return (
    <div className="container">
      <div className="static">
        <img src={img1} alt="mini" />
        <p className="firstP">
          Shop all you want and repay in small amounts, every month, for up to
          48 months!
        </p>
        <p className="secondP">Open minicash account</p>
        <p className="thirdP">Learn more about minicash</p>
      </div>
    </div>
  );
};

export default StaticBanner;
