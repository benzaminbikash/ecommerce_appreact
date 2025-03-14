import React, { useEffect } from "react";
import Header from "../components/Header";
import Fruitshop from "../components/shop/Fruitshop";
import Scroller from "../components/common/Scroller";

function Shop() {
  useEffect(() => {
    Scroller();
  }, []);
  return (
    <>
      <Header title="Shop" />
      <Fruitshop />
    </>
  );
}

export default Shop;
