import React, { useEffect, useState } from "react";
import {
  useAllOrderQuery,
  useUpdateOrderMutation,
} from "../../../redux/Api/OrderApi";
import BannerModal from "../../../components/admin/dashboard/AdminDataModal";
import Showmessage from "../../../components/common/Showmessage";
import { itemperPage } from "../../../components/common/constant";

function PendingOrder() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, refetch } = useAllOrderQuery();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const products = data?.data
    ?.filter((item) => item?.status === "Pending")
    .filter((item) => {
      if (search === "") {
        return item;
      } else {
        return (
          item?.user?.fullname
            ?.toLowerCase()
            ?.includes(search?.toLowerCase()) ||
          item?.deliveryid?.toString()?.includes(search) ||
          item?.user?.phone?.toString()?.includes(search) ||
          item?.products?.some((data) =>
            data?.product?.title?.toLowerCase()?.includes(search?.toLowerCase())
          )
        );
      }
    });

  const sortedProducts = products?.slice().sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const [UpdateOrder] = useUpdateOrderMutation();
  const [status, setStatus] = useState("");
  const itemsPerPage = itemperPage;
  const [selectOrder, setSelectOrder] = useState({});
  const totalPages = Math.ceil(sortedProducts?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = sortedProducts?.slice(startIndex, endIndex);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const updateOrderProduct = async (orderId, newStatus) => {
    const data = {
      id: orderId,
      order: {
        status: newStatus,
      },
    };
    const api = await UpdateOrder(data);
    if (api?.error) {
      setSuccess("");
      setError(api?.error?.data?.message);
    } else {
      setError("");
      setSuccess(api?.data?.message);
      refetch();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);
  }, [error, success]);

  return (
    <main>
      <BannerModal type="order" data={selectOrder} />
      <div className="mt-5">
        <h6>Pending Orders</h6>
      </div>
      <div className="d-flex gap-2 w-50 mb-4">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          type="text"
          className="productinput my-2"
          placeholder="Search by name, product phone, transaction_id"
          aria-label="Search"
        />
      </div>
      {displayedProducts?.length === 0 ? (
        <p className="text-center fw-bold text-primary fs-5">No Order</p>
      ) : (
        <>
          {error && <Showmessage status="fail" message={error} />}
          {success && <Showmessage status="success" message={success} />}
          <div className="table-responsive scroll-container card p-3">
            <table className="table table-bordered table-sm">
              <thead>
                <tr>
                  <th className="stock text-primary">S.N</th>
                  <th
                    className="stock text-primary d-flex align-items-center justify-content-between"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                    }
                  >
                    Date{" "}
                    {sortOrder === "asc" ? (
                      <i className="fas fa-chevron-up"></i>
                    ) : (
                      <i className="fas fa-chevron-down"></i>
                    )}
                  </th>
                  <th className="stock text-primary">Customer Name</th>
                  <th className="stock text-primary">Phone Number</th>
                  <th className="stock text-primary">Product Title</th>
                  <th className="stock text-primary">Price(Rs)</th>
                  <th className="stock text-primary">Quantity</th>
                  <th className="stock text-primary">Total Price (Rs)</th>
                  <th scope="col" className="stock text-primary">
                    After Coupon Applied(Rs)
                  </th>
                  <th className="stock text-primary">Payment Method</th>
                  <th className="stock text-primary">Transaction Code</th>
                  <th className="stock text-primary">Status</th>
                  <th className="stock text-primary">More</th>
                </tr>
              </thead>
              <tbody>
                {displayedProducts?.map((product, index) => (
                  <tr key={product._id}>
                    <td className="stock">{startIndex + index + 1}</td>
                    <td className="stock">
                      {product?.createdAt.split("T")[0]}
                    </td>
                    <td className="stock">{product?.user?.fullname}</td>
                    <td className="stock">{product?.user?.phone}</td>
                    <td>
                      {product?.products?.map((item, index) => (
                        <div className="stock d-block" key={index}>
                          {item?.product?.title}
                        </div>
                      ))}
                    </td>
                    <td>
                      {product?.products?.map((item, index) => (
                        <div className="stock d-block" key={index}>
                          {item?.product?.priceafterdiscount}
                        </div>
                      ))}
                    </td>
                    <td>
                      {product?.products?.map((item, index) => (
                        <div className="stock d-block" key={index}>
                          {item?.quantity}
                        </div>
                      ))}
                    </td>
                    <td>
                      {product?.products?.map((item, index) => (
                        <div key={index} className="stock d-block">
                          {item?.quantity * item?.product?.priceafterdiscount}
                        </div>
                      ))}
                    </td>
                    <td>{product?.priceaftercoupon}</td>
                    <td>{product?.payment_method}</td>
                    <td>{product?.transactionid}</td>
                    <td>
                      <select
                        value={status[product._id] || product.status}
                        onChange={(e) => {
                          setStatus((prev) => ({
                            ...prev,
                            [product._id]: e.target.value,
                          }));
                          updateOrderProduct(product?._id, e.target.value);
                        }}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirm">Confirm</option>
                        <option value="Processing">Processing</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    </td>
                    <td>
                      <i
                        onClick={() => setSelectOrder(product)}
                        className="fas fa-eye adminactionupdate"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-outline-primary"
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-dark stock  align-self-center">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-outline-primary"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default PendingOrder;
