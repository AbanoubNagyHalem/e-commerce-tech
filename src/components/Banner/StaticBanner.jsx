import React from "react";

import img1 from "../../assets/keep-minicash.png";

import "./StaticBanner.css";

const StaticBanner = () => {
  return (
    <div className="container">
      <div className="static">
        <img src={img1} alt="mini" />
        <p>
          Shop all you want and repay in small amounts, every month, for up to
          48 months!
        </p>
        <p>Open minicash account</p>
        <p>Learn more about minicash</p>
      </div>
    </div>
  );
};

export default StaticBanner;
