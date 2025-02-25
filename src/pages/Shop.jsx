import React, { useEffect } from "react";

import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import Fruitshop from "../components/shop/Fruitshop";
import Scroller from "../components/common/Scroller";

function Shop() {
  <Scroller />;
  return (
    <>
      <SearchModal />
      <Header title="Shop" />
      <Fruitshop />
    </>
  );
}

export default Shop;
