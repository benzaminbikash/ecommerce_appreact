import React from "react";
import Product from "../components/shopdetail/Product";
import SearchModal from "../components/SearchModal";
import Header from "../components/Header";

function ShopDetail() {
  return (
    <>
      <SearchModal />
      <Header title="Shop" />
      <Product />
    </>
  );
}

export default ShopDetail;
