import React, { useState } from "react";
import { Link } from "react-router";
import BannerModal from "../../components/admin/dashboard/AdminDataModal";

function User() {
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
  console.log(totalPages);
  const startIndex = (currentPage - 1) * itemsPerPage;
  console.log("startIndex", startIndex);
  const endIndex = startIndex + itemsPerPage;
  console.log("endIndex", endIndex);
  const displayedProducts = products.slice(startIndex, endIndex);
  console.log(displayedProducts);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <main className="">
      <BannerModal
        data={{
          name: "zendaya",
        }}
      />
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
        <h1 className="fs-5 fw-bold mt-3">Users List</h1>
        <Link
          to="/admin/users/adduser"
          className="btn btn-primary  text-white py-2"
        >
          <i className="bi bi-plus me-2"></i>Add User
        </Link>
      </div>

      <div className="d-flex gap-2 w-50 mb-4">
        <input
          type="text"
          className="productinput my-2"
          placeholder="Search for a user..."
          aria-label="Search"
        />
        <button
          className="btn-primary text-white productbotton my-2"
          type="button"
        >
          Search
        </button>
      </div>

      <div className="table-responsive card p-3">
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Is User</th>
              <th>Is Admin</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{startIndex + index + 1}</td>
                <td>{product.customer}</td>
                <td>Lorem ipsum dolor sit amet consectetur.</td>
                <td>Hello</td>
                <td>{product.status}</td>
                <td>{product.total}</td>
                <td>
                  <i className="bi bi-pencil-square adminactionupdate"></i>
                  <i className="bi bi-trash ps-3 adminactiondelete"></i>
                  <i
                    class="fas fa-eye ps-3 adminactionupdate"
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

export default User;
