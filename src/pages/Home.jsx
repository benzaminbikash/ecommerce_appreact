import React, { useLayoutEffect } from "react";
import Hero from "../components/Home/Hero";
import Banner from "../components/Home/Banner";
import BestSell from "../components/Home/BestSell";
import Fruitsearch from "../components/Home/Fruitsearch";
import Testimonial from "../components/Home/Testimonial";
import AuthRole from "../components/common/AuthRole";
import { useNavigate } from "react-router-dom";

function Home() {
  const { isAdmin } = AuthRole();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (isAdmin) {
      navigate("/admin");
    }
  }, []);

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
