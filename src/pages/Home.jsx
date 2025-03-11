import React from "react";
import Hero from "../components/Home/Hero";
import Banner from "../components/Home/Banner";
import BestSell from "../components/Home/BestSell";
import Fruitsearch from "../components/Home/Fruitsearch";
import Testimonial from "../components/Home/Testimonial";

function Home() {
  return (
    <>
      <Hero />
      <Fruitsearch />
      <Banner />
      <BestSell />
      <Testimonial />
    </>
  );
}

export default Home;
