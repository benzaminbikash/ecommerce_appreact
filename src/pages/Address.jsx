import React, { useEffect } from "react";
import Header from "../components/Header";
import AddressForm from "../components/address/Addressform";
import Scroller from "../components/common/Scroller";

function Address() {
  useEffect(() => {
    Scroller();
  }, []);
  return (
    <>
      <Header title="Address" />
      <AddressForm />
    </>
  );
}

export default Address;
