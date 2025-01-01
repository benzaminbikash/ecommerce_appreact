import React, { useState } from "react";
import { NavLink } from "react-router";

function Category() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // Mock data for products
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
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4 ">
        <h1 className="fs-5 fw-bold mt-3">Category List</h1>
        <NavLink
          to="/admin/category/addcategory"
          className="btn btn-primary text-white py-2"
        >
          <i className="bi bi-plus me-2"></i>Add Category
        </NavLink>
      </div>

      <div className="table-responsive card p-3 ">
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th className="text-dark">S.N</th>
              <th className="text-dark">Category Name</th>
              <th className="text-dark">Image</th>
              <th className="text-dark"> Order Number</th>

              <th className="text-dark">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{startIndex + index + 1}</td>
                <td>{product.customer}</td>
                <td>{product.product}</td>
                <td>{product.total}</td>
                <td>
                  <i className="bi bi-pencil-square adminactionupdate"></i>
                  <i className="bi bi-trash ps-3 adminactiondelete"></i>
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

export default Category;
