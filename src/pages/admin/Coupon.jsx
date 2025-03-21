import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Showmessage from "../../components/common/Showmessage";
import {
  useDeleteCouponMutation,
  useGetCouponQuery,
} from "../../redux/Api/admin/AdminCoupon";

function Coupon() {
  const { data: Api, refetch } = useGetCouponQuery();

  const [deleteCoupon] = useDeleteCouponMutation();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (confirm("Do you want to delete this Coupon?") == true) {
      await deleteCoupon(id);
      setMessage("Delete Coupon Successfully.");
      refetch();
    } else {
      setMessage("");
    }
  };
  const selectUpdateData = (item) => {
    navigate("/admin/coupon/addcoupon", {
      state: item,
    });
  };
  useEffect(() => {
    refetch();
  }, [Api]);
  return (
    <main className="">
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4 ">
        <h6>Coupon List</h6>
        {Api?.data?.length == 0 && (
          <NavLink
            to="/admin/coupon/addcoupon"
            className="btn btn-primary text-white py-1 py-lg-2 stock"
          >
            <i className="bi bi-plus me-2"></i>Add Coupon
          </NavLink>
        )}
      </div>
      {message != "" && <Showmessage message={message} status={"success"} />}
      {Api?.data?.length == 0 ? (
        <p className="text-center stock fw-bold text-primary fs-5">
          No Coupon, You can add!
        </p>
      ) : (
        <>
          <div className="table-responsive scroll-container card p-3 ">
            <table className="table table-bordered table-sm">
              <thead>
                <tr>
                  <th className="text-dark">S.N</th>
                  <th className="text-dark">Code</th>
                  <th className="text-dark">Discount (10%)</th>
                  <th className="text-dark">Minimum Spend</th>
                  <th className="text-dark">Valid From</th>
                  <th className="text-dark">Valid To</th>
                  <th className="text-dark">User Limit</th>
                  <th className="text-dark">Used Count</th>
                  <th className="text-dark">Status</th>
                  <th className="text-dark">Action</th>
                </tr>
              </thead>
              <tbody>
                {Api?.data &&
                  Api?.data?.map((item, index) => (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item?.code}</td>
                      <td>{item?.discount}</td>
                      <td>{item?.minimum_spend}</td>
                      <td>{item?.valid_from?.split("T")[0]}</td>
                      <td>{item?.valid_to?.split("T")[0]}</td>
                      <td>{item?.used_limit}</td>
                      <td>{item?.used_count || 0}</td>
                      <td>{item?.status}</td>

                      <td>
                        <i
                          className="bi bi-pencil-square adminactionupdate"
                          onClick={() => selectUpdateData(item)}
                        ></i>
                        <i
                          className="bi bi-trash ps-3 adminactiondelete"
                          onClick={() => handleDelete(item._id)}
                        ></i>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </main>
  );
}

export default Coupon;
