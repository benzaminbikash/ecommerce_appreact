import React, { useState } from "react";
import { Link } from "react-router";

function DeliveredOrder() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const products = [
    {
      id: 1,
      customer: "John Doe",
      product: "Laptop",
      status: "Delivered",
      total: "$1200",
    },
    {
      id: 2,
      customer: "Jane Smith",
      product: "Headphones",
      status: "Processing",
      total: "$200",
    },
    {
      id: 3,
      customer: "Mike Johnson",
      product: "Smartphone",
      status: "Shipped",
      total: "$800",
    },
    {
      id: 4,
      customer: "Alice Brown",
      product: "Tablet",
      status: "Pending",
      total: "$500",
    },
    {
      id: 5,
      customer: "Bob White",
      product: "Monitor",
      status: "Delivered",
      total: "$300",
    },
  ];

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <main className="">
      <div className="mt-5">
        <h1 className="fs-5 fw-bold mt-3">Delivered List</h1>
      </div>

      <div className="d-flex gap-2 w-50 mb-4">
        <input type="date" className="productinput my-2" aria-label="Search" />
        <input type="date" className="productinput my-2" aria-label="Search" />
        <button
          className="btn-primary text-white productbotton my-2"
          type="button"
        >
          Filter
        </button>
      </div>

      <div className="table-responsive card p-3">
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Order Code</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Payment Method</th>
              <th>Payment Image</th>
              <th>Total Price</th>
              <th>Message</th>
              <th>Order Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{startIndex + index + 1}</td>
                <td>{product.customer}</td>
                <td>{product.product}</td>
                <td>{product.status}</td>
                <td>{product.status}</td>
                <td>{product.status}</td>
                <td>{product.status}</td>
                <td>{product.status}</td>
                <td>{product.total}</td>
                <td>
                  <i class="fas fa-eye adminactionupdate"></i>
                  <br />
                  <i className="bi bi-trash  adminactiondelete"></i>
                  <br />
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
        <span className="align-self-center">
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
    </main>
  );
}

export default DeliveredOrder;
