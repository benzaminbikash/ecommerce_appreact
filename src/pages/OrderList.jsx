import React, { useEffect } from "react";
import Header from "../components/Header";

function OrderList() {
  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Header title="Order Info" />
      <div className="container ">
        <div className="container py-5">
          <div className="row"></div>
        </div>
      </div>
    </>
  );
}

export default OrderList;
