import React, { useEffect } from "react";
import Header from "../components/Header";
import Checkoutdata from "../components/checkout/Checkoutdata";
import SearchModal from "../components/SearchModal";

function Checkout() {
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
      <Header title={"Checkout"} />
      <Checkoutdata />
    </>
  );
}

export default Checkout;
