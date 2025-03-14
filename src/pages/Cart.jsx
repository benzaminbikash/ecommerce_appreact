import React, { useEffect } from "react";
import Header from "../components/Header";
import Cartinfo from "../components/Cart/Cartinfo";
import Scroller from "../components/common/Scroller";

function Cart() {
  useEffect(() => {
    Scroller();
  }, []);
  return (
    <>
      <Header title="Cart" />
      <Cartinfo />
    </>
  );
}

export default Cart;
