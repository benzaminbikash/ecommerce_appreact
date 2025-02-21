import React, { useEffect } from "react";

import Hero from "../components/Home/Hero";
import Fact from "../components/Home/Fact";
import Banner from "../components/Home/Banner";
import Feature from "../components/Home/Feature";
import BestSell from "../components/Home/BestSell";
import SearchModal from "../components/SearchModal";
import Fruitsearch from "../components/Home/Fruitsearch";
import Testimonial from "../components/Home/Testimonial";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Tech G Home</title>
        <meta
          name="description"
          content="this is ecommece techonology home page."
        />
      </Helmet>
      <SearchModal />
      <Hero />
      <Feature />
      <Fruitsearch />
      <Banner />
      <BestSell />
      <Fact />
      <Testimonial />
    </>
  );
}

export default Home;
