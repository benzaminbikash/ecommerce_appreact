import React from "react";
import { deliveryCharge } from "../common/constant";
import { useNavigate } from "react-router";

function Carttotal({ data }) {
  const navigate = useNavigate();
  return (
    <div className="row g-4 justify-content-end mt-2">
      {/* <div className="col-8"></div> */}
      <div className="col-sm-8 col-md-7 ">
        <div className="shadow rounded">
          <div className="p-4">
            <h6 className=" mb-3">Cart Total</h6>
            <div className="d-flex justify-content-between mb-2">
              <p className="mb-0 stock me-4  text-primary">Subtotal:</p>
              <p className="mb-0 stock">Rs {data}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="mb-0 stock me-4 text-primary">Delivery Charge:</p>
              <div className="">
                <p className="mb-0 stock">Rs {deliveryCharge}</p>
              </div>
            </div>
          </div>
          <div className="py-4 mb-2 border-top border-bottom d-flex justify-content-between">
            <h6 className="mb-0 ps-4 me-4">Total</h6>
            <p className="mb-0 pe-4 stock text-primary">
              Rs {data + deliveryCharge}
            </p>
          </div>
          <button
            onClick={() => navigate("/address", {})}
            className="btn ratingbackground  text-white stock rounded px-4 py-2   text-uppercase mb-3 ms-4"
            type="button"
          >
            Proceed Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carttotal;
