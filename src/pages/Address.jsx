import React from "react";
import SearchModal from "../components/SearchModal";
import Header from "../components/Header";
import AddressForm from "../components/address/Addressform";

function Address() {
  return (
    <>
      <SearchModal />
      <Header title="Payment" />
      <AddressForm />
    </>
  );
}

export default Address;
