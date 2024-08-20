import { Fragment } from "react";
import "./App.css";
import NavUp from "./components/Header/NavUp";
import NavDown from "./components/Header/NavDown";
import SliderBanner from "./components/Banner/SliderBanner";
import Carousel from "./components/Carousel/Carousel";
import StaticBanner from "./components/Banner/StaticBanner";
import TopOffersBanner from "./components/TopOffersBanner/TopOffersBanner";
import NewArrival from "./components/NewArrival/NewArrival";
import TopOffers from "./components/TopOffers/TopOffers";

import purpleBgImg from "./assets/purple_desktop_1.png";
import normalBgImg from "./assets/multicolor_desktop_1.png";

function App() {
  return (
    <Fragment>
      <NavUp />
      <NavDown />
      <SliderBanner />
      <Carousel />
      <StaticBanner />
      <TopOffersBanner text="Top Offers" image={normalBgImg} />
      <NewArrival />
      <TopOffers />
      <TopOffersBanner text="Minicash Offers" image={purpleBgImg} />
    </Fragment>
  );
}

export default App;
