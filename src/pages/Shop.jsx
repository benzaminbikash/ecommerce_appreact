import React, { useEffect } from "react";

import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import Fruitshop from "../components/shop/Fruitshop";

function Shop() {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "instant",
  //   });
  // }, []);
  return (
    <>
      <SearchModal />
      <Header title="Shop" />
      <Fruitshop />
    </>
  );
}

export default Shop;
