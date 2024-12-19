import React, { useEffect } from "react";
import SearchModal from "../components/SearchModal";
import Hero from "../components/Home/Hero";
import Feature from "../components/Home/Feature";
import Fruitsearch from "../components/Home/Fruitsearch";
import Features from "../components/Home/Features";
import Banner from "../components/Home/Banner";
import BestSell from "../components/Home/BestSell";
import Fact from "../components/Home/Fact";
import Testimonial from "../components/Home/Testimonial";

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <SearchModal />
      <Hero />
      <Feature />
      <Fruitsearch />
      <Features />
      <Banner />
      <BestSell />
      <Fact />
      <Testimonial />
    </>
  );
}

export default Home;
