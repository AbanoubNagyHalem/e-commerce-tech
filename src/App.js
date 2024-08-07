import { Fragment } from "react";
import "./App.css";
import NavUp from "./components/Header/NavUp";
import NavDown from "./components/Header/NavDown";
import SliderBanner from "./components/Banner/SliderBanner";

function App() {
  return (
    <Fragment>
      <NavUp />
      <NavDown />
      <SliderBanner />
    </Fragment>
  );
}

export default App;
