import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAddCouponMutation,
  useUpdateCouponMutation,
} from "../../../../redux/Api/admin/AdminCoupon";
import Showmessage from "../../../common/Showmessage";

function AddCoupon() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [COUPON] = useAddCouponMutation();
  const [UPDATECOUPON] = useUpdateCouponMutation();

  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [spend, setSpend] = useState("");
  const [validform, setValidForm] = useState(null);
  const [validto, setValidTo] = useState(null);
  const [status, setStatus] = useState("");
  const [usedLimit, setUsedLimit] = useState("");
  const [error, setError] = useState("");

  const handleAddBanner = async (e) => {
    e.preventDefault();
    const data = {
      code,
      discount,
      minimum_spend: spend,
      valid_from: validform,
      valid_to: validto,
      status: status,
      used_limit: usedLimit,
    };
    const coupon = {
      id: state?._id,
      data: data,
    };
    const api = state ? await UPDATECOUPON(coupon) : await COUPON(data);
    if (api?.error) {
      setError(api?.error?.data?.message);
    } else {
      navigate("/admin/coupon");
    }
  };

  useEffect(() => {
    if (state) {
      setCode(state?.code);
      setDiscount(state?.discount);
      setSpend(state?.minimum_spend);
      setValidForm(state?.valid_from ? state.valid_from.split("T")[0] : "");
      setValidTo(state?.valid_to ? state.valid_to.split("T")[0] : "");
      setStatus(state?.status);
      setUsedLimit(state?.used_limit);
    }
  }, [state]);

  return (
    <main className="">
      <div className="card shadow-sm  mt-4">
        <div className="card-header bg-white ">
          <h5 className="text-primary  my-3 ">
            {state ? "Update Coupon" : "Add Coupon"}
          </h5>
        </div>
        {error && <Showmessage status="fail" message={error} />}
        <div className="card-body">
          <form onSubmit={handleAddBanner}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Code</label>
                <input
                  type="text"
                  className="form-control p-2 bg-light"
                  placeholder="Enter Code"
                  onChange={(e) => setCode(e.target.value)}
                  value={code}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Discount (%)</label>
                <input
                  type="text"
                  className="form-control p-2 bg-light"
                  placeholder="Enter Discount"
                  onChange={(e) => setDiscount(e.target.value)}
                  value={discount}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Minimum Spend</label>
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
                  type="date"
                  className="form-control p-2 bg-light"
                  required
                  onChange={(e) => setValidForm(e.target.value)}
                  value={validform}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Valid To</label>
                <input
                  type="date"
                  className="form-control p-2 bg-light"
                  required
                  onChange={(e) => setValidTo(e.target.value)}
                  value={validto}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Status</label>

                <select
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                  className="form-control p-2 bg-light"
                >
                  <option disabled value={""}>
                    Select Status
                  </option>
                  <option value="active">Active</option>
                  <option value="inactive">In-Active</option>
                  <option value="cancelled">Cancelled</option>
                </select>
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
              <button type="submit" className="btn btn-primary text-white py-2">
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
