import React from "react";
import Banner from "../components/Banner/Banner";
import Cards from "../components/Cards/Cards";
import Order from "../components/Order/Order";
import Facilities from "../components/Facilities/Facilities";
import Carousel from "../components/Carousel/Carousel";
import useTitle from "../components/hooks/useTitle";

const Main = () => {
  useTitle('home')
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
