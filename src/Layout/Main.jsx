import React from "react";
import Banner from "../components/Banner/Banner";
import Cards from "../components/Cards/Cards";
import Order from "../components/Order/Order";
import Facilities from "../components/Facilities/Facilities";
import Carousel from "../components/Carousel/Carousel";

const Main = () => {
  return (
    <div>
      <Banner />
      <Cards />
      <Carousel />
      <Order />
      <Facilities />
    </div>
  );
};

export default Main;
