import React, { useState } from "react";
import Showmessage from "../../../common/Showmessage";
import { useLocation } from "react-router-dom";

function AddCoupon() {
  const { state } = useLocation();
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [spend, setSpend] = useState("");
  const [validform, setValidForm] = useState("");
  const [validto, setValidTo] = useState("");
  const [status, setStatus] = useState("");
  const [usedLimit, setUsedLimit] = useState("");

  const handleAddBanner = async (e) => {
    e.preventDefault();
    if (api?.error) {
    } else {
    }
  };

  const handleUpdateBanner = async (e) => {
    e.preventDefault();
  };

  return (
    <main className="">
      <div className="card shadow-sm  mt-4">
        <div className="card-header bg-white ">
          <h5 className="text-primary  my-3 ">
            {state ? "Update Coupon" : "Add Coupon"}
          </h5>
        </div>
        {/* {error && <Showmessage status="fail" message={error} />}
        {success && <Showmessage status="success" message={success} />} */}
        <div className="card-body">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Code</label>
                <input
                  type="text"
                  className="form-control p-2 bg-light"
                  placeholder="Enter Code"
                  required
                  onChange={(e) => setCode(e.target.value)}
                  value={code}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Discount (%)</label>
                <input
                  type="text"
                  className="form-control p-2 bg-light"
                  placeholder="Enter Discount"
                  required
                  onChange={(e) => setDiscount(e.target.value)}
                  value={discount}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Minimum Spend (%)</label>
                <input
                  type="text"
                  className="form-control p-2 bg-light"
                  placeholder="Enter Minimum Spend"
                  required
                  onChange={(e) => setSpend(e.target.value)}
                  value={spend}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Valid From</label>
                <input
                  type="text"
                  className="form-control p-2 bg-light"
                  placeholder="Enter Valid From"
                  required
                  onChange={(e) => setValidForm(e.target.value)}
                  value={validform}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Valid To</label>
                <input
                  type="text"
                  className="form-control p-2 bg-light"
                  placeholder="Enter Valid To"
                  required
                  onChange={(e) => setValidTo(e.target.value)}
                  value={validto}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Status</label>
                <input
                  type="text"
                  className="form-control p-2 bg-light"
                  placeholder="Enter Status"
                  required
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">User Limit</label>
                <input
                  type="text"
                  className="form-control p-2 bg-light"
                  placeholder="Enter User Limitation"
                  required
                  onChange={(e) => setUsedLimit(e.target.value)}
                  value={usedLimit}
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={state ? handleUpdateBanner : handleAddBanner}
                type="submit"
                className="btn btn-primary text-white py-2"
              >
                {state ? "Update Coupon" : "Add Coupon"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddCoupon;
