import { Fragment } from "react";
import "./App.css";
import NavUp from "./components/Header/NavUp";
import NavDown from "./components/Header/NavDown";
import SliderBanner from "./components/Banner/SliderBanner";
import Carousel from "./components/Carousel/Carousel";
import StaticBanner from "./components/Banner/StaticBanner";
import TopOffers from "./components/TopOffers/TopOffers";

function App() {
  return (
    <Fragment>
      <NavUp />
      <NavDown />
      <SliderBanner />
      <Carousel />
      <StaticBanner />
      <TopOffers />
    </Fragment>
  );
}

export default App;
